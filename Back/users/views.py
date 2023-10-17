from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout 
from .models import user_info, user_isu, user_refined_isu, open_major, open_gyoyang, lecture_review, total_year_abeek_info,graduate_18_info,graduate_21_info,abeek_18_major_info,abeek_21_major_info,abeek_18_MSC_info,abeek_21_MSC_info,relate_score_info,recommend_level_info,pre_penalty_score_info,user_eval
from rest_framework import status
from rest_framework import serializers
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
import subprocess
from time import perf_counter
from io import TextIOWrapper
import ctypes
from pathlib import Path
from django.http import JsonResponse
from PyPDF2 import PdfReader
import pandas as pd
from django.http import JsonResponse
from sklearn.preprocessing import StandardScaler


class RegisterView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        password_config=request.data.get('password_config')
        student_id = request.data.get('student_id')
        student_id_config = request.data.get('student_id_config')
        level = request.data.get('level')
        email = request.data.get('major')
        try:
            is_duplicated = User.objects.get(last_name=student_id)
            return Response({'message': '이미 가입된 학번 입니다'})
        except:
            if password!=password_config:
                return Response({'message': '비밀번호 불일치'})
            if student_id!=student_id_config:
                return Response({'message': '학번 불일치'})
            try:
                if int(level)<1 or int(level)>6:
                    return Response({'message': '학년이 잘못 입력되었습니다!'})
            except:
                return Response({'message': '학년이 잘못 입력되었습니다!'})
            
            user = User.objects.create_user(username=username, password=password, email = email, last_name = student_id, first_name = level)
            user.save()
            return Response({'message': '회원가입 성공'})


class LoginView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            temp_user = User.objects.get(username=username)
            return Response({'message': '로그인이 완료되었습니다.', 'data':temp_user.last_name})
        else:
            return Response({'message': '로그인에 실패하였습니다.'}, status=400)


class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({'message': '로그아웃이 완료되었습니다.'})


class ShowUserInfoView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        student_id = request.data.get('student_id')
        temp_user = User.objects.get(last_name = student_id)
        return Response({'message' : [temp_user.username, temp_user.email, temp_user.last_name, temp_user.first_name]})
        
        

class Pdf2dfView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        pdf_data = request.FILES['file']
        
        reader = PdfReader(pdf_data)
        pages = reader.pages
        text = ""
        for page in pages:
            sub = page.extract_text()
            text += sub
        text = text.replace('강건설계','강건설계 ')
        text = text.replace('인문사회과학/자연과학기반\n', ' 인문사회과학/자연과학기반 ')
        text = text.replace('자연/과학/기술의이해', '자연/과학/기술의이해 ')
        
        temp_list = text.split("\n")
        a= text.split("\n")
        student_id= a[2][:10]
        lec_list = []
        for line in temp_list:
            if ("제1전공" or "제2전공" or "제3전공") in line:
                idx = line.find("학적-등록회수와")
                line = line[:idx].strip()
                lec_list.append(line)

        df = pd.DataFrame(columns=['전공', '이수구분', '년도','학기','학수번호','과목명','영역','학점','성적(CL)','국제어'])

        for line in lec_list:
            전공= line[:4]

            line = line[5:]
            이수구분 = line[:2]
            
            line = line[2:]
            년도 = line[:4]

            line = line[4:]
            for i in range(len(line)):
                if line[i] == "학":
                    학기= line[:i].strip()
                    if line[i+1] == "기":
                        line = line[i+2:]
                    else :
                        line= line[i+1:]
                    break

            idx= line.find(" ")
            학수번호= line[:idx].strip()
            line = line[idx+1:]

            idx= line.find(" ")
            과목명= line[:idx].strip()
            line = line[idx+1:]

            #여기서 split으로 하면 안됨 띄어쓰기가 아니라 과목명이랑 영역 붙어 있는게 있고, \n로 구분되어 있는 것도 있음

            idx= line.find(" ")
            영역= line[:idx].strip()
            if 이수구분 == '선택':
                영역 = '일반선택'
            line = line[idx+1:]

            학점 = line[:3]
            line= line[3:]

            if '국제' in line:
                국제어 = "국제어"
            else:
                국제어 = "국제어X"

            line= line.replace("국제","")
            line.strip()

            line= line.replace("혁신","")
            line= line.replace("재수강","")
            line= line.replace("(Y)","")
            line=line.strip()

            성적=line
            df.loc[len(df)] = [전공,이수구분,년도,학기,학수번호,과목명,영역,학점,성적,국제어]

        start = len(list(user_isu.objects.all()))
        curr = 0
        for idx in range(len(df)):
            temp_row = df.iloc[idx,:]
            try:
                user_isu_update=user_isu.objects.get(student_id = int(student_id), lect_name = temp_row['과목명'])
                user_isu_update.grade_score = temp_row['성적(CL)']
            except:
                user_isu_update = user_isu(id = start + curr, student_id = student_id, grade_score = temp_row['성적(CL)'], lect_name = temp_row['과목명'], credit = int(float(temp_row['학점'])), lect_domain = temp_row['영역'])
                curr += 1
            user_isu_update.save()
        return Response({'message': '사용자 이수과목 업로드 완료!'})

class UpdatelevelView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        student_id = str(request.data.get('student_id'))
        temp_level = request.data.get('level')
        temp_user = User.objects.get(last_name = student_id)
        temp_user.first_name = temp_level
        temp_user.save()
        return Response({'message': '사용자 학년 업데이트 완료'})

class UpdateretryView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        temp_student_id = str(request.data.get('student_id'))
        temp_retry_standard = request.data.get('retry_standard')
        try:
            temp_user_info = user_info.objects.get(student_id = temp_student_id)
            temp_user_info.retry_standard = temp_retry_standard
        except:
            start = len(list(user_info.objects.all()))
            temp_user_info = user_info(id = start, student_id = temp_student_id, retry_standard = temp_retry_standard)
        temp_user_info.save()

        try:
            temp_user_refined_isu = user_refined_isu.objects.filter(student_id = temp_student_id)
            temp_user_refined_isu.delete()
            temp_user_isu = user_isu.objects.get(student_id = temp_student_id)
        except:
            temp_user_isu = user_isu.objects.filter(student_id = temp_student_id)

        재수강학점 =['A+','A','B+','B','C+','C','D+','D','F']
        standard = temp_retry_standard

        index = 재수강학점.index(standard)
        재수강학점 = 재수강학점[index:]

        들은과목 = []
        재수강할과목=[]
        temp_user_isu_list = list(temp_user_isu)
        
        for i in range(len(temp_user_isu_list)):
            if temp_user_isu_list[i].grade_score not in 재수강학점:
                들은과목.append(temp_user_isu_list[i].lect_name)
            else:
                재수강할과목.append(temp_user_isu_list[i].lect_name)

        start = len(list(user_refined_isu.objects.all()))
        for i in range(len(temp_user_isu_list)):
            if temp_user_isu[i].lect_name in 재수강할과목 :
                temp_user_refined_isu = user_refined_isu(id = start+i, student_id = temp_student_id, lect_name = temp_user_isu[i].lect_name, credit = temp_user_isu[i].credit, lect_domain = temp_user_isu[i].lect_domain, is_retry = 1)
            else:
                temp_user_refined_isu = user_refined_isu(id = start+i, student_id = temp_student_id, lect_name = temp_user_isu[i].lect_name, credit = temp_user_isu[i].credit, lect_domain = temp_user_isu[i].lect_domain, is_retry = 0)
            temp_user_refined_isu.save()
        return Response({'message': '재수강 기준값 업데이트 완료'})

class UpdatetypeView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        temp_student_id = str(request.data.get('student_id'))
        temp_usertype = request.data.get('usertype')
        try:
            temp_user_info = user_info.objects.get(student_id = temp_student_id)
            temp_user_info.usertype = temp_usertype
        except:
            start = len(list(user_info.objects.all()))
            temp_user_info = user_info(id = start, student_id = temp_student_id, usertype = temp_usertype)
        temp_user_info.save()
        return Response({'message': '수강 신청 유형 업데이트 완료'})


class ShowgraduateView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        temp_student_id = str(request.data.get('student_id'))
        temp_year = int(temp_student_id[2:4])
        if temp_year < 20:
            temp_year = 18
        graduate_db_class = eval(f"graduate_{temp_year}_info")
        temp_user_isu_list = list(user_isu.objects.filter(student_id = temp_student_id))
        if temp_year < 20:
            graduate_data = graduate_db_class.objects.get(id = 0)
            gradu_total_dict = {'인성':graduate_data.insung, 
                                   '리더십':graduate_data.leader,
                                   '의사소통':graduate_data.commu,
                                   '창의와사유':graduate_data.creative,
                                   '기본영어':graduate_data.b_eng,
                                   '전문영어,글로벌문화':graduate_data.p_eng,
                                   '기초자연과학':graduate_data.bsm,
                                   '기초자연과학(필수)':graduate_data.bsm_c,
                                   '인간/문화의이해':graduate_data.people,
                                   '사회/역사의이해':graduate_data.society,
                                   '자연/과학/기술의이해':graduate_data.tech,
                                   '교양총학점':graduate_data.gyoyang_total,
                                   '제1전공총학점':graduate_data.major_total,
                                   '총학점':graduate_data.credit_total}
            gradu_present_dict = {'인성':0, 
                                   '리더십':0,
                                   '의사소통':0,
                                   '창의와사유':0,
                                   '기본영어':0,
                                   '전문영어,글로벌문화':0,
                                   '기초자연과학':0,
                                   '기초자연과학(필수)':0,
                                   '인간/문화의이해':0,
                                   '사회/역사의이해':0,
                                   '자연/과학/기술의이해':0,
                                   '교양총학점':0,
                                   '제1전공총학점':0,
                                   '총학점':0}
            for temp_user_isu in temp_user_isu_list:
                gradu_present_dict['총학점'] = gradu_present_dict['총학점'] + int(temp_user_isu.credit)

                #사용자의 성적 DB를 하나씩 살펴보면서 우선 전공인지 확인
                if temp_user_isu.lect_domain == '전공일반' or temp_user_isu.lect_domain == '전공핵심':
                    #졸업요건의 전공학점 추가
                    gradu_present_dict['제1전공총학점'] = gradu_present_dict['제1전공총학점'] + int(temp_user_isu.credit)


                elif temp_user_isu.lect_domain == '일반선택':
                    continue
                
                elif temp_user_isu.lect_domain == '전문영어' or temp_user_isu.lect_domain == '글로벌문화':
                    gradu_present_dict['전문영어,글로벌문화'] = gradu_present_dict['전문영어,글로벌문화'] + int(temp_user_isu.credit)
                    gradu_present_dict['교양총학점'] = gradu_present_dict['교양총학점'] + int(temp_user_isu.credit)

                else :
                    gradu_present_dict[temp_user_isu.lect_domain] = gradu_present_dict[temp_user_isu.lect_domain] +  int(temp_user_isu.credit)
                    gradu_present_dict['교양총학점'] = gradu_present_dict['교양총학점'] + int(temp_user_isu.credit)
            
            real_gradu_list=[]
            data_gradu_list=[]

            for i in range(len(gradu_present_dict.keys())):
                total = gradu_total_dict[list(gradu_present_dict.keys())[i]]
                present= gradu_present_dict[list(gradu_present_dict.keys())[i]]

                real_gradu_list.append([present,total])
                if present>total :
                    data_gradu_list.append([total,total])
                else:
                    data_gradu_list.append([present,total])
            
            print(real_gradu_list) ### 내가 한 량 total, 졸업 요건 -> 숫자로 표현
            print(data_gradu_list) ### 충족 total, 졸업 요건 -> 그래프로 표현
            return Response({'message': data_gradu_list})
        ####else: 여기에서는 21학번 전용으로 하기!!!! ###################3 


class ShowabeekView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        temp_student_id = str(request.data.get('student_id'))
        temp_year = int(temp_student_id[2:4])
        if temp_year < 20:
            temp_year = 18
        abeek_db_major_class = eval(f"abeek_{temp_year}_major_info")
        abeek_db_MSC_class = eval(f"abeek_{temp_year}_MSC_info")
        abeek_total_data = total_year_abeek_info.objects.get(year=temp_student_id[:4])

        temp_user_isu_list = list(user_isu.objects.filter(student_id = temp_student_id))
        아빅전공_18_must_list = []
        아빅전공_18_total_list = []
        아빅MSC_18_must_list = []
        아빅MSC_18_total_list = []

        for 아빅전공_18_must_element in list(abeek_db_major_class.objects.filter(is_must=1)):
            아빅전공_18_must_list.append(아빅전공_18_must_element.lect_name)
        for 아빅전공_18_total_element in list(abeek_db_major_class.objects.all()):
            아빅전공_18_total_list.append(아빅전공_18_total_element.lect_name)
        for 아빅MSC_18_must_element in list(abeek_db_MSC_class.objects.filter(is_must=1)):
            아빅MSC_18_must_list.append(아빅MSC_18_must_element.lect_name)
        for 아빅MSC_18_total_element in list(abeek_db_MSC_class.objects.all()):
            아빅MSC_18_total_list.append(아빅MSC_18_total_element.lect_name)
        
        abeek_total_dict={
            'abeek_gyoyang': abeek_total_data.abeek_gyoyang,
            'abeek_MSC_must': abeek_total_data.abeek_MSC_must,
            'abeek_MSC_total': abeek_total_data.abeek_MSC_total,
            'abeek_major_must': abeek_total_data.abeek_major_must,
            'abeek_major_total': abeek_total_data.abeek_major_total,
            'abeek_design': abeek_total_data.abeek_design
        }
        abeek_present_dict={
            'abeek_gyoyang': 0,
            'abeek_MSC_must': 0,
            'abeek_MSC_total': 0,
            'abeek_major_must': 0,
            'abeek_major_total': 0,
            'abeek_design': 0
        }
            

        for temp_user_isu in temp_user_isu_list:
            if temp_user_isu.lect_name in 아빅전공_18_total_list:
                abeek_present_dict['abeek_major_total'] = abeek_present_dict['abeek_major_total'] + int(temp_user_isu.credit)
            if temp_user_isu.lect_name in 아빅전공_18_must_list:
                abeek_present_dict['abeek_major_must'] = abeek_present_dict['abeek_major_must'] + int(temp_user_isu.credit)
            
            if temp_user_isu.lect_name in 아빅MSC_18_total_list :
                abeek_present_dict['abeek_MSC_total']= abeek_present_dict['abeek_MSC_total'] +int(temp_user_isu.credit)
                if  temp_user_isu.lect_name in 아빅MSC_18_must_list :
                    abeek_present_dict['abeek_MSC_must']= abeek_present_dict['abeek_MSC_must'] +int(temp_user_isu.credit)

        아빅전공_18_설계 = list(abeek_db_major_class.objects.exclude(credit_design=0))
        user_class = []
        for temp_user_isu in temp_user_isu_list:
            user_class.append(temp_user_isu.lect_name)
        for 아빅전공_18_설계_원소 in 아빅전공_18_설계:
            if 아빅전공_18_설계_원소.lect_name in user_class:
                abeek_present_dict['abeek_design'] = abeek_present_dict['abeek_design'] + int(아빅전공_18_설계_원소.credit_design)
        

        ############## 전문교양 (BSM, DS 제외한 애들만 count) ################# if 18, 21학번
        if temp_year < 20:
            전문교양_18_total_list = ['인성','리더십','의사소통','창의와사유','기본영어', '전문영어', '글로벌문화', '인간/문화의이해','사회/역사의이해','자연/과학/기술의이해']
            for temp_user_isu in temp_user_isu_list:
                if temp_user_isu.lect_domain in 전문교양_18_total_list:
                    abeek_present_dict['abeek_gyoyang'] += temp_user_isu.credit
        #else: ########## 21전용으로

        real_abeek_list=[]
        data_abeek_list=[]

        for i in range(len(abeek_present_dict.keys())):
            total = abeek_total_dict[list(abeek_present_dict.keys())[i]]
            present= abeek_present_dict[list(abeek_present_dict.keys())[i]]

            real_abeek_list.append([present,total])
            if present>total :
                data_abeek_list.append([total,total])
            else:
                data_abeek_list.append([present,total])

        print(real_abeek_list)
        print(data_abeek_list)
        return Response({'message': data_abeek_list})
        
from sklearn.preprocessing import MinMaxScaler

def scale_values(lst):
    # 리스트를 2차원 배열 형태로 변환합니다.
    lst_2d = [[value] for value in lst]

    # MinMaxScaler 객체를 생성합니다.
    scaler = MinMaxScaler(feature_range=(0, 5))

    # 스케일링을 수행합니다.
    scaled_values = scaler.fit_transform(lst_2d)

    # 2차원 배열을 1차원 리스트로 변환하여 반환합니다.
    scaled_list = [round(value[0]) for value in scaled_values]

    return scaled_list


class RecomgyoyangView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        temp_student_id = str(request.data.get('student_id'))
        temp_year = int(temp_student_id[2:4])
        if temp_year < 20:
            temp_year = 18
        돋보기영역 = request.data.get('lect_domain')
        temp_user_info = user_info.objects.get(student_id = temp_student_id)
        user_type = temp_user_info.usertype
        교양_2023 = list(open_gyoyang.objects.all())
        temp_user_refined_isu = list(user_refined_isu.objects.filter(student_id = temp_student_id, is_retry = 0))
        들은과목 = []
        for temp_user_refined_isu_data in temp_user_refined_isu:
            들은과목.append(temp_user_refined_isu_data.lect_name)
        
        idx_list =[]
        for i in range(len(교양_2023)):
            if 교양_2023[i].lect_name in 들은과목:
                idx_list.append(i)
            elif temp_year < 20:
                if 교양_2023[i].lect_name in ['창의적융합디자인']:
                    idx_list.append(i)
            

        안들었던교양_2023 = 교양_2023
        idx_list.sort(reverse=True)
        for id in idx_list:
            del 안들었던교양_2023[id]
        
        idx_list =[]
        lect_domain = []
        for i in range(len(안들었던교양_2023)):
            if temp_year < 20:
                lect_domain.append(eval(안들었던교양_2023[i].lect_domain)[1])
            else:
                lect_domain.append(eval(안들었던교양_2023[i].lect_domain)[0])
            if 돋보기영역 == '전문영어/글로벌문화':
                if '전문영어' in lect_domain[i]:
                    idx_list.append(i)
                elif '글로벌문화' in lect_domain[i]:
                    idx_list.append(i)
            else:
                if 돋보기영역 in lect_domain[i]:      
                    idx_list.append(i)

        추천교양_2023 = []
        for id in idx_list:
            추천교양_2023.append(안들었던교양_2023[id])
        
        scored_추천교양 = pd.DataFrame(columns=['lect_name','prof_name','lect_room','lect_time','lect_time_numbered','lect_onoff','lect_domain','credit','total_rating','hw_rating','team_rating','grade_score_rating','hashtag'])
        notfound=[]
        for i in range(len(추천교양_2023)):
            try:
                교양review = lecture_review.objects.get(lect_name = 추천교양_2023[i].lect_name, prof_name = 추천교양_2023[i].prof_name)
                lect_name= 추천교양_2023[i].lect_name
                prof_name= 추천교양_2023[i].prof_name
                lect_room= 추천교양_2023[i].lect_room
                lect_time= 추천교양_2023[i].lect_time
                lect_time_numbered = 추천교양_2023[i].lect_time_numbered
                lect_onoff = 추천교양_2023[i].lect_onoff
                credit = 추천교양_2023[i].credit


                if temp_year < 20:
                    lect_domain = eval(추천교양_2023[i].lect_domain)[1]
                else:
                    lect_domain = eval(추천교양_2023[i].lect_domain)[0]

                total_rating= 교양review.total_rating
                hw_rating= 교양review.hw_rating
                team_rating= 교양review.team_rating
                grade_score_rating= 교양review.grade_score_rating
                hashtag= 교양review.hashtag




                new_row_df = pd.DataFrame([[lect_name, prof_name,lect_room, lect_time, lect_time_numbered, lect_onoff, lect_domain, credit, total_rating, hw_rating, team_rating, grade_score_rating,hashtag]], columns=scored_추천교양.columns)
                scored_추천교양 = pd.concat([scored_추천교양, new_row_df], ignore_index=True)

            except:
                if temp_year < 20:
                    lect_domain = eval(추천교양_2023[i].lect_domain)[1]
                else:
                    lect_domain = eval(추천교양_2023[i].lect_domain)[0]
                notfound.append([추천교양_2023[i].lect_name,
                                추천교양_2023[i].prof_name,
                                추천교양_2023[i].lect_room,
                                추천교양_2023[i].lect_time,
                                추천교양_2023[i].lect_time_numbered,
                                추천교양_2023[i].lect_onoff,
                                lect_domain,
                                추천교양_2023[i].credit,
                                0,
                                0,
                                0,
                                0,
                                []])


        # 데이터프레임에서 특정 열 선택
        total_rating = scored_추천교양['total_rating']
        hw_rating = scored_추천교양['hw_rating']
        team_rating = scored_추천교양['team_rating']
        grade_score_rating = scored_추천교양['grade_score_rating']


        # StandardScaler 객체 생성 및 표준화 적용
        if len(total_rating)>0:
            scaler = StandardScaler()
            scaled_total_rating = scaler.fit_transform(total_rating.values.reshape(-1, 1))
            scaled_hw_rating = scaler.fit_transform(hw_rating.values.reshape(-1, 1))
            scaled_team_rating = scaler.fit_transform(team_rating.values.reshape(-1, 1))
            scaled_grade_score_rating = scaler.fit_transform(grade_score_rating.values.reshape(-1, 1))

            # 스케일링된 열을 원래 데이터프레임에 업데이트
            scored_추천교양['total_rating'] = scaled_total_rating*10
            scored_추천교양['hw_rating'] = scaled_hw_rating*10
            scored_추천교양['team_rating'] = scaled_team_rating*10
            scored_추천교양['grade_score_rating'] = scaled_grade_score_rating*10

            scored_추천교양['total_rating'] = scored_추천교양['total_rating'].apply(lambda x: round(x, 2))
            scored_추천교양['hw_rating'] = scored_추천교양['hw_rating'].apply(lambda x: round(x, 2))
            scored_추천교양['team_rating'] = scored_추천교양['team_rating'].apply(lambda x: round(x, 2))
            scored_추천교양['grade_score_rating'] = scored_추천교양['grade_score_rating'].apply(lambda x: round(x, 2))

        new_row_df = pd.DataFrame(notfound, columns=scored_추천교양.columns)
        scored_추천교양 = pd.concat([scored_추천교양, new_row_df], ignore_index=True)
        총점수_list=[]

        for i in range(len(scored_추천교양)):
            if user_type==1 :
                총점수=scored_추천교양['total_rating'][i] + scored_추천교양['hw_rating'][i]*1 + scored_추천교양['team_rating'][i]*2 + scored_추천교양['grade_score_rating'][i]*0.5
            elif user_type==2 :
                총점수=scored_추천교양['total_rating'][i] + scored_추천교양['hw_rating'][i]*0.5 + scored_추천교양['team_rating'][i]*2 + scored_추천교양['grade_score_rating'][i]*1
            elif user_type==3 :
                총점수=scored_추천교양['total_rating'][i] + scored_추천교양['hw_rating'][i]*1 + scored_추천교양['team_rating'][i]*0.5 + scored_추천교양['grade_score_rating'][i]*2
            elif user_type==4 :
                총점수=scored_추천교양['total_rating'][i] + scored_추천교양['hw_rating'][i]*0.5 + scored_추천교양['team_rating'][i]*1 + scored_추천교양['grade_score_rating'][i]*2
            elif user_type==5 :
                총점수=scored_추천교양['total_rating'][i] + scored_추천교양['hw_rating'][i]*2 + scored_추천교양['team_rating'][i]*1 + scored_추천교양['grade_score_rating'][i]*0.5
            elif user_type==6 :
                총점수=scored_추천교양['total_rating'][i] + scored_추천교양['hw_rating'][i]*2 + scored_추천교양['team_rating'][i]*0.5 + scored_추천교양['grade_score_rating'][i]*1

            총점수_list.append(총점수)

        scored_추천교양['총점수'] = 총점수_list

        if len(총점수_list)>0:
            scaled_values = scale_values(총점수_list)
            scored_추천교양['총점수'] = scaled_values

        sorted_scored_추천교양 = scored_추천교양.sort_values(by='총점수',ascending=False)
        
        return Response({'message': sorted_scored_추천교양.values.tolist()})



class RecommajorView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        temp_student_id = str(request.data.get('student_id'))
        temp_year = int(temp_student_id[2:4])
        if temp_year < 20:
            temp_year = 18
        돋보기영역 = request.data.get('lect_domain')
        temp_user_info = user_info.objects.get(student_id = temp_student_id)
        user_type = temp_user_info.usertype
        전공_2023 = list(open_major.objects.all())
        temp_user_refined_isu = list(user_refined_isu.objects.filter(student_id = temp_student_id, is_retry = 0))
        temp_user_isu = list(user_isu.objects.filter(student_id = temp_student_id))
        rela_class = list(relate_score_info.objects.all())
        first_class = list(pre_penalty_score_info.objects.all())
        chall_class = list(recommend_level_info.objects.all())
        사용자학년 = User.objects.get(last_name=temp_student_id).first_name

        들은과목 = []
        듣긴한과목 = []
        for temp_user_refined_isu_data in temp_user_refined_isu:
            들은과목.append(temp_user_refined_isu_data.lect_name)
        for temp_user_isu_data in temp_user_isu:
            듣긴한과목.append(temp_user_isu_data.lect_name)
        
        idx_list =[]
        for i in range(len(전공_2023)):
            if 전공_2023[i].lect_name in 들은과목:
                idx_list.append(i)
            elif temp_year < 20:
                if 전공_2023[i].lect_name in ['공학기초수학1', '공학기초수학2']:
                    idx_list.append(i)

        안들었던전공_2023 = 전공_2023
        idx_list.sort(reverse=True)
        for id in idx_list:
            del 안들었던전공_2023[id]
        
        idx_list =[]
        for i in range(len(안들었던전공_2023)):   
            if 돋보기영역 in 안들었던전공_2023[i].lect_domain:      
                idx_list.append(i)

        추천전공_2023 = []
        for id in idx_list:
            추천전공_2023.append(안들었던전공_2023[id])
        
        scored_추천전공 = pd.DataFrame(columns=['lect_name','prof_name','lect_room','lect_time','lect_time_numbered','lect_onoff','lect_domain','credit','total_rating','hw_rating','team_rating','grade_score_rating','hashtag'])
        notfound=[]
        추천전공명_list = []
        for i in range(len(추천전공_2023)):
            추천전공명_list.append(추천전공_2023[i].lect_name)
            try:
                전공review = lecture_review.objects.get(lect_name = 추천전공_2023[i].lect_name, prof_name = 추천전공_2023[i].prof_name)
                lect_name= 추천전공_2023[i].lect_name
                prof_name= 추천전공_2023[i].prof_name
                lect_room= 추천전공_2023[i].lect_room
                lect_time= 추천전공_2023[i].lect_time
                lect_time_numbered = 추천전공_2023[i].lect_time_numbered
                lect_onoff = 추천전공_2023[i].lect_onoff
                credit = 추천전공_2023[i].credit
                lect_domain = 추천전공_2023[i].lect_domain

                total_rating= 전공review.total_rating
                hw_rating= 전공review.hw_rating
                team_rating= 전공review.team_rating
                grade_score_rating= 전공review.grade_score_rating
                hashtag= 전공review.hashtag




                new_row_df = pd.DataFrame([[lect_name, prof_name,lect_room, lect_time, lect_time_numbered, lect_onoff, lect_domain, credit, total_rating, hw_rating, team_rating, grade_score_rating,hashtag]], columns=scored_추천전공.columns)
                scored_추천전공 = pd.concat([scored_추천전공, new_row_df], ignore_index=True)

            except:
                notfound.append([추천전공_2023[i].lect_name,
                                추천전공_2023[i].prof_name,
                                추천전공_2023[i].lect_room,
                                추천전공_2023[i].lect_time,
                                추천전공_2023[i].lect_onoff,
                                추천전공_2023[i].lect_time_numbered,
                                추천전공_2023[i].lect_domain,
                                추천전공_2023[i].credit,
                                0,
                                0,
                                0,
                                0,
                                []])


        # 데이터프레임에서 특정 열 선택
        total_rating = scored_추천전공['total_rating']
        hw_rating = scored_추천전공['hw_rating']
        team_rating = scored_추천전공['team_rating']
        grade_score_rating = scored_추천전공['grade_score_rating']


        # StandardScaler 객체 생성 및 표준화 적용
        scaler = StandardScaler()

        scaled_total_rating = scaler.fit_transform(total_rating.values.reshape(-1, 1))
        scaled_hw_rating = scaler.fit_transform(hw_rating.values.reshape(-1, 1))
        scaled_team_rating = scaler.fit_transform(team_rating.values.reshape(-1, 1))
        scaled_grade_score_rating = scaler.fit_transform(grade_score_rating.values.reshape(-1, 1))

        # 스케일링된 열을 원래 데이터프레임에 업데이트
        scored_추천전공['total_rating'] = scaled_total_rating*10
        scored_추천전공['hw_rating'] = scaled_hw_rating*10
        scored_추천전공['team_rating'] = scaled_team_rating*10
        scored_추천전공['grade_score_rating'] = scaled_grade_score_rating*10

        scored_추천전공['total_rating'] = scored_추천전공['total_rating'].apply(lambda x: round(x, 2))
        scored_추천전공['hw_rating'] = scored_추천전공['hw_rating'].apply(lambda x: round(x, 2))
        scored_추천전공['team_rating'] = scored_추천전공['team_rating'].apply(lambda x: round(x, 2))
        scored_추천전공['grade_score_rating'] = scored_추천전공['grade_score_rating'].apply(lambda x: round(x, 2))

        new_row_df = pd.DataFrame(notfound, columns=scored_추천전공.columns)
        scored_추천전공 = pd.concat([scored_추천전공, new_row_df], ignore_index=True)
        총점수_list=[]

        for i in range(len(scored_추천전공)):
            if user_type==1 :
                총점수=scored_추천전공['total_rating'][i] + scored_추천전공['hw_rating'][i]*1 + scored_추천전공['team_rating'][i]*2 + scored_추천전공['grade_score_rating'][i]*0.5
            elif user_type==2 :
                총점수=scored_추천전공['total_rating'][i] + scored_추천전공['hw_rating'][i]*0.5 + scored_추천전공['team_rating'][i]*2 + scored_추천전공['grade_score_rating'][i]*1
            elif user_type==3 :
                총점수=scored_추천전공['total_rating'][i] + scored_추천전공['hw_rating'][i]*1 + scored_추천전공['team_rating'][i]*0.5 + scored_추천전공['grade_score_rating'][i]*2
            elif user_type==4 :
                총점수=scored_추천전공['total_rating'][i] + scored_추천전공['hw_rating'][i]*0.5 + scored_추천전공['team_rating'][i]*1 + scored_추천전공['grade_score_rating'][i]*2
            elif user_type==5 :
                총점수=scored_추천전공['total_rating'][i] + scored_추천전공['hw_rating'][i]*2 + scored_추천전공['team_rating'][i]*1 + scored_추천전공['grade_score_rating'][i]*0.5
            elif user_type==6 :
                총점수=scored_추천전공['total_rating'][i] + scored_추천전공['hw_rating'][i]*2 + scored_추천전공['team_rating'][i]*0.5 + scored_추천전공['grade_score_rating'][i]*1

            총점수_list.append(총점수)

        scored_추천전공['총점수'] = 총점수_list
        #### 팀점수, hw점수 이런 것들 합친 결과... 이제 선이수 이런 점수 추가해야함
        연관점수_list=[]
        for i in range(len(scored_추천전공)):
            score=0
            for j in range(len(rela_class)):
                if scored_추천전공.loc[i,'lect_name'] == rela_class[j].lect_name:
                    if rela_class[j].relate_lect_name in 듣긴한과목:
                        score+= rela_class[j].relate_score

            연관점수_list.append(score)
        scored_추천전공['연관점수'] = 연관점수_list

        선이수점수_list=[]
        for i in range(len(scored_추천전공)):
            score=0
            for j in range(len(first_class)):
                if scored_추천전공.loc[i,'lect_name']  == first_class[j].lect_name:
                    if first_class[j].pre_lect_name not in 듣긴한과목:
                        score+= first_class[j].pre_penalty_score
            선이수점수_list.append(score)
        scored_추천전공['선이수점수'] = 선이수점수_list


        추천학년점수_list=[]
        for i in range(len(scored_추천전공)):
            score=0
            for j in range(len(chall_class)):
                if scored_추천전공.loc[i,'lect_name'] == chall_class[j].lect_name:
                    if int(사용자학년) >= int(chall_class[j].level):
                        score+= 30
                    else:
                        score-= 20
            추천학년점수_list.append(score)
        scored_추천전공['추천학년점수'] = 추천학년점수_list

        
        scored_추천전공['총점수'] += (scored_추천전공['연관점수']+scored_추천전공['선이수점수']+scored_추천전공['추천학년점수'])

        if len(scored_추천전공['총점수'])>0:
            scaled_values = scale_values(scored_추천전공['총점수'])
            scored_추천전공['총점수'] = scaled_values
        sorted_scored_추천전공 = scored_추천전공.sort_values(by='총점수',ascending=False)

        

        

        print(sorted_scored_추천전공)
        
        return Response({'message': sorted_scored_추천전공.values.tolist()})
    


# Abeek 필수, 전체, 설계 (<- filter) ########## 이거 해야 함
class RecomabeekView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        temp_student_id = str(request.data.get('student_id'))
        temp_year = int(temp_student_id[2:4])
        if temp_year < 20:
            temp_year = 18
        돋보기영역 = request.data.get('lect_domain') # 전공필수, 전공전체, 전공설계, MSC필수, MSC전체, 전문교양(<- )
        temp_user_info = user_info.objects.get(student_id = temp_student_id)
        user_type = temp_user_info.usertype
        전공_2023 = list(open_major.objects.all())
        교양_2023 = list(open_gyoyang.objects.all())
        개설_2023 = 전공_2023 + 교양_2023
        temp_user_refined_isu = list(user_refined_isu.objects.filter(student_id = temp_student_id, is_retry = 0))
        temp_user_isu = list(user_isu.objects.filter(student_id = temp_student_id))
        rela_class = list(relate_score_info.objects.all())
        first_class = list(pre_penalty_score_info.objects.all())
        chall_class = list(recommend_level_info.objects.all())
        사용자학년 = User.objects.get(last_name=temp_student_id).first_name

        
        ########### 수정예정
        타겟 = []
        if 돋보기영역 == '전공필수':
            for item in list(eval(f"abeek_{temp_year}_major_info").objects.filter(is_must=1)):
                타겟.append(item.lect_name)
        elif 돋보기영역 == '전공전체':
            for item in list(eval(f"abeek_{temp_year}_major_info").objects.all()):
                타겟.append(item.lect_name)
        elif 돋보기영역 == 'MSC필수':
            for item in list(eval(f"abeek_{temp_year}_MSC_info").objects.filter(is_must=1)):
                타겟.append(item.lect_name)
        elif 돋보기영역 == 'MSC전체':
            for item in list(eval(f"abeek_{temp_year}_MSC_info").objects.all()):
                타겟.append(item.lect_name)
        elif 돋보기영역 == '전공설계':
            for item in list(eval(f"abeek_{temp_year}_major_info").objects.exclude(credit_design=0)):
                타겟.append(item.lect_name)
        elif 돋보기영역 == '전문교양':
            if temp_year < 20:
                전문교양영역 = ['인성','리더십','의사소통','창의와사유','기본영어','전문영어','글로벌문화','인간/문화의이해','사회/역사의이해','자연/과학/기술의이해']
                index = 1
            else: # 21학번
                전문교양영역 = ['성균인성.리더십','고전.명저','의사소통','글로벌(필수)','글로벌','인간/문화','사회/역사','자연/과학/기술']
                index = 0
            for item in list(open_gyoyang.objects.all()):
                if eval(item.lect_domain)[index] in 전문교양영역:
                    타겟.append(item.lect_name)
        
        들은과목 = []
        듣긴한과목 = []
        for temp_user_refined_isu_data in temp_user_refined_isu:
            들은과목.append(temp_user_refined_isu_data.lect_name)
        
        for temp_user_isu_data in temp_user_isu:
            듣긴한과목.append(temp_user_isu_data.lect_name)
            if 돋보기영역 == 'MSC필수': # 타겟 : MSC필수 과목명들
                if temp_user_isu_data.lect_name in 타겟:
                    temp_group_num = eval(f"abeek_{temp_year}_MSC_info").objects.get(lect_name=temp_user_isu_data.lect_name).group_num
                    group_list = list(eval(f"abeek_{temp_year}_MSC_info").objects.filter(group_num = temp_group_num))
                    for group_list_item in group_list:
                        if group_list_item.lect_name != temp_user_isu_data.lect_name:
                            try: 
                                들은과목.index(group_list_item.lect_name)
                            except:
                                들은과목.append(group_list_item.lect_name)
    
        idx_list =[]
        for i in range(len(개설_2023)):
            if 개설_2023[i].lect_name in 들은과목:
                idx_list.append(i)
            elif temp_year <=19:
                if 개설_2023[i].lect_name in ['공학기초수학1', '공학기초수학2']:
                    idx_list.append(i)
                elif 개설_2023[i].lect_name in ['창의적융합디자인']:
                    idx_list.append(i)

        안들었던개설_2023 = 개설_2023
        idx_list.sort(reverse=True)
        for id in idx_list:
            del 안들었던개설_2023[id]
        
            
        idx_list =[]
        for i in range(len(안들었던개설_2023)):   
            if 안들었던개설_2023[i].lect_name in 타겟:
                idx_list.append(i)

        추천개설_2023 = []
        for id in idx_list:
            추천개설_2023.append(안들었던개설_2023[id])
        
        scored_추천개설 = pd.DataFrame(columns=['lect_name','prof_name','lect_room','lect_time','lect_time_numbered','lect_onoff','lect_domain','credit','total_rating','hw_rating','team_rating','grade_score_rating','hashtag'])
        notfound=[]
        추천개설명_list = []
        for i in range(len(추천개설_2023)):
            추천개설명_list.append(추천개설_2023[i].lect_name)
            try:
                개설review = lecture_review.objects.get(lect_name = 추천개설_2023[i].lect_name, prof_name = 추천개설_2023[i].prof_name)
                lect_name= 추천개설_2023[i].lect_name
                prof_name= 추천개설_2023[i].prof_name
                lect_room= 추천개설_2023[i].lect_room
                lect_time= 추천개설_2023[i].lect_time
                lect_time_numbered = 추천개설_2023[i].lect_time_numbered
                lect_onoff = 추천개설_2023[i].lect_onoff
                credit = 추천개설_2023[i].credit

                total_rating= 개설review.total_rating
                hw_rating= 개설review.hw_rating
                team_rating= 개설review.team_rating
                grade_score_rating= 개설review.grade_score_rating
                hashtag= 개설review.hashtag




                new_row_df = pd.DataFrame([[lect_name, prof_name,lect_room, lect_time, lect_time_numbered, lect_onoff, 돋보기영역, credit, total_rating, hw_rating, team_rating, grade_score_rating,hashtag]], columns=scored_추천개설.columns)
                scored_추천개설 = pd.concat([scored_추천개설, new_row_df], ignore_index=True)

            except :
                notfound.append([추천개설_2023[i].lect_name,
                                추천개설_2023[i].prof_name,
                                추천개설_2023[i].lect_room,
                                추천개설_2023[i].lect_time,
                                추천개설_2023[i].lect_onoff,
                                추천개설_2023[i].lect_time_numbered,
                                돋보기영역,
                                추천개설_2023[i].credit,
                                0,
                                0,
                                0,
                                0,
                                []])


        # 데이터프레임에서 특정 열 선택
        total_rating = scored_추천개설['total_rating']
        hw_rating = scored_추천개설['hw_rating']
        team_rating = scored_추천개설['team_rating']
        grade_score_rating = scored_추천개설['grade_score_rating']
        
        # StandardScaler 객체 생성 및 표준화 적용
        if len(total_rating)>0:
            scaler = StandardScaler()
            
            scaled_total_rating = scaler.fit_transform(total_rating.values.reshape(-1, 1))
            scaled_hw_rating = scaler.fit_transform(hw_rating.values.reshape(-1, 1))
            scaled_team_rating = scaler.fit_transform(team_rating.values.reshape(-1, 1))
            scaled_grade_score_rating = scaler.fit_transform(grade_score_rating.values.reshape(-1, 1))

            # 스케일링된 열을 원래 데이터프레임에 업데이트
            scored_추천개설['total_rating'] = scaled_total_rating*10
            scored_추천개설['hw_rating'] = scaled_hw_rating*10
            scored_추천개설['team_rating'] = scaled_team_rating*10
            scored_추천개설['grade_score_rating'] = scaled_grade_score_rating*10

            scored_추천개설['total_rating'] = scored_추천개설['total_rating'].apply(lambda x: round(x, 2))
            scored_추천개설['hw_rating'] = scored_추천개설['hw_rating'].apply(lambda x: round(x, 2))
            scored_추천개설['team_rating'] = scored_추천개설['team_rating'].apply(lambda x: round(x, 2))
            scored_추천개설['grade_score_rating'] = scored_추천개설['grade_score_rating'].apply(lambda x: round(x, 2))

        new_row_df = pd.DataFrame(notfound, columns=scored_추천개설.columns)
        scored_추천개설 = pd.concat([scored_추천개설, new_row_df], ignore_index=True)
        총점수_list=[]

        for i in range(len(scored_추천개설)):
            if user_type==1 :
                총점수=scored_추천개설['total_rating'][i] + scored_추천개설['hw_rating'][i]*1 + scored_추천개설['team_rating'][i]*2 + scored_추천개설['grade_score_rating'][i]*0.5
            elif user_type==2 :
                총점수=scored_추천개설['total_rating'][i] + scored_추천개설['hw_rating'][i]*0.5 + scored_추천개설['team_rating'][i]*2 + scored_추천개설['grade_score_rating'][i]*1
            elif user_type==3 :
                총점수=scored_추천개설['total_rating'][i] + scored_추천개설['hw_rating'][i]*1 + scored_추천개설['team_rating'][i]*0.5 + scored_추천개설['grade_score_rating'][i]*2
            elif user_type==4 :
                총점수=scored_추천개설['total_rating'][i] + scored_추천개설['hw_rating'][i]*0.5 + scored_추천개설['team_rating'][i]*1 + scored_추천개설['grade_score_rating'][i]*2
            elif user_type==5 :
                총점수=scored_추천개설['total_rating'][i] + scored_추천개설['hw_rating'][i]*2 + scored_추천개설['team_rating'][i]*1 + scored_추천개설['grade_score_rating'][i]*0.5
            elif user_type==6 :
                총점수=scored_추천개설['total_rating'][i] + scored_추천개설['hw_rating'][i]*2 + scored_추천개설['team_rating'][i]*0.5 + scored_추천개설['grade_score_rating'][i]*1

            총점수_list.append(총점수)

        scored_추천개설['총점수'] = 총점수_list
        #### 팀점수, hw점수 이런 것들 합친 결과... 이제 선이수 이런 점수 추가해야함
        연관점수_list=[]
        for i in range(len(scored_추천개설)):
            score=0
            for j in range(len(rela_class)):
                if scored_추천개설.loc[i,'lect_name'] == rela_class[j].lect_name:
                    if rela_class[j].relate_lect_name in 듣긴한과목:
                        score+= rela_class[j].relate_score

            연관점수_list.append(score)
        scored_추천개설['연관점수'] = 연관점수_list

        선이수점수_list=[]
        for i in range(len(scored_추천개설)):
            score=0
            for j in range(len(first_class)):
                if scored_추천개설.loc[i,'lect_name']  == first_class[j].lect_name:
                    if first_class[j].pre_lect_name not in 듣긴한과목:
                        score+= first_class[j].pre_penalty_score
            선이수점수_list.append(score)
        scored_추천개설['선이수점수'] = 선이수점수_list


        추천학년점수_list=[]
        for i in range(len(scored_추천개설)):
            score=0
            for j in range(len(chall_class)):
                if scored_추천개설.loc[i,'lect_name'] == chall_class[j].lect_name:
                    if int(사용자학년) >= int(chall_class[j].level):
                        score+= 30
                    else:
                        score-= 20
            추천학년점수_list.append(score)
        scored_추천개설['추천학년점수'] = 추천학년점수_list

        
        scored_추천개설['총점수'] += (scored_추천개설['연관점수']+scored_추천개설['선이수점수']+scored_추천개설['추천학년점수'])

        sorted_scored_추천개설 = scored_추천개설.sort_values(by='총점수',ascending=False)

        print(sorted_scored_추천개설)
        
        return Response({'message': sorted_scored_추천개설.values.tolist()})


class AddTimeTableView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        try:
            student_id = str(request.data.get('student_id'))
        except:
            return Response({'message':False})
        temp_lect_name = request.data.get('lect_name')
        temp_prof_name = request.data.get('prof_name')
        temp_lect_domain = request.data.get('lect_domain')
        temp_isString = request.data.get('isString')
        if temp_isString:
            temp_lect_time_numbered = eval(request.data.get('lect_time_numbered'))
        else:
            temp_lect_time_numbered = request.data.get('lect_time_numbered')
        temp_credit = int(request.data.get('credit'))
        temp_lect_time = request.data.get('lect_time')
        temp_user = user_info.objects.get(student_id = student_id)

        newtime=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        time = temp_lect_time_numbered
        start = int(time[0][1:])

        for i in range(len(time)) :
            day = time[i][0]

            if i == len(time)-1:
                end = int(time[i][1:])+1
                timestart = 165+ 5.5*start
                height = 5.5*(end-start)
                if day == "월":
                    newtime[0] = [15,timestart,height]
                if day == "화":
                    newtime[1] = [15,timestart,height]
                if day == "수":
                    newtime[2] = [15,timestart,height]
                if day == "목":
                    newtime[3] = [15,timestart,height]
                if day == "금":
                    newtime[4] = [15,timestart,height]
                break


            elif (time[i+1][0] != time[i][0]) :
                end = int(time[i][1:])
                timestart = 165+ 5.5*start
                height = 5.5*(end-start+1)
                if day == "월":
                    newtime[0] = [15,timestart,height]
                if day == "화":
                    newtime[1] = [15,timestart,height]
                if day == "수":
                    newtime[2] = [15,timestart,height]
                if day == "목":
                    newtime[3] = [15,timestart,height]
                if day == "금":
                    newtime[4] = [15,timestart,height]

                start= int(time[i+1][1:])
                day = time[i+1][0]

        try:
            user_time_table = eval(temp_user.timetable)
        except:
            user_time_table = [[temp_lect_name, temp_prof_name, temp_lect_domain, temp_credit, temp_lect_time, newtime, temp_lect_time_numbered]]
            temp_user.timetable = user_time_table
            temp_user.save()
            return Response({'message':False})
        
        for user_time_table_item in user_time_table:
            ## 동일한 과목명을 담는 친구는 없어요...
            for time_item in user_time_table_item[-1]:
                if time_item in temp_lect_time_numbered:
                    return Response({'message':True, 'original':user_time_table_item, 'change':[temp_lect_name, temp_prof_name, temp_lect_domain, temp_credit, temp_lect_time, newtime, temp_lect_time_numbered]})
        
        user_time_table.append([temp_lect_name, temp_prof_name, temp_lect_domain,  temp_credit, temp_lect_time, newtime, temp_lect_time_numbered])
        temp_user.timetable = user_time_table
        temp_user.save()

        return Response({'message':False})
        

class AlterTimeTableView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        student_id = str(request.data.get('student_id'))
        
        temp_original = request.data.get('original')
        temp_change = request.data.get('change')
        temp_user = user_info.objects.get(student_id = student_id)
        
        user_time_table = eval(temp_user.timetable)

        find_idx = 0
        for idx in range(len(user_time_table)):
            if user_time_table[idx][0] == temp_original[0]:
                find_idx = idx
        user_time_table[find_idx] = temp_change
        temp_user.timetable = user_time_table
        temp_user.save()
        return Response({'message': '새로운 과목으로 바꿈!.'})


class AddMemoView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        student_id = str(request.data.get('student_id'))
        
        temp_memo = request.data.get('memo')
        temp_user = user_info.objects.get(student_id = student_id)
        
        try:
            user_memo = eval(temp_user.memo)
            user_memo.append(temp_memo)
            temp_user.memo = user_memo
            temp_user.save()
            return Response({'message':'메모에 과목 추가 완료!'})
        except:
            user_memo = [temp_memo]
            temp_user.memo = user_memo
            temp_user.save()
            return Response({'message':'처음 메모 저장 완료!'})
        

class DeleteMemoView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        student_id = str(request.data.get('student_id'))
        
        temp_memo = request.data.get('memo')
        temp_user = user_info.objects.get(student_id = student_id)
        
        
        user_memo = eval(temp_user.memo)
        user_memo.remove(temp_memo)

        temp_user.memo = user_memo
        temp_user.save()
        return Response({'message':'메모에서 삭제 완료!'})


class DeleteTimeTableView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        student_id = str(request.data.get('student_id'))
        
        temp_timetable = request.data.get('timetable')
        temp_user = user_info.objects.get(student_id = student_id)
        
        
        user_timetable = eval(temp_user.timetable)
        user_timetable.remove(temp_timetable)

        temp_user.timetable = user_timetable
        temp_user.save()
        return Response({'message':'시간표에서 삭제 완료!'})


class ShowTimeTableView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        student_id = str(request.data.get('student_id'))
        
        temp_user = user_info.objects.get(student_id = student_id)

        try:
            user_timetable = eval(temp_user.timetable)
            for i in range(len(user_timetable)):
                user_timetable[i].insert(0,f'n{i+1}')
        except:
            user_timetable = []
        return Response({'message':user_timetable})
    

class ShowMemoView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        student_id = str(request.data.get('student_id'))
        
        temp_user = user_info.objects.get(student_id = student_id)

        try:
            user_memo = eval(temp_user.memo)
        except:
            user_memo = []
        return Response({'message':user_memo})


class SearchLectureView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        student_id = str(request.data.get('student_id'))
        temp_year = int(student_id[2:4])
        if temp_year < 20:
            temp_year = 18
        temp_lect_name = str(request.data.get('lect_name'))
        전공_2023 = list(open_major.objects.all())
        교양_2023 = list(open_gyoyang.objects.all())
        target_lecture = []
        for lecture in 전공_2023:
            if temp_lect_name in lecture.lect_name:
                try:
                    hash_tag = lecture_review.objects.get(lect_name = lecture.lect_name, prof_name = lecture.prof_name).hashtag
                except:
                    hash_tag = []
                target_lecture.append([lecture.lect_name, lecture.prof_name, lecture.lect_time, lecture.lect_domain, hash_tag, lecture.credit, lecture.lect_time_numbered])
        if temp_year <=19:
            for lecture in 교양_2023:
                if temp_lect_name in lecture.lect_name:
                    try:
                        hash_tag = lecture_review.objects.get(lect_name = lecture.lect_name, prof_name = lecture.prof_name).hashtag
                    except:
                        hash_tag = []
                    target_lecture.append([lecture.lect_name, lecture.prof_name, lecture.lect_time, eval(lecture.lect_domain)[1], hash_tag, lecture.credit, lecture.lect_time_numbered])
        else:
            for lecture in 교양_2023:
                if temp_lect_name in lecture.lect_name:
                    try:
                        hash_tag = lecture_review.objects.get(lect_name = lecture.lect_name, prof_name = lecture.prof_name).hashtag
                    except:
                        hash_tag = []
                    target_lecture.append([lecture.lect_name, lecture.prof_name, lecture.lect_time, eval(lecture.lect_domain)[0], hash_tag, lecture.credit, lecture.lect_time_numbered])

        return Response({'message':target_lecture})
    

class ShowchangegraduateView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        temp_student_id = str(request.data.get('student_id'))
        temp_year = int(temp_student_id[2:4])
        if temp_year < 20:
            temp_year = 18
        graduate_db_class = eval(f"graduate_{temp_year}_info")
        temp_user_isu_list = list(user_isu.objects.filter(student_id = temp_student_id))
        
        if temp_year < 20:
            graduate_data = graduate_db_class.objects.get(id = 0)
            gradu_total_dict = {'인성':graduate_data.insung, 
                                   '리더십':graduate_data.leader,
                                   '의사소통':graduate_data.commu,
                                   '창의와사유':graduate_data.creative,
                                   '기본영어':graduate_data.b_eng,
                                   '전문영어,글로벌문화':graduate_data.p_eng,
                                   '기초자연과학':graduate_data.bsm,
                                   '기초자연과학(필수)':graduate_data.bsm_c,
                                   '인간/문화의이해':graduate_data.people,
                                   '사회/역사의이해':graduate_data.society,
                                   '자연/과학/기술의이해':graduate_data.tech,
                                   '교양총학점':graduate_data.gyoyang_total,
                                   '제1전공총학점':graduate_data.major_total,
                                   '총학점':graduate_data.credit_total}
            gradu_present_dict = {'인성':0, 
                                   '리더십':0,
                                   '의사소통':0,
                                   '창의와사유':0,
                                   '기본영어':0,
                                   '전문영어,글로벌문화':0,
                                   '기초자연과학':0,
                                   '기초자연과학(필수)':0,
                                   '인간/문화의이해':0,
                                   '사회/역사의이해':0,
                                   '자연/과학/기술의이해':0,
                                   '교양총학점':0,
                                   '제1전공총학점':0,
                                   '총학점':0}
            for temp_user_isu in temp_user_isu_list:
                gradu_present_dict['총학점'] = gradu_present_dict['총학점'] + int(temp_user_isu.credit)

                #사용자의 성적 DB를 하나씩 살펴보면서 우선 전공인지 확인
                if temp_user_isu.lect_domain == '전공일반' or temp_user_isu.lect_domain == '전공핵심':
                    #졸업요건의 전공학점 추가
                    gradu_present_dict['제1전공총학점'] = gradu_present_dict['제1전공총학점'] + int(temp_user_isu.credit)


                elif temp_user_isu.lect_domain == '일반선택':
                    continue
                
                elif temp_user_isu.lect_domain == '전문영어' or temp_user_isu.lect_domain == '글로벌문화':
                    gradu_present_dict['전문영어,글로벌문화'] = gradu_present_dict['전문영어,글로벌문화'] + int(temp_user_isu.credit)
                    gradu_present_dict['교양총학점'] = gradu_present_dict['교양총학점'] + int(temp_user_isu.credit)

                else :
                    gradu_present_dict[temp_user_isu.lect_domain] = gradu_present_dict[temp_user_isu.lect_domain] +  int(temp_user_isu.credit)
                    gradu_present_dict['교양총학점'] = gradu_present_dict['교양총학점'] + int(temp_user_isu.credit)
            
            real_gradu_list=[]
            data_gradu_list=[]

            for i in range(len(gradu_present_dict.keys())):
                total = gradu_total_dict[list(gradu_present_dict.keys())[i]]
                present= gradu_present_dict[list(gradu_present_dict.keys())[i]]

                real_gradu_list.append([present,total])
                if present>total :
                    data_gradu_list.append([total,total])
                else:
                    data_gradu_list.append([present,total])
            
            try:
                temp_user_timetable = eval(user_info.objects.get(student_id = temp_student_id).timetable)
            except:
                temp_user_timetable = []
            
            for item in temp_user_timetable:
                try:
                    temp_user_isu = user_isu.objects.get(student_id=temp_student_id,lect_name = item[0])
                    continue
                except:
                    gradu_present_dict['총학점'] = gradu_present_dict['총학점'] + int(item[3])

                    #사용자의 성적 DB를 하나씩 살펴보면서 우선 전공인지 확인
                    if item[2][:2] == '전공':
                        #졸업요건의 전공학점 추가
                        gradu_present_dict['제1전공총학점'] = gradu_present_dict['제1전공총학점'] + int(item[3])


                    elif item[2] == '일반선택':
                        continue
                    
                    elif item[2] == '전문영어' or item[2] == '글로벌문화':
                        gradu_present_dict['전문영어,글로벌문화'] = gradu_present_dict['전문영어,글로벌문화'] + int(item[3])
                        gradu_present_dict['교양총학점'] = gradu_present_dict['교양총학점'] + int(item[3])

                    else :
                        gradu_present_dict[item[2]] = gradu_present_dict[item[2]] +  int(item[3])
                        gradu_present_dict['교양총학점'] = gradu_present_dict['교양총학점'] + int(item[3])
                
            real_gradu_list=[]
            data_gradu_list=[]

            for i in range(len(gradu_present_dict.keys())):
                total = gradu_total_dict[list(gradu_present_dict.keys())[i]]
                present= gradu_present_dict[list(gradu_present_dict.keys())[i]]

                real_gradu_list.append([present,total])
                if present>total :
                    data_gradu_list.append([total,total])
                else:
                    data_gradu_list.append([present,total])
            
            print(real_gradu_list) ### 내가 한 량 total, 졸업 요건 -> 숫자로 표현
            print(data_gradu_list) ### 충족 total, 졸업 요건 -> 그래프로 표현

              

            return Response({'message': data_gradu_list})
        ####else: 여기에서는 21학번 전용으로 하기!!!! ###################3 


class ShowchangeabeekView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        temp_student_id = str(request.data.get('student_id'))
        temp_year = int(temp_student_id[2:4])
        if temp_year < 20:
            temp_year = 18
        abeek_db_major_class = eval(f"abeek_{temp_year}_major_info")
        abeek_db_MSC_class = eval(f"abeek_{temp_year}_MSC_info")
        abeek_total_data = total_year_abeek_info.objects.get(year=temp_student_id[:4])

        temp_user_isu_list = list(user_isu.objects.filter(student_id = temp_student_id))
        아빅전공_18_must_list = []
        아빅전공_18_total_list = []
        아빅MSC_18_must_list = []
        아빅MSC_18_total_list = []

        for 아빅전공_18_must_element in list(abeek_db_major_class.objects.filter(is_must=1)):
            아빅전공_18_must_list.append(아빅전공_18_must_element.lect_name)
        for 아빅전공_18_total_element in list(abeek_db_major_class.objects.all()):
            아빅전공_18_total_list.append(아빅전공_18_total_element.lect_name)
        for 아빅MSC_18_must_element in list(abeek_db_MSC_class.objects.filter(is_must=1)):
            아빅MSC_18_must_list.append(아빅MSC_18_must_element.lect_name)
        for 아빅MSC_18_total_element in list(abeek_db_MSC_class.objects.all()):
            아빅MSC_18_total_list.append(아빅MSC_18_total_element.lect_name)
        
        abeek_total_dict={
            'abeek_gyoyang': abeek_total_data.abeek_gyoyang,
            'abeek_MSC_must': abeek_total_data.abeek_MSC_must,
            'abeek_MSC_total': abeek_total_data.abeek_MSC_total,
            'abeek_major_must': abeek_total_data.abeek_major_must,
            'abeek_major_total': abeek_total_data.abeek_major_total,
            'abeek_design': abeek_total_data.abeek_design
        }
        abeek_present_dict={
            'abeek_gyoyang': 0,
            'abeek_MSC_must': 0,
            'abeek_MSC_total': 0,
            'abeek_major_must': 0,
            'abeek_major_total': 0,
            'abeek_design': 0
        }
            

        for temp_user_isu in temp_user_isu_list:
            if temp_user_isu.lect_name in 아빅전공_18_total_list:
                abeek_present_dict['abeek_major_total'] = abeek_present_dict['abeek_major_total'] + int(temp_user_isu.credit)
            if temp_user_isu.lect_name in 아빅전공_18_must_list:
                abeek_present_dict['abeek_major_must'] = abeek_present_dict['abeek_major_must'] + int(temp_user_isu.credit)
            
            if temp_user_isu.lect_name in 아빅MSC_18_total_list :
                abeek_present_dict['abeek_MSC_total']= abeek_present_dict['abeek_MSC_total'] +int(temp_user_isu.credit)
                if  temp_user_isu.lect_name in 아빅MSC_18_must_list :
                    abeek_present_dict['abeek_MSC_must']= abeek_present_dict['abeek_MSC_must'] +int(temp_user_isu.credit)

        아빅전공_18_설계 = list(abeek_db_major_class.objects.exclude(credit_design=0))
        user_class = []
        for temp_user_isu in temp_user_isu_list:
            user_class.append(temp_user_isu.lect_name)
        for 아빅전공_18_설계_원소 in 아빅전공_18_설계:
            if 아빅전공_18_설계_원소.lect_name in user_class:
                abeek_present_dict['abeek_design'] = abeek_present_dict['abeek_design'] + int(아빅전공_18_설계_원소.credit_design)
        

        ############## 전문교양 (BSM, DS 제외한 애들만 count) ################# if 18, 21학번
        if temp_year < 20:
            전문교양_18_total_list = ['인성','리더십','의사소통','창의와사유','기본영어', '전문영어', '글로벌문화', '인간/문화의이해','사회/역사의이해','자연/과학/기술의이해']
            for temp_user_isu in temp_user_isu_list:
                if temp_user_isu.lect_domain in 전문교양_18_total_list:
                    abeek_present_dict['abeek_gyoyang'] += temp_user_isu.credit
        #else: ########## 21전용으로

        try:
            temp_user_timetable = eval(user_info.objects.get(student_id = temp_student_id).timetable)
        except:
            temp_user_timetable = []
        
        for item in temp_user_timetable:
            try:
                temp_user_isu = user_isu.objects.get(student_id = temp_student_id, lect_name = item[0])
                continue
            except:
                if item[0] in 아빅전공_18_total_list:
                    abeek_present_dict['abeek_major_total'] = abeek_present_dict['abeek_major_total'] + int(item[3])
                    if item[0] in 아빅전공_18_must_list:
                        abeek_present_dict['abeek_major_must'] = abeek_present_dict['abeek_major_must'] + int(item[3])
                
                if item[0] in 아빅MSC_18_total_list :
                    abeek_present_dict['abeek_MSC_total']= abeek_present_dict['abeek_MSC_total'] +int(item[3])
                    if  item[0] in 아빅MSC_18_must_list :
                        abeek_present_dict['abeek_MSC_must']= abeek_present_dict['abeek_MSC_must'] +int(item[3])

        아빅전공_18_설계 = list(abeek_db_major_class.objects.exclude(credit_design=0))
        
        user_class = []
        
        for item in temp_user_timetable:
            try:
                temp_user_isu = user_isu.objects.get(student_id = temp_student_id, lect_name = item[0])
                continue
            except:
                user_class.append(item[0])

        for 아빅전공_18_설계_원소 in 아빅전공_18_설계:
            if 아빅전공_18_설계_원소.lect_name in user_class:
                abeek_present_dict['abeek_design'] = abeek_present_dict['abeek_design'] + int(아빅전공_18_설계_원소.credit_design)
        

        ############## 전문교양 (BSM, DS 제외한 애들만 count) ################# if 18, 21학번
        if temp_year < 20:
            전문교양_18_total_list = ['인성','리더십','의사소통','창의와사유','기본영어', '전문영어', '글로벌문화', '인간/문화의이해','사회/역사의이해','자연/과학/기술의이해']
            for item in temp_user_timetable:
                try:
                    temp_user_isu = user_isu.objects.get(student_id = temp_student_id, lect_name = item[0])
                    continue
                except:
                    if item[2] in 전문교양_18_total_list:
                        abeek_present_dict['abeek_gyoyang'] += item[3]
        
        real_abeek_list=[]
        data_abeek_list=[]

        for i in range(len(abeek_present_dict.keys())):
            total = abeek_total_dict[list(abeek_present_dict.keys())[i]]
            present= abeek_present_dict[list(abeek_present_dict.keys())[i]]

            real_abeek_list.append([present,total])
            if present>total :
                data_abeek_list.append([total,total])
            else:
                data_abeek_list.append([present,total])

        print(real_abeek_list)
        print(data_abeek_list)
        return Response({'message': data_abeek_list})


class AlterEvalView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        student_id = str(request.data.get('student_id'))
        temp_lect_name = str(request.data.get('lect_name'))
        temp_prof_name = str(request.data.get('prof_name'))
        temp_is_up = int(request.data.get('is_up'))
        temp_is_down = int(request.data.get('is_down'))

        try:
            temp_user_eval = user_eval.objects.get(student_id = student_id, lect_name = temp_lect_name, prof_name = temp_prof_name)
            temp_user_eval.is_up = temp_is_up
            temp_user_eval.is_down = temp_is_down
        except:
            start = len(list(user_eval.objects.all()))
            temp_user_eval = user_eval(id = start, student_id = student_id, lect_name = temp_lect_name, prof_name = temp_prof_name, is_up = temp_is_up, is_down = temp_is_down)
        temp_user_eval.save()
        
        return Response({'message':'과목 정보 평가 변경 완료!'})



class ShowEvalView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        temp_lect_name = str(request.data.get('lect_name'))
        temp_prof_name = str(request.data.get('prof_name'))
        
        temp_user_eval = user_eval.objects.filter(lect_name = temp_lect_name, prof_name = temp_prof_name)
        is_up = 0
        is_down = 0
        for item in temp_user_eval:
            is_up += item.is_up
            is_down += item.is_down
        
        return Response({'message':[is_up, is_down]})