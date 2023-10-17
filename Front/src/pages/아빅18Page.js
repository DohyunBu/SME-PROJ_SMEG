import styled from "styled-components";
import 아빅18GlobalStyles from "../아빅18global";
import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AbeekPageChild = styled.div`
  position: absolute;
  top: 346px;
  left: 451px;
  border-radius: 50%;
  background-color: var(--eff);
  width: 302px;
  height: 302px;
`;
const SubtractIcon = styled.img`
  cursor: pointer;
  position: absolute;
  width: 25.5px;
  height: 21.02px;
  top: 92.0%;
  right: 96.25%;
  bottom: 13.05%;
  left: 2.3%;
`;
const HiconOutlineMessage18 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 85.44%;
  right: 96.25%;
  bottom: 12.35%;
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
  top: 14.26%;
  right: 96.25%;
  bottom: 83.53%;
  left: 2.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Smiley = styled.div`
  position: absolute;
  height: 2.91%;
  width: 5.49%;
  top: 5.19%;
  left: 4.64%;
  font-size: 22px;
  font-weight: 600;
  color: var(--color-gray-200);
  display: inline-block;
`;
const Div = styled.div`
  cursor: pointer;
  position: absolute;
  height: 2.01%;
  width: 5.35%;
  top: 91.97%;
  left: 4.58%;
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-gray-100);
  display: inline-block;
`;
const HappyFaceIcon = styled.img`
  position: absolute;
  top: calc(50% - 487px);
  left: calc(50% - 922px);
  width: 38px;
  height: 36px;
`;
const HiconOutlineActivity2 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 20.78%;
  right: 96.25%;
  bottom: 77.01%;
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
  top: 14.36%;
  left: 4.58%;
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-gray-100);
  display: inline-block;
`;
const B = styled.b`
  cursor: pointer;
  position: absolute;
  height: 2.01%;
  width: 4.1%;
  top: 20.98%;
  left: 4.24%;
  font-size: var(--font-size-base);
  display: inline-block;
  color: var(--color-gray-100);
`;
const HiconOutlineActivity4 = styled.img`
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 26.91%;
  right: 96.25%;
  bottom: 70.88%;
  left: 2.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Abeek = styled.div`
  position: absolute;
  height: 2.01%;
  width: 5.69%;
  top: 27.11%;
  left: 4.24%;
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-slateblue);
  display: inline-block;
`;
const Abeek1 = styled.div`
  position: absolute;
  height: 4.07%;
  width: 19.27%;
  top: 4.63%;
  left: 15.31%;
  font-size: 32px;
  font-weight: 600;
  color: var(--color-gray-200);
  display: inline-block;
`;
const AbeekPageItem = styled.div`
  position: absolute;
  top: 3.5px;
  left: 243.5px;
  border-right: 1px solid #eaeaea;
  box-sizing: border-box;
  width: 1px;
  height: 1029px;
`;
const AbeekPageInner = styled.div`
  position: absolute;
  top: 194px;
  left: -8px;
  border-radius: 30px;
  background-color: var(--color-slateblue);
  width: 20px;
  height: 40px;
`;
const Div1 = styled.div`
  cursor: pointer;
  position: absolute;
  height: 2.01%;
  width: 6.53%;
  top: 85.54%;
  left: 4.65%;
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-gray-100);
  display: inline-block;
`;

// 설계 back
const DesignBarBack = styled.div`
  position: absolute;
  top: 561px;
  left: 1097px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const DesignBarMid = styled.div`
  position: absolute;
  top: 561px;
  left: 1097px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise);
  width: 21px;
  height: 48px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

// 설계
const DesignBar = styled.div`
  position: absolute;
  top: 561px;
  left: 1097px;
  border-radius: var(--br-8xs);
  background-color: var(--color-mediumpurple);
  width: 21px;
  height: 278px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

// MSC 총 back
const MSCBarBack = styled.div`
  position: absolute;
  top: 629px;
  left: 1097px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const MSCBarMid = styled.div`
  position: absolute;
  top: 629px;
  left: 1097px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise);
  width: 21px;
  height: 48px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

// MSC 총
const MSCBar = styled.div`
  position: absolute;
  top: 629px;
  left: 1097px;
  border-radius: var(--br-8xs);
  background-color: var(--color-mediumpurple);
  width: 21px;
  height: 379px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

// 전공 총 back
const MajorBarBack = styled.div`
  position: absolute;
  top: 399px;
  left: 1095px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const MajorBarMid = styled.div`
  position: absolute;
  top: 399px;
  left: 1095px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise);
  width: 21px;
  height: 48px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

// 전공 총
const MajorBar = styled.div`
  position: absolute;
  top: 399px;
  left: 1095px;
  border-radius: var(--br-8xs);
  background-color: var(--eff);
  width: 21px;
  height: 294px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

// 전공 필수 back
const MajorMustBarBack = styled.div`
  position: absolute;
  top: 484px;
  left: 1095px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

// 전공 필수 mid
const MajorMustBarMid = styled.div`
  position: absolute;
  top: 484px;
  left: 1095px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise);
  width: 21px;
  height: 48px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

// 전공 필수
const MajorMustBar = styled.div`
  position: absolute;
  top: 484px;
  left: 1095px;
  border-radius: var(--br-8xs);
  background-color: var(--eff);
  width: 21px;
  height: 333px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

// 전문교양 back
const GyoyangBarBack = styled.div`
  position: absolute;
  top: 762px;
  left: 1097px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const GyoyangBarMid = styled.div`
  position: absolute;
  top: 762px;
  left: 1097px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise);
  width: 21px;
  height: 48px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

// 전문 교양
const GyoyangBar = styled.div`
  position: absolute;
  top: 762px;
  left: 1097px;
  border-radius: var(--br-8xs);
  background-color: #c49ef8;
  width: 21px;
  height: 297px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

// MSC필수 back
const MSCmustBarBack = styled.div`
  position: absolute;
  top: 696px;
  left: 1097px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const MSCmustBarMid = styled.div`
  position: absolute;
  top: 696px;
  left: 1097px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise);
  width: 21px;
  height: 48px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

// MSC필수
const MSCmustBar = styled.div`
  position: absolute;
  top: 696px;
  left: 1097px;
  border-radius: var(--br-8xs);
  background-color: var(--color-mediumpurple);
  width: 21px;
  height: 379px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;




const Div2 = styled.div`
  position: absolute;
  height: 3.43%;
  width: 8%;
  top: 32.22%;
  left: 82%;
  font-weight: 600;
  display: inline-block;
`;
const Span = styled.span`
  color: var(--color-turquoise);
`;
const Div3 = styled.div`
  position: absolute;
  height: 3.52%;
  width: 8%;
  top: 39.54%;
  left: 82%;
  font-weight: 600;
  display: inline-block;
`;
const Div4 = styled.div`
  position: absolute;
  height: 3.33%;
  width: 8%;
  top: 46.85%;
  left: 82%;
  font-weight: 600;
  display: inline-block;
`;
const Div5 = styled.div`
  position: absolute;
  height: 3.24%;
  width: 8%;
  top: 53.52%;
  left: 82%;
  font-weight: 600;
  display: inline-block;
`;
const Div6 = styled.div`
  position: absolute;
  height: 3.33%;
  width: 10.36%;
  top: 46.85%;
  left: 57.03%;
  font-weight: 600;
  display: inline-block;
`;
const Msc = styled.div`
  position: absolute;
  height: 3.52%;
  width: 8.65%;
  top: 53.06%;
  left: 57.14%;
  font-weight: 600;
  display: inline-block;
`;

const Div7 = styled.div`
  position: absolute;
  height: 3.43%;
  width: 11.41%;
  top: 31.57%;
  left: 57.03%;
  font-weight: 600;
  display: inline-block;
`;
const Div8 = styled.div`
  position: absolute;
  height: 3.43%;
  width: 9.53%;
  top: 39.35%;
  left: 57.03%;
  font-weight: 600;
  display: inline-block;
`;
const Iconsaxlinearsearchnormal1 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.41%;
  width: 1.46%;
  top: 49.5%;
  bottom: 47.31%;
  left: 89%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Iconsaxlinearsearchnormal11 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.41%;
  width: 1.46%;
  top: 42.5%;
  right: 11.15%;
  bottom: 54.81%;
  left: 89%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Iconsaxlinearsearchnormal12 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.31%;
  width: 1.46%;
  top: 56%;
  right: 11.04%;
  bottom: 40.46%;
  left: 89%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const Div9 = styled.div`
  position: absolute;
  top: 0px;
  left: 39.74px;
  display: inline-block;
  width: 152.59px;
  height: 25.35px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 2.67px;
  left: 0px;
  background-color: var(--eff);
  width: 23.84px;
  height: 20.01px;
`;
const Parent1 = styled.div`
  position: absolute;
  top: 665px;
  left: 528px;
  width: 192.32px;
  height: 25.35px;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color);
  font-family: var(--font-inter);
`;

const Div10 = styled.div`
  position: absolute;
  height: 3.24%;
  width: 8%;
  top: 65.74%;
  left: 82%;
  font-weight: 600;
  display: inline-block;
`;
const Div11 = styled.div`
  position: absolute;
  height: 3.24%;
  width: 8%;
  top: 59.17%;
  left: 82%;
  font-weight: 600;
  display: inline-block;
`;
const Div12 = styled.div`
  position: absolute;
  height: 3.33%;
  width: 8.7%;
  top: 65.83%;
  left: 57.34%;
  font-weight: 600;
  display: inline-block;
`;
const Msc1 = styled.div`
  position: absolute;
  height: 3.43%;
  width: 11.82%;
  top: 59.54%;
  left: 57.34%;
  font-weight: 600;
  display: inline-block;
`;
const Iconsaxlinearsearchnormal13 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.59%;
  width: 1.51%;
  top: 68%;
  right: 10.83%;
  bottom: 28.8%;
  left: 89%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Iconsaxlinearsearchnormal14 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.41%;
  width: 1.51%;
  top: 62%;
  right: 10.78%;
  bottom: 34.72%;
  left: 89%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Div13 = styled.div`
  position: absolute;
  top: 460px;
  left: 533px;
  font-size: 60px;
  font-family: var(--font-inter);
  color: var(--color);
  text-align: center;
  display: inline-block;
  width: 137.44px;
  height: 168.15px;
`;


const AbeekPageRoot = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: #fff;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-black);
  font-family: var(--font-plus-jakarta-sans);
`;


const StyledSVG = styled.svg`
  position: absolute;
  top: 346px;
  left: 451px;
  width: 302px;
  height: 302px;

`;

const Circle = styled.circle`
  fill: none;
  stroke: var(--eff);
  stroke-width: 40; /* 게이지 굵기 */
  stroke-dasharray: 816.4; /* 원의 둘레 길이인 2πr 값을 기준으로 설정합니다 */
  stroke-dashoffset: ${props => 816.4 * (1 - props.fill)}; /* 채워진 정도에 따라 dashoffset 값을 설정합니다 */
  transform: rotate(-0deg); /* 원의 시작점을 상단으로 조정합니다 */
  transform-origin: center; /* 원의 회전 기준점을 중심으로 설정합니다 */
  transition: stroke-dashoffset 0.3s ease-in-out; /* 채워진 정도 변경 시 애니메이션을 적용합니다 */
  transform: scaleX(-1);
`;

const MidCircle = styled.circle`
  fill: none;
  stroke: var(--color-turquoise-100);
  stroke-width: 40; /* 게이지 굵기 */
  stroke-dasharray: 816.4; /* 원의 둘레 길이인 2πr 값을 기준으로 설정합니다 */
  stroke-dashoffset: ${props => 816.4 * (1 - props.fill)}; /* 채워진 정도에 따라 dashoffset 값을 설정합니다 */
  transform: rotate(-0deg); /* 원의 시작점을 상단으로 조정합니다 */
  transform-origin: center; /* 원의 회전 기준점을 중심으로 설정합니다 */
  transition: stroke-dashoffset 0.3s ease-in-out; /* 채워진 정도 변경 시 애니메이션을 적용합니다 */
  transform: scaleX(-1);
`;

const BackCircle = styled.circle`
  fill: none;
  stroke: #bcbcbc;
  stroke-width: 40; /* 게이지 굵기 */
  stroke-dasharray: 816.4; /* 원의 둘레 길이인 2πr 값을 기준으로 설정합니다 */
  stroke-dashoffset: 0; /* 채워진 정도에 따라 dashoffset 값을 설정합니다 */
  transform: rotate(-180deg); /* 원의 시작점을 상단으로 조정합니다 */
  transform-origin: center; /* 원의 회전 기준점을 중심으로 설정합니다 */
  transition: stroke-dashoffset 0.3s ease-in-out; /* 채워진 정도 변경 시 애니메이션을 적용합니다 */
`;

const api = axios.create({
  baseURL: 'http://localhost:8000'  // 백엔드 서버의 주소와 포트를 baseURL로 설정
});

const 아빅18Page = ({ onClose }) => {
  const userstudentid_location = useLocation();
  const user_student_id = userstudentid_location.state.student_id;
  const navigate = useNavigate();

  const navigate2Qna = () => {
    navigate("/Qna", {state : {student_id : user_student_id}});
  }

  const navigate2Setting = () => {
    navigate("/Setting", {state : {student_id : user_student_id}});
  }

  const navigate2Main = () => {
    navigate("/Main", {state : {student_id : user_student_id}});
  }

  const navigate2Graduate = () => {
    navigate("/Graduate18", {state : {student_id : user_student_id}});
  }

  const navigate2Recommand = (domain) => {
    navigate("/Recommand", {state : {student_id : user_student_id, lect_domain : domain, from : 'Abeek'}});
    console.log(domain);
  }
  
  const majormust = () => navigate2Recommand('전공필수');
  const design = () => navigate2Recommand('전공설계');
  const msctotal = () => navigate2Recommand('MSC전체');
  const mscmust = () => navigate2Recommand('MSC필수');
  const gyoyang = () => navigate2Recommand('전문교양');

  const [abeeklist, setAbeeklist] = useState([]);
  const [changeabeeklist, setChangeabeeklist] = useState([]);
  const [finallist, setFinallist] = useState([]);

  const Showuserinfo = async(e) => {
    try {
      const response = await api.post('/api/showabeek/', {
        student_id : user_student_id,
      });
      setAbeeklist([response.data.message]);
      const response11 = await api.post('/api/showchangeabeek/', {
        student_id : user_student_id,
      });
      setChangeabeeklist([response11.data.message]);
      var temp_list = [];
      for(var i=0; i < response.data.message.length; i++){
        var temp_item = response.data.message[i];
        temp_item.push(response11.data.message[i][0]);
        temp_list.push(temp_item);
      }
      setFinallist([temp_list]);

      
    } catch (error) {
      alert('서버 연결 실패!');
    } 
  };
  useEffect(() => {
    Showuserinfo();
  }, []);

  console.log(finallist);

  return (
    <AbeekPageRoot>
      <아빅18GlobalStyles/>
      {finallist.map(item=>(<Div13>{Math.round((item[0][0]+item[1][0]+item[2][0]+item[3][0]+item[4][0]+item[5][0])/(item[0][1]+item[1][1]+item[2][1]+item[3][1]+item[4][1]+item[5][1])*100)}%</Div13>))}
      {finallist.map(item=>(
        <StyledSVG>
          <BackCircle cx="151" cy="151" r="130"/>
          <MidCircle cx="151" cy="151" r="130" fill = {(item[0][2]+item[1][2]+item[2][2]+item[3][2]+item[4][2]+item[5][2])/(item[0][1]+item[1][1]+item[2][1]+item[3][1]+item[4][1]+item[5][1])} />
          <Circle cx="151" cy="151" r="130" fill = {(item[0][0]+item[1][0]+item[2][0]+item[3][0]+item[4][0]+item[5][0])/(item[0][1]+item[1][1]+item[2][1]+item[3][1]+item[4][1]+item[5][1])} />
        </StyledSVG>
      ))}

      <GyoyangBarBack />
      {changeabeeklist.map(item=>(<GyoyangBarMid style={{"height":item[0][0]/item[0][1]*560}}/>))}
      {abeeklist.map(item=>(<GyoyangBar style={{"height":item[0][0]/item[0][1]*562}}/>))}

      <MSCmustBarBack />
      {changeabeeklist.map(item=>(<MSCmustBarMid style={{"height":item[1][0]/item[1][1]*560}}/>))}
      {abeeklist.map(item=>(<MSCmustBar style={{"height":item[1][0]/item[1][1]*562}}/>))}

      <MSCBarBack />
      {changeabeeklist.map(item=>(<MSCBarMid style={{"height":item[2][0]/item[2][1]*560}}/>))}
      {abeeklist.map(item=>(<MSCBar style={{"height":item[2][0]/item[2][1]*562}}/>))}

      <MajorMustBarBack />
      {changeabeeklist.map(item=>(<MajorMustBarMid style={{"height":item[3][0]/item[3][1]*560}}/>))}
      {abeeklist.map(item=>(<MajorMustBar style={{"height":item[3][0]/item[3][1]*562}}/>))}

      <MajorBarBack />
      {changeabeeklist.map(item=>(<MajorBarMid style={{"height":item[4][0]/item[4][1]*560}}/>))}
      {abeeklist.map(item=>(<MajorBar style={{"height":item[4][0]/item[4][1]*562}}/>))}

      <DesignBarBack />
      {changeabeeklist.map(item=>(<DesignBarMid style={{"height":item[5][0]/item[5][1]*560}}/>))}
      {abeeklist.map(item=>(<DesignBar style={{"height":item[5][0]/item[5][1]*562}}/>))}

      <SubtractIcon alt="" src="/아빅18subtract.svg" onClick={navigate2Setting}/>
      <HiconOutlineMessage18 alt="" src="/아빅18hicon--outline--message-18.svg" onClick={navigate2Qna}/>
      <Iconlybulkcategory alt="" src="/아빅18iconlybulkcategory.svg" onClick={navigate2Main}/>
      <Smiley>SMILEY</Smiley>
      <Div onClick={navigate2Setting}>사용자 설정</Div>
      <HappyFaceIcon alt="" src="/아빅18happyface.svg" />
      <HiconOutlineActivity2 alt="" src="/아빅18hicon--outline--activity-4.svg" onClick={navigate2Graduate}/>
      <Home onClick={navigate2Main}>Home</Home>
      <B onClick={navigate2Graduate}>{`졸업요건 `}</B>
      <HiconOutlineActivity4 alt="" src="/아빅18hicon--outline--activity-2.svg" />
      <Abeek>ABEEK요건</Abeek>
      <Abeek1>ABEEK요건</Abeek1>
      <AbeekPageItem />
      <Home onClick={navigate2Main}>Home</Home>
      <AbeekPageInner />
      <Div1 onClick={navigate2Qna}>자주 묻는 질문</Div1>

      {finallist.map(item=>(<Div10><span>{item[0][0]} </span><Span>{`(`}{item[0][2]}{`) `}</Span><span>/ {item[0][1]}</span></Div10>))}
      {finallist.map(item=>(<Div11><span>{item[1][0]} </span><Span>{`(`}{item[1][2]}{`) `}</Span><span>/ {item[1][1]}</span></Div11>))}
      {finallist.map(item=>(<Div5><span>{item[2][0]} </span><Span>{`(`}{item[2][2]}{`) `}</Span><span>/ {item[2][1]}</span></Div5>))}
      {finallist.map(item=>(<Div3><span>{item[3][0]} </span><Span>{`(`}{item[3][2]}{`) `}</Span><span>/ {item[3][1]}</span></Div3>))}
      {finallist.map(item=>(<Div2><span>{item[4][0]} </span><Span>{`(`}{item[4][2]}{`) `}</Span><span>/ {item[4][1]}</span></Div2>))}
      {finallist.map(item=>(<Div4><span>{item[5][0]} </span><Span>{`(`}{item[5][2]}{`) `}</Span><span>/ {item[5][1]}</span></Div4>))}
      <Div6>설계</Div6>
      <Msc>MSC 총 학점</Msc>
      <Div7>전공 총 학점</Div7>
      <Div8>전공 필수</Div8>
      <Iconsaxlinearsearchnormal1
        alt=""
        src="/아빅18iconsaxlinearsearchnormal1.svg"
        onClick = {design}
      />
      <Iconsaxlinearsearchnormal11
        alt=""
        src="/아빅18iconsaxlinearsearchnormal1.svg"
        onClick = {majormust}
      />
      <Iconsaxlinearsearchnormal12
        alt=""
        src="/아빅18iconsaxlinearsearchnormal1.svg"
        onClick = {msctotal}
      />
      <Parent1>
        <Div9>취득 학점 비율</Div9>
        <GroupChild />
      </Parent1>

      
      <Div12>전문교양</Div12>
      <Msc1>MSC 필수</Msc1>
      <Iconsaxlinearsearchnormal13
        alt=""
        src="/아빅18iconsaxlinearsearchnormal1.svg"
        onClick = {gyoyang}
      />
      <Iconsaxlinearsearchnormal14
        alt=""
        src="/아빅18iconsaxlinearsearchnormal1.svg"
        onClick = {mscmust}
      />
    </AbeekPageRoot>
  );
};

export default 아빅18Page;
