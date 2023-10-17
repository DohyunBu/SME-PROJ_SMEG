import styled from "styled-components";
import 문의GlobalStyles from "../문의global";
import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const HiconOutlineGroup2 = styled.div`
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 25.5%;
  right: 95.83%;
  bottom: 72.29%;
  left: 2.64%;
  background-color: var(--color-white);
  overflow: hidden;
`;
const HiconOutlineMessage18 = styled.img`
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 84.74%;
  right: 96.25%;
  bottom: 13.05%;
  left: 2.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Iconlybulkcategory = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 13.76%;
  right: 96.25%;
  bottom: 84.04%;
  left: 2.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Home = styled.div`
  cursor: pointer;
  position: absolute;
  height: 2.01%;
  width: 3.26%;
  top: 13.86%;
  left: 4.58%;
  font-weight: 500;
  display: inline-block;
`;
const Smiley = styled.div`
  position: absolute;
  height: 2.81%;
  width: 5.49%;
  top: 5.12%;
  left: 6.32%;
  font-size: 22px;
  font-weight: 600;
  color: #130f26;
  display: inline-block;
`;
const Div = styled.div`
  cursor: pointer;
  position: absolute;
  height: 2.01%;
  width: 5.35%;
  top: 91.16%;
  left: 4.58%;
  font-weight: 500;
  display: inline-block;
`;
const HappyFaceIcon = styled.img`
  position: absolute;
  top: calc(50% - 488px);
  left: calc(50% - 899px);
  width: 38px;
  height: 35px;
`;
const SubtractIcon = styled.img`
  cursor: pointer;
  position: absolute;
  width: 25.5px;
  height: 21.02px;
  top: 91.0%;
  right: 96.25%;
  bottom: 13.05%;
  left: 2.3%;
`;
const PageChild = styled.div`
  position: absolute;
  top: -0.5px;
  left: 243.5px;
  border-right: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 1px;
  height: 1029px;
`;
const PageItem = styled.div`
  position: absolute;
  top: 144px;
  left: 250px;
  border-radius: var(--br-xl) 0px var(--br-xl) 0px;
  background-color: #f1eef6;
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 1673px;
  height: 943px;
`;
const B = styled.b`
  position: absolute;
  top: 189px;
  left: calc(50% - 571px);
  font-size: var(--headings-bold-48-size);
  line-height: 63.98px;
  display: inline-block;
  font-family: var(--headings-bold-48);
  color: var(--text-title-text);
  width: 794px;
`;
const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-5xs);
  background-color: var(--white-white-10);
  width: 686.6px;
  height: 223.32px;
`;
const A = styled.div`
  position: absolute;
  top: 111.66px;
  left: 21.8px;
  line-height: 150%;
  display: inline-block;
  width: 636.2px;
  height: 91.36px;
`;
const Q = styled.div`
  position: absolute;
  top: 20.3px;
  left: 21.8px;
  line-height: 150%;
  font-weight: 500;
  color: var(--black-black-40);
  display: inline-block;
  width: 524.49px;
  height: 30.45px;
`;
const Faq06 = styled.div`
  position: absolute;
  top: 821.69px;
  left: 1097.4px;
  width: 686.6px;
  height: 223.32px;
  color: var(--black-black-10);
  font-family: var(--paragraph-medium-16);
`;
const A1 = styled.div`
  position: absolute;
  top: 81.21px;
  left: 21.8px;
  line-height: 150%;
  display: inline-block;
  width: 636.2px;
  height: 121.81px;
`;
const Q1 = styled.div`
  position: absolute;
  top: 20.3px;
  left: 21.8px;
  line-height: 150%;
  font-weight: 500;
  color: var(--black-black-40);
  display: inline-block;
  width: 288.81px;
  height: 30.45px;
`;
const Faq05 = styled.div`
  position: absolute;
  top: 760.78px;
  left: 389px;
  width: 686.6px;
  height: 223.32px;
  color: var(--black-black-10);
  font-family: var(--paragraph-medium-16);
`;
const A2 = styled.div`
  position: absolute;
  top: 81.21px;
  left: 21.8px;
  line-height: 150%;
  display: inline-block;
  width: 636.2px;
  height: 60.9px;
`;
const Q2 = styled.div`
  position: absolute;
  top: 20.3px;
  left: 21.8px;
  line-height: 150%;
  font-weight: 500;
  color: var(--black-black-40);
  display: inline-block;
  width: 516.31px;
  height: 30.45px;
`;
const Faq04 = styled.div`
  position: absolute;
  top: 578.07px;
  left: 1097.4px;
  width: 686.6px;
  height: 223.32px;
  color: var(--black-black-10);
  font-family: var(--paragraph-medium-16);
`;
const Q3 = styled.div`
  position: absolute;
  top: 19.03px;
  left: 21.8px;
  line-height: 150%;
  font-weight: 500;
  color: var(--black-black-40);
  display: inline-block;
  width: 583.07px;
  height: 30.45px;
`;
const Faq03 = styled.div`
  position: absolute;
  top: 517.16px;
  left: 389px;
  width: 686.6px;
  height: 223.32px;
  color: var(--black-black-10);
  font-family: var(--paragraph-medium-16);
`;
const Container4 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-5xs);
  background-color: var(--white-white-10);
  width: 686.6px;
  height: 253.77px;
`;
const A4 = styled.div`
  position: absolute;
  top: 111.66px;
  left: 35.42px;
  line-height: 150%;
  display: inline-block;
  width: 636.2px;
  height: 91.36px;
`;
const Faq02 = styled.div`
  position: absolute;
  top: 304px;
  left: 1097.4px;
  width: 686.6px;
  height: 253.77px;
  color: var(--black-black-10);
  font-family: var(--paragraph-medium-16);
`;
const Container5 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-5xs);
  background-color: var(--white-white-10);
  width: 686.6px;
  height: 192.86px;
`;
const A5 = styled.div`
  position: absolute;
  top: 81.21px;
  left: 21.8px;
  line-height: 150%;
  display: inline-block;
  width: 636.2px;
  height: 91.36px;
`;
const Q5 = styled.div`
  position: absolute;
  top: 20.3px;
  left: 21.8px;
  line-height: 150%;
  font-weight: 500;
  color: var(--black-black-40);
  display: inline-block;
  width: 602.14px;
  height: 30.45px;
`;
const Faq01 = styled.div`
  position: absolute;
  top: 304px;
  left: 389px;
  width: 686.6px;
  height: 192.86px;
  color: var(--black-black-10);
  font-family: var(--paragraph-medium-16);
`;
const PageInner = styled.div`
  position: absolute;
  top: 0px;
  left: 748px;
  background-color: #d9d9d9;
  width: 254px;
  height: 29px;
`;
const Div1 = styled.div`
  position: absolute;
  height: 2.01%;
  width: 6.53%;
  top: 84.74%;
  left: 4.58%;
  font-weight: 500;
  color: #5534a5;
  display: inline-block;
`;
const HiconOutlineActivity11 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 20.28%;
  right: 96.25%;
  bottom: 77.51%;
  left: 2.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Div2 = styled.div`
  cursor:pointer;
  position: absolute;
  height: 2.01%;
  width: 4.1%;
  top: 20.48%;
  left: 4.24%;
  font-weight: 500;
  display: inline-block;
`;
const HiconOutlineActivity13 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 26.41%;
  right: 96.25%;
  bottom: 71.39%;
  left: 2.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Abeek = styled.div`
  cursor: pointer;
  position: absolute;
  height: 2.01%;
  width: 5.69%;
  top: 26.61%;
  left: 4.24%;
  font-weight: 500;
  display: inline-block;
`;
const PageRoot = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: var(--color-white);
  width: 100%;
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: var(--paragraph-medium-16-size);
  color: var(--color-gray-100);
  font-family: var(--font-plus-jakarta-sans);
`;
const 문의Page = () => {
  const userstudentid_location = useLocation();
  const user_student_id = userstudentid_location.state.student_id;
  const navigate = useNavigate();

  const navigate2Setting = () => {
    navigate("/Setting", {state : {student_id : user_student_id}});
  }

  const navigate2Main = () => {
    navigate("/Main", {state : {student_id : user_student_id}});
  }

  const navigate2Graduate = () => {
    navigate("/Graduate18", {state : {student_id : user_student_id}});
  }

  const navigate2Abeek = () => {
    navigate("/Abeek18", {state : {student_id : user_student_id}});
  }

  return (
    <PageRoot>
      <문의GlobalStyles/>
      <HiconOutlineGroup2 />
      <HiconOutlineMessage18 alt="" src="/문의hicon--outline--message-18.svg" />
      <Iconlybulkcategory alt="" src="/문의iconlybulkcategory.svg" onClick={navigate2Main}/>
      <Home onClick={navigate2Main}>Home</Home>
      <Smiley>SMILEY</Smiley>
      <Div onClick={navigate2Setting}>사용자 설정</Div>
      <HappyFaceIcon alt="" src="/문의happyface.svg" />
      <SubtractIcon alt="" src="/문의subtract.svg" onClick={navigate2Setting}/>
      <PageChild />
      <PageItem />
      <B>자주 묻는 질문</B>
      <Faq06>
        <Container />
        <A>
          A: 졸업요건 혹은 ABEEK 요건 탭으로 들어가 본인의 학점 이수현황 그래프
          옆의 돋보기를 선택하시면 해당 이수학점을 채울 수 있는 과목들이
          추천순으로 배치된 페이지가 뜨게 됩니다.
        </A>
        <Q>Q 추천 과목은 어디서 확인할 수 있나요?</Q>
      </Faq06>
      <Faq05>
        <Container />
        <A1>{`A: 팀플, 과제량, 학점 비율에 대한 중요도 순위를 1위부터 3위까지 정했을 때, 제일 중요하다고 생각하는 요소인 1위를 왼쪽에, 가장 중요하지 않은 요소인 3위를 오른쪽에 적어놓은 블럭들 중 본인과 일치하는 블럭럭을 선택하시면 됩니다. `}</A1>
        <Q1>{`Q 수강신청 유형이 무엇인가요 ? `}</Q1>
      </Faq05>
      <Faq04>
        <Container />
        <A2>
          A: 사용자 설정 페이지에 업로드한 이수과목 리스트 excel파일을
          업데이트한 후 다시 업로드 하시면 됩니다.
        </A2>
        <Q2>Q 수강한 과목 리스트가 변동 되었을 때는 어떻게 하나요 ?</Q2>
      </Faq04>
      <Faq03>
        <Container />
        <A>
          A: 아쉽게도 스마일리는 단일 전공을 기준으로 이용이 가능한
          서비스입니다. 추후에 복수전공자 또한 이용 가능하도록 서비스를
          업데이트할 예정입니다.
        </A>
        <Q3>Q 복전을 하게 되는 경우에는 어떻게 전공을 어떻게 설정하나요 ?</Q3>
      </Faq03>
      <Faq02>
        <Container4 />
        <A4>
          A: 사용자의 과제량, 팀플, 성적에 관한 취향값을 데이터로 받은 후,
          중요하게 여기는 요소에 대한 가중치를 준 함수 식을 통해 과목들의 추천
          점수를 계산한 후, 추천 점수가 높은 과목 순으로 추천하게 됩니다.
        </A4>
        <Q>Q 과목 추천 순위의 기준이 무엇인가요 ?</Q>
      </Faq02>
      <Faq01>
        <Container5 />
        <A5>
          A : 강의 시간이 겹치는 과목들을 추가하게 되면, 강의 시간 중복 발생
          팝업 메세지가 뜨게 되고 해당 팝업에서 시간표에 표시하고 싶은 과목을
          선택하신후 나머지 과목을 바로가기 리스트에 추가하시면 됩니다.
        </A5>
        <Q5>{`Q 강의 시간이 겹치는 과목들을 책가방에 담게 되면 어떻게 되나요 ? `}</Q5>
      </Faq01>
      <PageInner />
      <Div1>자주 묻는 질문</Div1>
      <HiconOutlineActivity11 alt="" src="/문의hicon--outline--activity-11.svg" onClick={navigate2Graduate}/>
      <Div2 onClick={navigate2Graduate}>{`졸업요건 `}</Div2>
      <HiconOutlineActivity13 alt="" src="/문의hicon--outline--activity-13.svg" onClick={navigate2Abeek}/>
      <Abeek onClick={navigate2Abeek}>ABEEK요건</Abeek>
      
    </PageRoot>
  );
};

export default 문의Page;
