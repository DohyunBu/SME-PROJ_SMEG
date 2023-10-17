import pandas as pd
import sqlite3

# Read csv file.
user_info = pd.read_csv("user_info.csv", index_col = 0).dropna()
user_isu = pd.read_csv("user_isu.csv", index_col = 0).dropna()
user_refined_isu = pd.read_csv("user_refined_isu.csv", index_col = 0).dropna()
open_major = pd.read_csv("open_major.csv", index_col = 0).dropna()
open_gyoyang = pd.read_csv("open_gyoyang.csv", index_col = 0).dropna()
lecture_review = pd.read_csv("lecture_review.csv", index_col = 0).dropna()
total_year_abeek_info = pd.read_csv("total_year_abeek_info.csv").dropna()
graduate_18_info = pd.read_csv("graduate_18_info.csv", index_col = 0).dropna()
graduate_21_info = pd.read_csv("graduate_21_info.csv", index_col = 0).dropna()
abeek_18_major_info = pd.read_csv("abeek_18_major_info.csv").dropna()
abeek_21_major_info = pd.read_csv("abeek_21_major_info.csv").dropna()
abeek_18_MSC_info = pd.read_csv("abeek_18_MSC_info.csv").dropna()
abeek_21_MSC_info = pd.read_csv("abeek_21_MSC_info.csv").dropna()
relate_score_info =pd.read_csv("relate_score_info.csv").dropna()
recommend_level_info = pd.read_csv("recommend_level_info.csv").dropna()
pre_penalty_score_info =pd.read_csv("pre_penalty_score_info.csv").dropna()
user_eval =pd.read_csv("user_eval.csv", index_col = 0).dropna()

# Connect to (create) database.
database = "db.sqlite3"
conn = sqlite3.connect(database)

user_info_dtype = {
    "student_id" : "TextField",
    "usertype" : "IntegerField",
    "timetable" : "TextField",
    "memo" : "TextField",
    "retry_standard" : "TextField"
}

user_isu_dtype = {
    "student_id" : "TextField",
    "grade_score" : "TextField",
    "lect_name" : "TextField",
    "credit" : "IntegerField",
    "lect_domain" : "TextField"
}

user_refined_isu_dtype = {
    "student_id"  : "TextField",
    "lect_name" : "TextField",
    "credit" : "IntegerField",
    "lect_domain" : "TextField",
    "is_retry" : "IntegerField"
}

open_major_dtype = {
    "lect_name" : "TextField",
    "prof_name" : "TextField",
    "lect_room" : "TextField",
    "lect_time" : "TextField",
    "lect_time_numbered" : "TextField",
    "lect_onoff" : "TextField",
    "lect_domain" : "TextField",
    "credit" : "IntegerField"
}

open_gyoyang_dtype = {
    "lect_name" : "TextField",
    "prof_name" : "TextField",
    "lect_room" : "TextField",
    "lec_time" : "TextField",
    "lect_time_numbered" : "TextField",
    "lect_onoff" : "TextField",
    "lect_domain" : "TextField",
    "credit" : "IntegerField"
}

lecture_review_dtype = {
    "lect_name" : "TextField",
    "prof_name" : "TextField",
    "total_rating" : "FloatField",
    "hw_rating" : "FloatField",
    "team_rating" : "FloatField",
    "grade_score_rating" : "FloatField",
    "hashtag" : "TextField"
}

total_year_abeek_info_dtype = {
    "year" : "IntegerField",
    "abeek_gyoyang" : "IntegerField",
    "abeek_MSC_must": "IntegerField",
    "abeek_MSC_total" : "IntegerField",
    "abeek_major_must": "IntegerField",
    "abeek_major_total": "IntegerField",
    "abeek_design" : "IntegerField"
}

graduate_18_info_dtype = {
    "insung" : "IntegerField", 
    "leader": "IntegerField", 
    "commu": "IntegerField", 
    "creative": "IntegerField", 
    "b_eng": "IntegerField", 
    "p_eng": "IntegerField", 
    "bsm": "IntegerField", 
    "bsm_c": "IntegerField", 
    "people": "IntegerField", 
    "society": "IntegerField", 
    "tech": "IntegerField", 
    "gyoyang_total": "IntegerField", 
    "major_total": "IntegerField", 
    "credit_total": "IntegerField"
}

graduate_21_info_dtype = {
    "insung" : "IntegerField", 
    "classic": "IntegerField", 
    "commu": "IntegerField", 
    "creative": "IntegerField", 
    "eng_must": "IntegerField", 
    "eng_choice": "IntegerField", 
    "bsm": "IntegerField", 
    "people": "IntegerField", 
    "society": "IntegerField", 
    "tech": "IntegerField",
    "ds" : "IntegerField",
    "gyoyang_total": "IntegerField", 
    "major_core": "IntegerField", 
    "major_deep": "IntegerField", 
    "major_total": "IntegerField", 
    "credit_total": "IntegerField"
}

abeek_18_major_info_dtype = {
    "lect_name" : "TextField",
    "credit" : "IntegerField",
    "is_must" : "IntegerField",
    "credit_design" : "IntegerField"
}

abeek_21_major_info_dtype = {
    "lect_name" : "TextField",
    "credit" : "IntegerField",
    "is_must" : "IntegerField",
    "credit_design" : "IntegerField"
}

abeek_18_MSC_info_dtype = {
    "lect_name" : "TextField",
    "credit" : "IntegerField",
    "is_must" : "IntegerField",
    "group_num" : "IntegerField"
}

abeek_21_MSC_info_dtype = {
    "lect_name" : "TextField",
    "credit" : "IntegerField",
    "is_must" : "IntegerField",
    "group_num" : "IntegerField"
}

relate_score_info_dtype = {
    "lect_name" : "TextField", 
    "relate_lect_name" : "TextField", 
    "relate_score" : "IntegerField"
}

recommend_level_info_dtype = {
    "level" : "IntegerField", 
    "lect_name" : "TextField"
}

pre_penalty_score_info_dtype = {
    "lect_name" : "TextField", 
    "pre_lect_name" : "TextField", 
    "pre_penalty_score" : "IntegerField"
}

user_eval_dtype = {
    "student_id" : "TextField", 
    "lect_name" : "TextField",
    "prof_name" : "TextField", 
    "is_up" : "IntegerField", 
    "is_down" : "IntegerField"
}


user_info.to_sql(name='users_user_info', con=conn, if_exists='replace', dtype = user_info_dtype,index=True, index_label="id")
user_isu.to_sql(name='users_user_isu', con=conn, if_exists='replace', dtype = user_isu_dtype,index=True, index_label="id")
user_refined_isu.to_sql(name='users_user_refined_isu', con=conn, if_exists='replace', dtype = user_refined_isu_dtype,index=True, index_label="id")
open_major.to_sql(name='users_open_major', con=conn, if_exists='replace', dtype = open_major_dtype,index=True, index_label="id")
open_gyoyang.to_sql(name='users_open_gyoyang', con=conn, if_exists='replace', dtype = open_gyoyang_dtype,index=True, index_label="id")
lecture_review.to_sql(name='users_lecture_review', con=conn, if_exists='replace', dtype = lecture_review_dtype,index=True, index_label="id")
total_year_abeek_info.to_sql(name='users_total_year_abeek_info', con=conn, if_exists='replace', dtype = total_year_abeek_info_dtype,index=True, index_label="id")
graduate_18_info.to_sql(name='users_graduate_18_info', con=conn, if_exists='replace', dtype = graduate_18_info_dtype,index=True, index_label="id")
graduate_21_info.to_sql(name='users_graduate_21_info', con=conn, if_exists='replace', dtype = graduate_21_info_dtype,index=True, index_label="id")
abeek_18_major_info.to_sql(name='users_abeek_18_major_info', con=conn, if_exists='replace', dtype = abeek_18_major_info_dtype,index=True, index_label="id")
abeek_21_major_info.to_sql(name='users_abeek_21_major_info', con=conn, if_exists='replace', dtype = abeek_21_major_info_dtype,index=True, index_label="id")
abeek_18_MSC_info.to_sql(name='users_abeek_18_MSC_info', con=conn, if_exists='replace', dtype = abeek_18_MSC_info_dtype,index=True, index_label="id")
abeek_21_MSC_info.to_sql(name='users_abeek_21_MSC_info', con=conn, if_exists='replace', dtype = abeek_21_MSC_info_dtype,index=True, index_label="id")
relate_score_info.to_sql(name='users_relate_score_info', con=conn, if_exists='replace', dtype = relate_score_info_dtype,index=True, index_label="id")
recommend_level_info.to_sql(name='users_recommend_level_info', con=conn, if_exists='replace', dtype = recommend_level_info_dtype,index=True, index_label="id")
pre_penalty_score_info.to_sql(name='users_pre_penalty_score_info', con=conn, if_exists='replace', dtype = pre_penalty_score_info_dtype,index=True, index_label="id")
user_eval.to_sql(name='users_user_eval', con=conn, if_exists='replace', dtype = user_eval_dtype,index=True, index_label="id")

conn.close()