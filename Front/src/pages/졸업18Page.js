import styled from "styled-components";
import 졸업18GlobalStyles from "../졸업18global";
import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';



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
  cursor : pointer;
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
  position: absolute;
  height: 2.01%;
  width: 4.1%;
  top: 20.98%;
  left: 4.24%;
  font-size: var(--font-size-base);
  display: inline-block;
  color: var(--color-slateblue);
`;
const HiconOutlineActivity4 = styled.img`
  cursor : pointer;
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
  cursor : pointer;
  position: absolute;
  height: 2.01%;
  width: 5.69%;
  top: 27.11%;
  left: 4.24%;
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-gray-100);
  display: inline-block;
`;
const Div1 = styled.div`
  position: absolute;
  height: 4.12%;
  width: 8.19%;
  top: 4.63%;
  left: 15.31%;
  font-size: 32px;
  font-weight: 600;
  color: var(--color-gray-200);
  display: inline-block;
`;
const PageItem = styled.div`
  position: absolute;
  top: 3.5px;
  left: 243.5px;
  border-right: 1px solid #eaeaea;
  box-sizing: border-box;
  width: 1px;
  height: 1029px;
`;
const PageInner = styled.div`
  position: absolute;
  top: 194px;
  left: -8px;
  border-radius: 30px;
  background-color: var(--color-slateblue);
  width: 20px;
  height: 40px;
`;
const Div2 = styled.div`
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
const HumanBarBack = styled.div`
  position: absolute;
  top: 264px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const HumanBarMid = styled.div`
  position: absolute;
  top: 264px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);

  width: 25px;
  height: 560px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const HumanBar = styled.div`
  position: absolute;
  top: 264px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-slateblue);
  box-sizing: border-box;
  width: 27px;
  height: 530px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const SocietyBarBack = styled.div`
  position: absolute;
  top: 330px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const SocietyBarMid = styled.div`
  position: absolute;
  top: 330px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);

  width: 25px;
  height: 560px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const SocietyBar = styled.div`
  position: absolute;
  top: 330px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-slateblue);
  box-sizing: border-box;
  width: 27px;
  height: 530px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const NatureBarBack = styled.div`
  position: absolute;
  top: 401px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const NatureBarMid = styled.div`
  position: absolute;
  top: 401px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);

  width: 25px;
  height: 560px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const NatureBar = styled.div`
  position: absolute;
  top: 401px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-slateblue);
  width: 27px;
  height: 530px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const InsungBarBack = styled.div`
  position: absolute;
  top: 573px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const InsungBarMid = styled.div`
  position: absolute;
  top: 573px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);

  width: 25px;
  height: 560px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const InsungBar = styled.div`
  position: absolute;
  top: 573px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-mediumslateblue);
  box-sizing: border-box;
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  
`;

const LeaderBarBack = styled.div`
  position: absolute;
  top: 637px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const LeaderBarMid = styled.div`
  position: absolute;
  top: 637px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);

  width: 25px;
  height: 560px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const LeaderBar = styled.div`
  position: absolute;
  top: 637px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-mediumslateblue);
  box-sizing: border-box;
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const CommuBarBack = styled.div`
  position: absolute;
  top: 707px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const CommuBarMid = styled.div`
  position: absolute;
  top: 707px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);

  width: 25px;
  height: 560px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const CommuBar = styled.div`
  position: absolute;
  top: 707px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-mediumslateblue);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const CreativityBarBack = styled.div`
  position: absolute;
  top: 775px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const CreativityBarMid = styled.div`
  position: absolute;
  top: 775px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);
  // border: 2px solid var(--color-white);
  box-sizing: border-box;
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const CreativityBar = styled.div`
  position: absolute;
  top: 775px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-mediumslateblue);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const NormalengBarBack = styled.div`
  position: absolute;
  top: 844px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const NormalengBarMid = styled.div`
  position: absolute;
  top: 844px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);

  box-sizing: border-box;
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const NormalengBar = styled.div`
  position: absolute;
  top: 844px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-mediumslateblue);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const ProengBarBack = styled.div`
  position: absolute;
  top: 913px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const ProengBarMid = styled.div`
  position: absolute;
  top: 913px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);

  box-sizing: border-box;
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const ProengBar = styled.div`
  position: absolute;
  top: 913px;
  left: 1082px;
  border-radius: var(--br-8xs);
  background-color: var(--color-mediumslateblue);
  width: 27px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;



const MajorBarBack = styled.div`
  position: absolute;
  top: 594px;
  left: 346px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const MajorBarMid = styled.div`
  position: absolute;
  top: 594px;
  left: 346px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);
  // border: 2px solid var(--color-white);
  box-sizing: border-box;
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const MajorBar = styled.div`
  position: absolute;
  top: 594px;
  left: 346px;
  border-radius: var(--br-8xs);
  background-color: var(--eff);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const GyoyangBarBack = styled.div`
  position: absolute;
  top: 679px;
  left: 346px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const GyoyangBarMid = styled.div`
  position: absolute;
  top: 679px;
  left: 346px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const GyoyangBar = styled.div`
  position: absolute;
  top: 679px;
  left: 346px;
  border-radius: var(--br-8xs);
  background-color: var(--eff);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const BsmmustBarBack = styled.div`
  position: absolute;
  top: 848px;
  left: 346px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const BsmmustBarMid = styled.div`
  position: absolute;
  top: 848px;
  left: 346px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);

  box-sizing: border-box;
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const BsmmustBar = styled.div`
  position: absolute;
  top: 848px;
  left: 346px;
  border-radius: var(--br-8xs);
  background-color: var(--color-mediumpurple);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const BsmBarBack = styled.div`
  position: absolute;
  top: 916px;
  left: 346px;
  border-radius: var(--br-8xs);
  background-color: var(--color-lavender);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const BsmBarMid = styled.div`
  position: absolute;
  top: 916px;
  left: 346px;
  border-radius: var(--br-8xs);
  background-color: var(--color-turquoise-100);

  box-sizing: border-box;
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;

const BsmBar = styled.div`
  position: absolute;
  top: 916px;
  left: 346px;
  border-radius: var(--br-8xs);
  background-color: var(--color-mediumpurple);
  width: 21px;
  height: 562px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;





const Div3 = styled.div`
  position: absolute;
  height: 5.09%;
  width: 14.32%;
  top: 13.52%;
  left: 56.46%;
  font-size: var(--font-size-8xl);
  font-weight: 600;
  color: var(--color-gray-200);
  display: inline-block;
`;
const Div4 = styled.div`
  position: absolute;
  height: 4.44%;
  width: 13.07%;
  top: 68.98%;
  left: 18.02%;
  font-size: var(--font-size-8xl);
  font-weight: 600;
  color: var(--color-gray-200);
  display: inline-block;
`;
const Div5 = styled.div`
  position: absolute;
  height: 3.24%;
  width: 8.75%;
  top: 18.98%;
  left: 56.51%;
  font-weight: 600;
  display: inline-block;
`;
const Div6 = styled.div`
  position: absolute;
  height: 3.43%;
  width: 8%;
  top: 49.72%;
  left: 41.5%;
  font-weight: 600;
  display: inline-block;
`;
const Span = styled.span`
  color: var(--color-turquoise-100);
`;
const Div7 = styled.div`
  position: absolute;
  height: 3.52%;
  width: 8%;
  top: 57.59%;
  left: 41.5%;
  font-weight: 600;
  display: inline-block;
`;
const Div8 = styled.div`
  position: absolute;
  height: 3.24%;
  width: 8%;
  top: 19.54%;
  left: 82%;
  font-weight: 600;
  text-align: left;
  display: inline-block;
`;
const Div9 = styled.div`
  position: absolute;
  height: 3.33%;
  width: 8%;
  top: 73.43%;
  left: 41.5%;
  font-weight: 600;
  text-align: left;
  display: inline-block;
`;
const Div10 = styled.div`
  position: absolute;
  height: 3.24%;
  width: 8%;
  top: 80.09%;
  left: 41.5%;
  font-weight: 600;
  text-align: left;
  display: inline-block;
`;
const Div11 = styled.div`
  position: absolute;
  height: 3.33%;
  width: 8%;
  top: 25.74%;
  left: 82%;
  font-weight: 600;
  text-align: left;
  display: inline-block;
`;
const Div12 = styled.div`
  position: absolute;
  height: 3.43%;
  width: 8%;
  top: 31.94%;
  left: 82%;
  font-weight: 600;
  text-align: left;
  display: inline-block;
`;
const Div13 = styled.div`
  position: absolute;
  height: 3.33%;
  width: 10.36%;
  top: 73.43%;
  left: 17.92%;
  font-weight: 600;
  display: inline-block;
`;
const Div14 = styled.div`
  position: absolute;
  height: 3.52%;
  width: 8.65%;
  top: 79.63%;
  left: 18.02%;
  font-weight: 600;
  display: inline-block;
`;

const Div15 = styled.div`
  position: absolute;
  height: 4.44%;
  width: 14.32%;
  top: 45.19%;
  left: 17.92%;
  font-size: var(--font-size-8xl);
  font-weight: 600;
  color: var(--color-gray-200);
  display: inline-block;
`;
const Div16 = styled.div`
  position: absolute;
  height: 3.43%;
  width: 11.41%;
  top: 49.63%;
  left: 17.92%;
  font-weight: 600;
  display: inline-block;
`;
const Div17 = styled.div`
  position: absolute;
  height: 3.43%;
  width: 9.53%;
  top: 57.41%;
  left: 17.92%;
  font-weight: 600;
  display: inline-block;
`;
const Div18 = styled.div`
  position: absolute;
  height: 3.24%;
  width: 8.7%;
  top: 25.28%;
  left: 56.61%;
  font-weight: 600;
  display: inline-block;
`;
const Div19 = styled.div`
  position: absolute;
  height: 3.33%;
  width: 11.88%;
  top: 31.76%;
  left: 56.61%;
  font-weight: 600;
  display: inline-block;
`;

// 인간문화의이해
const Iconsaxlinearsearchnormal1 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.59%;
  width: 1.46%;
  top: 21.50%;
  left: 87.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

// 사회역사의 이해
const Iconsaxlinearsearchnormal11 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.59%;
  width: 1.46%;
  top: 28.2%;
  left: 87.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
// 자연과학기술의 이해
const Iconsaxlinearsearchnormal12 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.59%;
  width: 1.46%;
  top: 34.9%;
  left: 87.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

// 기초자연과학(필수)
const Iconsaxlinearsearchnormal13 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.59%;
  width: 1.46%;
  top: 76.3%;
  left: 48.88%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

// 기초자연과학
const Iconsaxlinearsearchnormal14 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.59%;
  width: 1.46%;
  top: 82.7%;
  left: 48.88%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const Iconsaxlinearsearchnormal15 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.59%;
  width: 1.46%;
  top: 52.7%;
  left: 48.88%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const Div20 = styled.div`
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
  top: 414px;
  left: 521px;
  width: 192.32px;
  height: 25.35px;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color);
  font-family: var(--font-inter);
`;


const Div21 = styled.div`
  position: absolute;
  height: 4.35%;
  width: 13.07%;
  top: 43.89%;
  left: 56.72%;
  font-size: var(--font-size-8xl);
  font-weight: 600;
  color: var(--color-gray-200);
  display: inline-block;
`;
const Div22 = styled.div`
  position: absolute;
  height: 3.15%;
  width: 8.65%;
  top: 47.13%;
  left: 56.72%;
  font-weight: 600;
  display: inline-block;
`;
const Div23 = styled.div`
  position: absolute;
  height: 3.33%;
  width: 8%;
  top: 47.5%;
  left: 82%;
  font-weight: 600;
  display: inline-block;
`;
const Div24 = styled.div`
  position: absolute;
  height: 3.24%;
  width: 8%;
  top: 53.61%;
  left: 82%;
  font-weight: 600;
  display: inline-block;
`;
const Div25 = styled.div`
  position: absolute;
  height: 3.43%;
  width: 8%;
  top: 60.37%;
  left: 82%;
  font-weight: 600;
  display: inline-block;
`;
const Span1 = styled.span`
  color: #57e6d0;
`;
const Div26 = styled.div`
  position: absolute;
  height: 3.15%;
  width: 8%;
  top: 66.67%;
  left: 82%;
  font-weight: 600;
  display: inline-block;
`;
const Div27 = styled.div`
  position: absolute;
  height: 3.24%;
  width: 8%;
  top: 73.33%;
  left: 82%;
  font-weight: 600;
  display: inline-block;
`;
const Div28 = styled.div`
  position: absolute;
  height: 3.24%;
  width: 8%;
  top: 79.26%;
  left: 82%;
  font-weight: 600;
  display: inline-block;
`;
const Div29 = styled.div`
  position: absolute;
  height: 3.24%;
  width: 8.7%;
  top: 54.35%;
  left: 56.77%;
  font-weight: 600;
  display: inline-block;
`;
const Div30 = styled.div`
  position: absolute;
  height: 3.33%;
  width: 8.7%;
  top: 60.56%;
  left: 56.77%;
  font-weight: 600;
  display: inline-block;
`;
const Div31 = styled.div`
  position: absolute;
  height: 3.15%;
  width: 8.7%;
  top: 67.13%;
  left: 56.82%;
  font-weight: 600;
  display: inline-block;
`;
const Div32 = styled.div`
  position: absolute;
  height: 3.33%;
  width: 8.7%;
  top: 73.43%;
  left: 56.77%;
  font-weight: 600;
  display: inline-block;
`;
const Div33 = styled.div`
  position: absolute;
  height: 3.43%;
  width: 11.82%;
  top: 79.63%;
  left: 56.82%;
  font-weight: 600;
  display: inline-block;
`;

// 성균인성
const Iconsaxlinearsearchnormal16 = styled.img`
  cursor : pointer;
  position: absolute;
  height: 2.59%;
  width: 1.46%;
  top: 50.00%;
  left: 87.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

// 리더십
const Iconsaxlinearsearchnormal17 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.59%;
  width: 1.46%;
  top: 56.4%;
  left: 87.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

// 의사소통
const Iconsaxlinearsearchnormal18 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.59%;
  width: 1.46%;
  top: 62.8%;
  left: 87.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

// 기본영어
const Iconsaxlinearsearchnormal19 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.59%;
  width: 1.46%;
  top: 75.6%;
  left: 87.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

// 전문영어/글로벌
const Iconsaxlinearsearchnormal110 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.59%;
  width: 1.46%;
  top: 82%;
  left: 87.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

// 창의와 사유
const Iconsaxlinearsearchnormal112 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.59%;
  width: 1.46%;
  top: 69.2%;
  left: 87.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const Div34 = styled.div`
  position: absolute;
  top: 210px;
  left: 526px;
  font-size: 60px;
  font-family: var(--font-inter);
  color: var(--color);
  text-align: center;
  display: inline-block;
  width: 137.44px;
  height: 168.15px;
`;
const PageRoot = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: var(--color-white);
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


////// 원 그래프 ////

const StyledSVG = styled.svg`
  position: absolute;
  top: 95px;
  left: 444px;
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

const 졸업18Page = ({ onClose }) => {
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

  const navigate2Abeek = () => {
    navigate("/Abeek18", {state : {student_id : user_student_id}});
  }

  const navigate2Recommand = (domain) => {
    navigate("/Recommand", {state : {student_id : user_student_id, lect_domain : domain, from : 'Graduate'}});
  }

  const bsmmust = () => navigate2Recommand('기초자연과학(필수)');
  const bsm = () => navigate2Recommand('기초자연과학');
  const human = () => navigate2Recommand('인간/문화의이해');
  const society = () => navigate2Recommand('사회/역사의이해');
  const nature = () => navigate2Recommand('자연/과학/기술의이해');
  const insung = () => navigate2Recommand('성균인성');
  const leader = () => navigate2Recommand('리더십');
  const commu = () => navigate2Recommand('의사소통');
  const creativity = () => navigate2Recommand('창의와사유');
  const normaleng = () => navigate2Recommand('기본영어');
  const proeng = () => navigate2Recommand('전문영어/글로벌문화');
  const major = () => navigate2Recommand('전공');

  const [graduatelist, setGraduatelist] = useState([]);
  const [changegraduatelist, setChangegraduatelist] = useState([]);
  const [finallist, setFinallist] = useState([]);
  const Showuserinfo = async(e) => {
    try {
      const response = await api.post('/api/showgraduate/', {
        student_id : user_student_id,
      });
      setGraduatelist([response.data.message]);
      const response11 = await api.post('/api/showchangegraduate/', {
        student_id : user_student_id,
      });
      setChangegraduatelist([response11.data.message]);
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

  
  return (
    <PageRoot>
    <졸업18GlobalStyles />
      {graduatelist.map(item=>(<Div34>{Math.round(item[13][0]/item[13][1]*100)}%</Div34>))}
      {finallist.map(item=>(
        <StyledSVG>
          <BackCircle cx="151" cy="151" r="130"/>
          <MidCircle cx="151" cy="151" r="130" fill = {item[13][2]/item[13][1]} />
          <Circle cx="151" cy="151" r="130" fill = {item[13][0]/item[13][1]} />
        </StyledSVG>
      ))}
      

    
      <SubtractIcon alt="" src="/졸업18subtract.svg" onClick={navigate2Setting}/>
      <HiconOutlineMessage18 alt="" src="/졸업18hicon--outline--message-18.svg" onClick={navigate2Qna}/>
      <Iconlybulkcategory alt="" src="/졸업18iconlybulkcategory.svg" onClick={navigate2Main}/>
      <Smiley>SMILEY</Smiley>
      <Div onClick={navigate2Setting}>사용자 설정</Div>
      <HappyFaceIcon alt="" src="/졸업18happyface.svg" />
      <HiconOutlineActivity2 alt="" src="/졸업18hicon--outline--activity-2.svg" />
      <Home onClick={navigate2Main}>Home</Home>
      <B>{`졸업요건 `}</B>
      <HiconOutlineActivity4 alt="" src="/졸업18hicon--outline--activity-4.svg" onClick={navigate2Abeek}/>
      <Abeek onClick={navigate2Abeek}>ABEEK요건</Abeek>
      <Div1>졸업요건</Div1>
      <PageItem />
      <PageInner />
      <Div2 onClick={navigate2Qna}>자주 묻는 질문</Div2>
      <HumanBarBack />
      {changegraduatelist.map(item=>(<HumanBarMid style={{"height":item[8][0]/item[8][1]*560}}/>))}
      {graduatelist.map(item=>(<HumanBar style={{"height":item[8][0]/item[8][1]*562}}/>))}
      
      <SocietyBarBack />
      {changegraduatelist.map(item=>(<SocietyBarMid style={{"height":item[9][0]/item[9][1]*560}}/>))}
      {graduatelist.map(item=>(<SocietyBar style={{"height":item[9][0]/item[9][1]*562}}/>))}

      <NatureBarBack/>
      {changegraduatelist.map(item=>(<NatureBarMid style={{"height":item[10][0]/item[10][1]*560}}/>))}
      {graduatelist.map(item=>(<NatureBar style={{"height":item[10][0]/item[10][1]*562}}/>))}

      <InsungBarBack />
      {changegraduatelist.map(item=>(<InsungBarMid style={{"height":item[0][0]/item[0][1]*560}}/>))}
      {graduatelist.map(item=>(<InsungBar style={{"height":item[0][0]/item[0][1]*562}}/>))}
      

      <LeaderBarBack />
      {changegraduatelist.map(item=>(<LeaderBarMid style={{"height":item[1][0]/item[1][1]*560}}/>))}
      {graduatelist.map(item=>(<LeaderBar style={{"height":item[1][0]/item[1][1]*562}}/>))}

      <CommuBarBack />
      {changegraduatelist.map(item=>(<CommuBarMid style={{"height":item[2][0]/item[2][1]*560}}/>))}
      {graduatelist.map(item=>(<CommuBar style={{"height":item[2][0]/item[2][1]*562}}/>))}

      <CreativityBarBack />
      {changegraduatelist.map(item=>(<CreativityBarMid style={{"height":item[3][0]/item[3][1]*560}}/>))}
      {graduatelist.map(item=>(<CreativityBar style={{"height":item[3][0]/item[3][1]*562}}/>))}

      <NormalengBarBack />
      {changegraduatelist.map(item=>(<NormalengBarMid style={{"height":item[4][0]/item[4][1]*560}}/>))}
      {graduatelist.map(item=>(<NormalengBar style={{"height":item[4][0]/item[4][1]*562}}/>))}

      <ProengBarBack />
      {changegraduatelist.map(item=>(<ProengBarMid style={{"height":item[5][0]/item[5][1]*560}}/>))}
      {graduatelist.map(item=>(<ProengBar style={{"height":item[5][0]/item[5][1]*562}}/>))}

      <BsmmustBarBack />
      {changegraduatelist.map(item=>(<BsmmustBarMid style={{"height":item[7][0]/item[7][1]*560}}/>))}
      {graduatelist.map(item=>(<BsmmustBar style={{"height":item[7][0]/item[7][1]*562}}/>))}


      <BsmBarBack />
      {changegraduatelist.map(item=>(<BsmBarMid style={{"height":item[6][0]/item[6][1]*560}}/>))}
      {graduatelist.map(item=>(<BsmBar style={{"height":item[6][0]/item[6][1]*562}}/>))}

      <MajorBarBack />
      {changegraduatelist.map(item=>(<MajorBarMid style={{"height":item[12][0]/item[12][1]*560}}/>))}
      {graduatelist.map(item=>(<MajorBar style={{"height":item[12][0]/item[12][1]*562}}/>))}


      <GyoyangBarBack/>
      {changegraduatelist.map(item=>(<GyoyangBarMid style={{"height":item[11][0]/item[11][1]*560}}/>))}
      {graduatelist.map(item=>(<GyoyangBar style={{"height":item[11][0]/item[11][1]*562}}/>))}


      <Div3>핵심 균형 교양</Div3>
      <Div4>기초 교양</Div4>
      <Div5>인간/문화의 이해</Div5>
      {finallist.map(item=>(<Div6><span>{item[12][0]} </span><Span>{`(`}{item[12][2]}{`) `}</Span><span>/ {item[12][1]}</span></Div6>))}
      {finallist.map(item=>(<Div7><span>{item[11][0]} </span><Span>{`(`}{item[11][2]}{`) `}</Span><span>/ {item[11][1]}</span></Div7>))}
      {finallist.map(item=>(<Div8><span>{item[8][0]} </span><Span>{`(`}{item[8][2]}{`) `}</Span><span>/ {item[8][1]}</span></Div8>))}
      {finallist.map(item=>(<Div9><span>{item[7][0]} </span><Span>{`(`}{item[7][2]}{`) `}</Span><span>/ {item[7][1]}</span></Div9>))}
      {finallist.map(item=>(<Div10><span>{item[6][0]} </span><Span>{`(`}{item[6][2]}{`) `}</Span><span>/ {item[6][1]}</span></Div10>))}
      {finallist.map(item=>(<Div11><span>{item[9][0]} </span><Span>{`(`}{item[9][2]}{`) `}</Span><span>/ {item[9][1]}</span></Div11>))}
      {finallist.map(item=>(<Div12><span>{item[10][0]} </span><Span>{`(`}{item[10][2]}{`) `}</Span><span>/ {item[10][1]}</span></Div12>))}
      <Div13>기초자연과학(필수)</Div13>
      <Div14>기초자연과학</Div14>


      <Div15>총 학점</Div15>
      <Div16>제1전공 총 학점</Div16>
      <Div17>교양 총 학점</Div17>
      <Div18>사회/역사의 이해</Div18>
      <Div19>자연/과학/기술의 이해</Div19>
      <Iconsaxlinearsearchnormal1
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
        onClick={human}
      />
      <Iconsaxlinearsearchnormal11
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
        onClick={society}
      />
      <Iconsaxlinearsearchnormal12
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
        onClick={nature}

      />
      <Iconsaxlinearsearchnormal13
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
        onClick={bsmmust}
      />
      <Iconsaxlinearsearchnormal14
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
        onClick={bsm}
      />
      <Iconsaxlinearsearchnormal15
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
        onClick={major}
      />

      <Parent1>
        <Div20>취득 학점 비율</Div20>
        <GroupChild />
      </Parent1>


      <Div21>기초 교양</Div21>
      <Div22>성균 인성</Div22>
      {finallist.map(item=>(<Div23><span>{item[0][0]} </span><Span>{`(`}{item[0][2]}{`) `}</Span><span>/ {item[0][1]}</span></Div23>))}
      {finallist.map(item=>(<Div24><span>{item[1][0]} </span><Span>{`(`}{item[1][2]}{`) `}</Span><span>/ {item[1][1]}</span></Div24>))}
      {finallist.map(item=>(<Div25><span>{item[2][0]} </span><Span>{`(`}{item[2][2]}{`) `}</Span><span>/ {item[2][1]}</span></Div25>))}
      {finallist.map(item=>(<Div26><span>{item[3][0]} </span><Span>{`(`}{item[3][2]}{`) `}</Span><span>/ {item[3][1]}</span></Div26>))}
      {finallist.map(item=>(<Div27><span>{item[4][0]} </span><Span>{`(`}{item[4][2]}{`) `}</Span><span>/ {item[4][1]}</span></Div27>))}
      {finallist.map(item=>(<Div28><span>{item[5][0]} </span><Span>{`(`}{item[5][2]}{`) `}</Span><span>/ {item[5][1]}</span></Div28>))}
      <Div29>리더십</Div29>
      <Div30>의사소통</Div30>
      <Div31>창의와 사유</Div31>
      <Div32>기본 영어</Div32>
      <Div33>전문 영어 / 글로벌 문화</Div33>
      <Iconsaxlinearsearchnormal16
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
        onClick={insung}
      />
      <Iconsaxlinearsearchnormal17
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
        onClick={leader}
      />
      <Iconsaxlinearsearchnormal18
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
        onClick={commu}
      />
      <Iconsaxlinearsearchnormal19
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
        onClick={normaleng}
      />
      <Iconsaxlinearsearchnormal110
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
        onClick={proeng}
      />
      {/* <Iconsaxlinearsearchnormal110
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
      /> */}
      <Iconsaxlinearsearchnormal112
        alt=""
        src="/졸업18iconsaxlinearsearchnormal1.svg"
        onClick={creativity}
      />

      
    </PageRoot>
  );
};

export default 졸업18Page;
