import styled from "styled-components";
import 시간표GlobalStyles from "../시간표global";
import React, { useState, useEffect, useCallback, memo } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Page18Child = styled.div`
  position: absolute;
  top: -5px;
  left: 1415px;
  border-radius: var(--br-xl) 0px var(--br-xl) 0px;
  background-color: var(--color-ghostwhite);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 549px;
  height: 1091px;
`;
const HiconOutlineActivity1 = styled.img`
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
const HiconOutlineMessage18 = styled.img`
  cursor: pointer;
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
  position: absolute;
  height: 2.01%;
  width: 3.26%;
  top: 13.86%;
  left: 4.58%;
  font-weight: 500;
  color: var(--color-slateblue);
  display: inline-block;
`;
const Smiley = styled.div`
  position: absolute;
  height: 2.81%;
  width: 5.49%;
  top: 5.12%;
  left: 6.32%;
  font-size: var(--font-size-3xl);
  font-weight: 600;
  color: var(--color-gray-200);
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
const Page18Item = styled.div`
  position: absolute;
  top: 128px;
  left: -8px;
  border-radius: var(--br-11xl);
  background-color: var(--color-slateblue);
  width: 20px;
  height: 40px;
`;
const Page18Inner = styled.div`
  position: absolute;
  top: -0.5px;
  left: 243.5px;
  border-right: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 1px;
  height: 1025px;
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 362px;
  left: 123px;
  width: 100px;
  height: 100px;
  overflow: hidden;
`;
const Div1 = styled.div`
  cursor: pointer;
  position: absolute;
  height: 2.01%;
  width: 4.1%;
  top: 20.48%;
  left: 4.24%;
  font-weight: 500;
  display: inline-block;
`;
const HiconOutlineActivity3 = styled.img`
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
  cursor : pointer;
  position: absolute;
  height: 2.01%;
  width: 5.69%;
  top: 26.61%;
  left: 4.24%;
  font-weight: 500;
  display: inline-block;
`;
const Div3 = styled.div`
  position: absolute;
  height: 4.02%;
  width: 6.18%;
  top: 2.59%;
  left: 14.48%;
  font-size: 32px;
  font-weight: 600;
  color: var(--color-gray-200);
  display: inline-block;
`;

const HappyFaceIcon = styled.img`
  position: absolute;
  top: calc(50% - 489px);
  left: calc(50% - 888px);
  width: 38px;
  height: 35px;
`;
const Div7 = styled.div`
  cursor: pointer;
  position: absolute;
  height: 2.01%;
  width: 6.53%;
  top: 84.94%;
  left: 4.58%;
  font-weight: 500;
  display: inline-block;
`;
const Page18Child7 = styled.div`
  position: absolute;
  top: 524px;
  left: 1451px;
  border-radius: var(--br-3xs);
  background-color: var(--dark-text);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 300px;
  height: 541px;
`;
const Page18Child8 = styled.div`
  position: absolute;
  top: 120px;
  left: 1484px;
  border-radius: var(--br-3xs);
  background-color: var(--color-ghostwhite);
  width: 376px;
  height: 40px;
`;
const Div8 = styled.div`
  position: absolute;
  height: 2.31%;
  width: 3.8%;
  top: 10.0%;
  left: 78.7%;
  font-size: 18px;
  letter-spacing: -0.01em;
  font-weight: 600;
  color: var(--color-black);
  display: inline-block;
`;
const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 8px;
  background-color: var(--color-ghostwhite);
  width: 390px;
  height: 105px;
`;
const CollapseItemIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 12px;
  left: 13.02px;
  width: 26.03px;
  height: 24px;
`;

const CollapseItemIcon1 = styled.img`
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  width: 26.03px;
  height: 24px;
`;
const P = styled.p`
  margin: 0;
  width: 300px;
`;
const Div9 = styled.div`
  position: absolute;
  top: 45px;
  left: 55px;
  line-height: 150%;
  display: inline-block;
  width: 287px;
`;
const Div10 = styled.div`
  position: absolute;
  top: 15px;
  left: 54.23px;
  line-height: 150%;
  font-weight: 500;
  color: #0b0b0b;
  display: inline-block;
  width: 230px;
`;
const AddIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: calc(50% - 40.5px);
  left: calc(50% + 139px);
  width: 24px;
  height: 24px;
`;

const Faq = styled.div`
  position: relative;
  margin-top : 10px;
  left: 10px;
  width: 390px;
  height: 105px;
  font-family: var(--paragraph-medium-16);
`;

const VectorIcon = styled.img`
  cursor: pointer;
  position: relative;
  width: 22px;
  height: 22.56px;
`;
const Div11 = styled.input`
  border : none;
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 200px;
  height: 22.56px;
  flex-shrink: 0;
`;
const VectorParent = styled.div`
  position: absolute;
  top: 27px;
  left: 1450px;
  border-radius: var(--br-3xs);
  background-color: var(--dark-text);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 295px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-smi) 18px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 44px;
  left: 993px;
  width: 43px;
  height: 43px;
  display: none;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-ghostwhite);
  width: 284px;
  height: 117px;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs) 0px 0px var(--br-3xs);
  background-color: var(--color-plum);
  width: 8.66px;
  height: 117px;
`;
const GroupWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 284px;
  height: 117px;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 934px;
  left: 1458px;
  width: 284px;
  height: 117px;
`;
const Abeek2 = styled.div`
  position: absolute;
  height: 2.41%;
  width: 9.51%;
  top: 87.22%;
  left: 77.88%;
  font-size: var(--font-size-lgi);
  letter-spacing: -0.01em;
  font-weight: 600;
  color: var(--color-black);
  display: inline-block;
`;
const GroupContainer = styled.div`
  position: relative;
  width: 284px;
  height: 117px;
  z-index: 0;
`;
const Div12 = styled.div`
  position: absolute;
  margin: 0 !important;
  height: 21.09%;
  width: 50%;
  // width: 39.08%;
  top: 8%;
  left: 7.04%;
  letter-spacing: -0.01em;
  font-weight: 600;
  display: inline-block;
  z-index: 2;
`;
const Div13 = styled.div`
  position: absolute;
  height: 94.74%;
  width: 50.66%;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  display: flex;
`;
const Div14 = styled.div`
  position: absolute;
  height: 78.95%;
  width: 80.53%;
  top: 0%;
  left: 47%;
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-gray-100);
  display: inline-block;
`;
const Parent1 = styled.div`
  position: absolute;
  //margin: 0 !important;
  height: 16.7%;
  width: 45.85%;
  top: 38.46%;
  right: 47.11%;
  bottom: 44.84%;
  left: 7.04%;
  z-index: 2;
  font-size: var(--font-size-sm);
`;
const GroupParent = styled.div`
  position: absolute;
  top: 685px;
  left: 1461px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  font-size: var(--font-size-lgi);
  color: var(--color-black);
`;
const Div15 = styled.div`
  position: absolute;
  height: 100%;
  width: 53.88%;
  top: 0%;
  left: 10%;
  font-weight: 500;
  display: inline-block;
`;
const Div16 = styled.div`
  position: absolute;
  height: 83.33%;
  width: 64.43%;
  top: 0%;
  left: 40.57%;
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-gray-100);
  display: inline-block;
`;

const Group = styled.div`
  position: absolute;
  height: 1.81%;
  width: 10.35%;
  top: 90.28%;
  right: 12.78%;
  bottom: 7.91%;
  left: 76.88%;
  font-size: var(--font-size-sm);
  color: var(--color-black);
`;

const Div17 = styled.div`
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 600;
  display: inline-block;
  width: 233px;
  height: 24.22px;
  flex-shrink: 0;
`;
const Iconsaxlinearsearchnormal1 = styled.div`
  position: relative;
  width: 23px;
  height: 23.21px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Parent11 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;
`;
const Parent2 = styled.div`
  position: relative;
  width: 130.2px;
  height: 19.17px;
  font-size: var(--font-size-sm);
`;
const FrameParent = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--color-ghostwhite);
  height: 130px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: var(--padding-smi) var(--padding-3xs);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Page18Inner1 = styled.div`
  position: absolute;
  top: 533px;
  left: 1450px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-lgi);
  color: var(--color-black);
`;
const Div20 = styled.div`
  position: absolute;
  height: 94.74%;
  width: 53.52%;
  top: 0%;
  left: 0%;
  font-weight: 500;
  display: inline-block;
`;
const Div21 = styled.div`
  position: absolute;
  height: 78.95%;
  width: 64%;
  top: 0%;
  left: 40%;
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-gray-100);
  display: inline-block;
`;
const Parent3 = styled.div`
  position: absolute;
  height: 16.7%;
  width: 52.82%;
  top: 38.46%;
  right: 40.85%;
  bottom: 44.84%;
  left: 6.34%;
`;
const Div22 = styled.div`
  position: absolute;
  top: 12px;
  left: 18px;
  font-size: var(--font-size-lgi);
  letter-spacing: -0.01em;
  font-weight: 600;
  display: inline-block;
  width: 130px;
  height: 24.67px;
`;
const GroupParent1 = styled.div`
  position: absolute;
  top: 809px;
  left: 1458px;
  width: 284px;
  height: 117px;
  font-size: var(--font-size-sm);
  color: var(--color-black);
`;
const Txt = styled.div`
  flex: 1;
  position: relative;
  line-height: 15px;
  font-weight: 600;
  opacity: 0.9;
`;
const Content = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: var(--padding-11xs) 0px 0px;
  align-items: center;
  justify-content: flex-start;
`;
const ChangeMe = styled.div`
  position: relative;
  background-color: var(--color-crimson);
  width: 1px;
  height: 32px;
`;
const Duration1h = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-9xs);
  align-items: flex-start;
  justify-content: flex-start;
`;
const DurationXh = styled.div`
  width: 1px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0px var(--padding-11xs);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: 0;
`;
const HeightControl = styled.div`
  width: 0.01px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const HeaderCell = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: var(--dark-text);
  border-right: 0.5px solid var(--lines);
  border-bottom: 0.5px solid var(--lines);
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px var(--padding-9xs);
  align-items: center;
  justify-content: flex-start;
`;
const Header = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Text1 = styled.div`
  flex: 1;
  left: -2px;
  top: -2px;
  position: relative;
  line-height: 12px;
  display: inline-block;
  font-size : 5px;
  width: 24.99px;
  opacity: 1;
`;
const Content5 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--padding-10xs) 0px 0px;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
`;
const DurationXh5 = styled.div`
  width: 1px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0px var(--padding-11xs);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: 0;
  z-index: 0;
`;
const Cells = styled.div`
  align-self: stretch;
  border-right: 0.5px solid var(--lines);
  border-bottom: 0.5px solid var(--lines);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px var(--padding-9xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
`;
const H = styled.div`
  background-color: var(--dark-text);
  width: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Content31 = styled.div`
  align-self: stretch;
  flex: 1;
  z-index: 1;
`;
const Cell = styled.div`
  align-self: stretch;
  border-right: 0.5px solid var(--lines);
  border-bottom: 0.5px solid var(--lines);
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px var(--padding-9xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const Cell1 = styled.div`
  align-self: stretch;
  border-right: 0.5px solid var(--lines);
  border-bottom: 0.5px solid var(--lines);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px var(--padding-9xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const Cells26 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;
const Column = styled.div`
  align-self: stretch;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Cell26 = styled.div`
  align-self: stretch;
  border-right: 0.5px solid var(--lines);
  border-bottom: 0.5px solid var(--lines);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px var(--padding-9xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const Grid = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--time-size);
`;
const Schedulelight = styled.div`
  background-color: var(--dark-text);
  border: 1px solid var(--lines);
  box-sizing: border-box;
  width: 777px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SchedulelightWrapper = styled.div`
  position: absolute;
  top: 131px;
  left: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // align-items: flex-start;
  // justify-content: flex-start;
  font-size: var(--table-header-size);
  color: var(--light-text);
  font-family: var(--time);
`;
const SKKUBar1 = styled.div`
  position: absolute;
  top: 645px;
  left: 1475px;
  border-radius: var(--br-8xs);
  background-color: #ddd6ed;
  width: 19px;
  height: 235px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  z-index: 9;
`;

const SKKUBar1_1 = styled.div`
  position: absolute;
  top: 645px;
  left: 1475px;
  border-radius: var(--br-8xs);
  background-color: #712eff;
  width: 19px;
  height: 200px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  z-index: 9;
`;

const SKKUBar2 = styled.div`
  position: absolute;
  top: 784px;
  left: 1475px;
  border-radius: var(--br-8xs);
  background-color: #ddd6ed;
  width: 19px;
  height: 235px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  z-index: 9;
`;

const SKKUBar2_1 = styled.div`
  position: absolute;
  top: 784px;
  left: 1475px;
  border-radius: var(--br-8xs);
  background-color: #b379ff;
  width: 19px;
  height: 200px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  z-index: 9;
`;

const SKKUBar3 = styled.div`
  position: absolute;
  top: 904px;
  left: 1475px;
  border-radius: var(--br-8xs);
  background-color: #ddd6ed;
  width: 19px;
  height: 235px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  z-index: 9;
`;

const SKKUBar3_1 = styled.div`
  position: absolute;
  top: 904px;
  left: 1475px;
  border-radius: var(--br-8xs);
  background-color: #b379ff;
  width: 19px;
  height: 150px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  z-index: 9;
`;

const SKKUBar4 = styled.div`
  position: absolute;
  top: 1024px;
  left: 1475px;
  border-radius: var(--br-8xs);
  background-color: #ddd6ed;
  width: 19px;
  height: 235px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  z-index: 9;
`;

const SKKUBar4_1 = styled.div`
  position: absolute;
  top: 1024px;
  left: 1475px;
  border-radius: var(--br-8xs);
  background-color: #b379ff;
  width: 19px;
  height: 50px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  z-index: 9;
`;


const Page18Root = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: var(--dark-text);
  width: 100%;
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: var(--paragraph-medium-16-size);
  color: var(--color-gray-100);
  font-family: var(--font-plus-jakarta-sans);
`;

const Box1 = styled.div`
  position:absolute;
  top:165px;
  left:435px;
  border-radius: 10px;
  width:118px;
  height:33px;
  z-index:10;
  font-size:15px;
	font-weight:600;
  font-opacity:0;
  color:#ffffff;
  text-align:center;
  display : flex;
  justify-content : center;
  align-items : center;
  
  &.n1{
    background-color: var(--color-crimson);
    opacity:1;
  }
  &.n2{
    background-color: var(--color-blue);
    opacity:1;

  }
  &.n3{
    background-color:#999900;
    opacity:1;
  }
  &.n4{
    background-color:#00994c;
    opacity:1;
  }
  &.n5{
    background-color:#66ccb2;
    opacity:1;
  }
  &.n6{
    background-color:#99004c;
    opacity:1;
  }
  &.n7{
    background-color:#4c0099;
    opacity:1;
  }
  &.n8{
    background-color:#ff33ff;
    opacity:1;
  }
  &.n9{
    background-color:#a0a0a0;
    opacity:1;
  }
`

const Box2 = styled.div`
  position:absolute;
  top:165px;
  left:590px;
  border-radius: 10px;
  width:118px;
  height:33px;
  z-index:10;
  font-size:15px;
	font-weight:600;
  font-opacity:0;
  color:#ffffff;
  text-align:center;
  display : flex;
  justify-content : center;
  align-items : center;
  &.n1{
    background-color: var(--color-crimson);
    opacity:1;
  }
  &.n2{
    background-color: var(--color-blue);
    opacity:1;

  }
  &.n3{
    background-color:#999900;
    opacity:1;
  }
  &.n4{
    background-color:#00994c;
    opacity:1;
  }
  &.n5{
    background-color:#66ccb2;
    opacity:1;
  }
  &.n6{
    background-color:#99004c;
    opacity:1;
  }
  &.n7{
    background-color:#4c0099;
    opacity:1;
  }
  &.n8{
    background-color:#ff33ff;
    opacity:1;
  }
  &.n9{
    background-color:#a0a0a0;
    opacity:1;
  }
`

const Box3 = styled.div`
  position:absolute;
  top:165px;
  left:745px;
  border-radius: 10px;
  width:118px;
  height:33px;
  z-index:10;
  font-size:15px;
	font-weight:600;
  font-opacity:0;
  color:#ffffff;
  text-align:center;
  display : flex;
  justify-content : center;
  align-items : center;
  &.n1{
    background-color: var(--color-crimson);
    opacity:1;
  }
  &.n2{
    background-color: var(--color-blue);
    opacity:1;

  }
  &.n3{
    background-color:#999900;
    opacity:1;
  }
  &.n4{
    background-color:#00994c;
    opacity:1;
  }
  &.n5{
    background-color:#66ccb2;
    opacity:1;
  }
  &.n6{
    background-color:#99004c;
    opacity:1;
  }
  &.n7{
    background-color:#4c0099;
    opacity:1;
  }
  &.n8{
    background-color:#ff33ff;
    opacity:1;
  }
  &.n9{
    background-color:#a0a0a0;
    opacity:1;
  }
`
const Box4 = styled.div`
  position:absolute;
  top:165px;
  left:900px;
  border-radius: 10px;
  width:118px;
  height:33px;
  z-index:10;
  font-size:15px;
	font-weight:600;
  font-opacity:0;
  color:#ffffff;
  text-align:center;
  display : flex;
  justify-content : center;
  align-items : center;
  &.n1{
    background-color: var(--color-crimson);
    opacity:1;
  }
  &.n2{
    background-color: var(--color-blue);
    opacity:1;

  }
  &.n3{
    background-color:#999900;
    opacity:1;
  }
  &.n4{
    background-color:#00994c;
    opacity:1;
  }
  &.n5{
    background-color:#66ccb2;
    opacity:1;
  }
  &.n6{
    background-color:#99004c;
    opacity:1;
  }
  &.n7{
    background-color:#4c0099;
    opacity:1;
  }
  &.n8{
    background-color:#ff33ff;
    opacity:1;
  }
  &.n9{
    background-color:#a0a0a0;
    opacity:1;
  }
`

const Box5 = styled.div`
  position:absolute;
  top:165px;
  left:1055px;
  border-radius: 10px;
  width:118px;
  height:33px;
  z-index:10;
  font-size:15px;
	font-weight:600;
  font-opacity:0;
  color:#ffffff;
  text-align:center;
  display : flex;
  justify-content : center;
  align-items : center;
  &.n1{
    background-color: var(--color-crimson);
    opacity:1;
  }
  &.n2{
    background-color: var(--color-blue);
    opacity:1;

  }
  &.n3{
    background-color:#999900;
    opacity:1;
  }
  &.n4{
    background-color:#00994c;
    opacity:1;
  }
  &.n5{
    background-color:#66ccb2;
    opacity:1;
  }
  &.n6{
    background-color:#99004c;
    opacity:1;
  }
  &.n7{
    background-color:#4c0099;
    opacity:1;
  }
  &.n8{
    background-color:#ff33ff;
    opacity:1;
  }
  &.n9{
    background-color:#a0a0a0;
    opacity:1;
  }
`

// const Page18Child3 = styled.div`
//   position: absolute;
//   top: 104px;
//   left: 1450px;
//   border-radius: var(--br-3xs);
//   background-color: var(--dark-text);
//   border: 1px solid var(--color-whitesmoke);
//   box-sizing: border-box;
//   width: 443px;
//   height: 408px;
// `;

const Scrollpage = styled.div`
  position: absolute;
  top: 134px;
  left: 1450px;
  border-radius: var(--br-3xs);
  background-color: var(--dark-text);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 443px;
  height: 368px;
  overflow-y: scroll;
`;


const api = axios.create({
  baseURL: 'http://localhost:8000'  // 백엔드 서버의 주소와 포트를 baseURL로 설정
});

const 시간표Page = () => {
  const userstudentid_location = useLocation();
  const user_student_id = userstudentid_location.state.student_id;
  const [timetablelist, setTimetablelist] = useState([]);
  const [memolist, setMemolist] = useState([]);
  const [form, setForm] = useState("");
  const handleChange = (e) => {
    setForm(e.target.value);
  }

  const navigate = useNavigate();
  const navigate2Qna = () => {
    navigate("/Qna", {state : {student_id : user_student_id}});
  }

  const navigate2Setting = () => {
    navigate("/Setting", {state : {student_id : user_student_id}});
  }

  const navigate2Graduate = () => {
    navigate("/Graduate18", {state : {student_id : user_student_id}});
  }

  const navigate2Abeek = () => {
    navigate("/Abeek18", {state : {student_id : user_student_id}});
  }

  const navigate2Search = () => {
    navigate("/Search", {state : {student_id : user_student_id, query : form}});
  }

  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (onConfirm && typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }
    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
        return 1;
      } else {
        onCancel();
        return 0;
      }
    };
    return confirmAction;
  };

  

  const changeConfirm = () => {
    alert("새로운 과목으로 대체!");
  }
  const keepConfirm = () => {
    alert("기존 과목으로 유지!");
  }

  const Qchange = 
    useConfirm(
      "바꿀래?",
      changeConfirm,
      keepConfirm
    );

  const memoaddConfirm = () => {
    alert("대체된 과목 바로가기에 추가!");
  }
  const memoskipConfirm = () => {
    alert("Skip!");
  }

  const Qmemo = useConfirm(
      "대체된 과목을 바로가기에 추가할래?",
      memoaddConfirm,
      memoskipConfirm
  );



  const [graduatelist, setGraduatelist] = useState([]);
  const [abeeklist, setAbeeklist] = useState([]);
  
  const Showuserinfo = async(e) => {
   
    try {
      const response1 = await api.post('/api/showtimetable/', {
        student_id : user_student_id,
      });
      setTimetablelist(response1.data.message);
      const response2 = await api.post('/api/showmemo/', {
        student_id : user_student_id,
      });
      const response3 = await api.post('/api/showgraduate/', {
        student_id : user_student_id,
      });
      const response4 = await api.post('/api/showabeek/', {
        student_id : user_student_id,
      });
      setAbeeklist([response4.data.message]);
      setGraduatelist([response3.data.message]);
      setMemolist(response2.data.message);
    } catch (error) {
      alert('이수과목을 업로드해주세요!');
      navigate2Setting();
    } 
  };
  useEffect(() => {
   Showuserinfo();
  }, []);

  const deletelecture = async(item) => {
    try {
      console.log(item);
      const response3 = await api.post('/api/deletetimetable/', {
        student_id : user_student_id,
        timetable : [item[1],item[2],item[3],item[4],item[5],item[6],item[7]],
      });
      alert(response3.data.message);
      Showuserinfo();

    }catch (error){
      alert("서버 연결 실패!");
    }
  }

  const deletememo = async(item) => {
    try {
      console.log(item);
      const response4 = await api.post('/api/deletememo/', {
        student_id : user_student_id,
        memo : item,
      });
      alert(response4.data.message);
      Showuserinfo();

    }catch (error){
      alert("서버 연결 실패!");
    }
  }

  const AddTimetable = async(item) => {
    try {
      const response10 = await api.post('/api/addtimetable/', {
        student_id : user_student_id,
        lect_name : item[0],
        prof_name : item[1],
        lect_time_numbered : item[6],
        credit : item[3],
        lect_domain : item[2],
        lect_time : item[4],
        isString : 0,
      });
      console.log(response10.data.original);
      console.log(response10.data.change);
      if (response10.data.message){
        alert("겹쳤어!!!");
        var ischange = Qchange();
        if (ischange){
          const response11 = await api.post('/api/altertimetable/', {
            student_id : user_student_id,
            original : response10.data.original,
            change : response10.data.change
          });
          alert(response11.data.message);
        }
        var ismemo = Qmemo();
        // ismemo가 1이고 ischange가 0인경우 : chage data를 memo에 전달
        if (ismemo && !(ischange)){
          const response12 = await api.post('/api/addmemo/',{
            student_id : user_student_id,
            memo : response10.data.change
          });
          alert(response12.data.message);
        }
        // ismemo가 1이고 ischange가 1인경우 : original data를 memo에 전달
        else if (ismemo && ischange){
          const response12 = await api.post('/api/addmemo/',{
            student_id : user_student_id,
            memo : response10.data.original
          });
          alert(response12.data.message);
        }
      }else{
        alert("시간표 추가 완료!");
      }
      Showuserinfo();
    } catch (error) {
      alert('서버 연결 실패!');
    } 
  };


  
  return (
    <Page18Root>
      {timetablelist.map(item => (
      <Box1 className={item[0]} style={{'top':item[6][0][1],'height':item[6][0][2], 'font-size':item[6][0][0]}}>{item[1]}<br/>{item[2]}<CollapseItemIcon1 alt="" src="/시간표collapse-item1.svg" onClick={()=>deletelecture(item)}/></Box1>))}
      {timetablelist.map(item => (
      <Box2 className={item[0]} style={{'top':item[6][1][1],'height':item[6][1][2], 'font-size':item[6][1][0]}}>{item[1]}<br/>{item[2]}<CollapseItemIcon1 alt="" src="/시간표collapse-item1.svg" onClick={()=>deletelecture(item)}/></Box2>))}
      {timetablelist.map(item => (
      <Box3 className={item[0]} style={{'top':item[6][2][1],'height':item[6][2][2], 'font-size':item[6][2][0]}}>{item[1]}<br/>{item[2]}<CollapseItemIcon1 alt="" src="/시간표collapse-item1.svg" onClick={()=>deletelecture(item)}/></Box3>))}
      {timetablelist.map(item => (
      <Box4 className={item[0]} style={{'top':item[6][3][1],'height':item[6][3][2], 'font-size':item[6][3][0]}}>{item[1]}<br/>{item[2]}<CollapseItemIcon1 alt="" src="/시간표collapse-item1.svg" onClick={()=>deletelecture(item)}/></Box4>))}
      {timetablelist.map(item => (
      <Box5 className={item[0]} style={{'top':item[6][4][1],'height':item[6][4][2], 'font-size':item[6][4][0]}}>{item[1]}<br/>{item[2]}<CollapseItemIcon1 alt="" src="/시간표collapse-item1.svg" onClick={()=>deletelecture(item)}/></Box5>))}
      
      
      <SKKUBar1 />
      <SKKUBar2 />
      <SKKUBar3 />
      <SKKUBar4 />
      {graduatelist.map(item=>(<SKKUBar1_1 style={{"height":item[13][0]/item[13][1]*235}} />))}
      {graduatelist.map(item=>(<SKKUBar2_1 style={{"height":item[12][0]/item[12][1]*235}} />))}
      {graduatelist.map(item=>(<SKKUBar3_1 style={{"height":item[11][0]/item[11][1]*235}} />))}
      {abeeklist.map(item=>(<SKKUBar4_1 style={{"height":(item[0][0]+item[1][0]+item[2][0]+item[3][0]+item[4][0]+item[5][0])/(item[0][1]+item[1][1]+item[2][1]+item[3][1]+item[4][1]+item[5][1])*235}} />))}

      <시간표GlobalStyles />
      <Page18Child />
      <HiconOutlineActivity1 alt="" src="/시간표hicon--outline--activity-1.svg" onClick={navigate2Graduate}/>
      <HiconOutlineMessage18 alt="" src="/시간표hicon--outline--message-18.svg" onClick={navigate2Qna}/>
      <Iconlybulkcategory alt="" src="/시간표iconlybulkcategory.svg" />
      <Home>Home</Home>
      <Div3>시간표</Div3>
      <Page18Item />
      <Page18Inner />
      <Scrollpage>
        {memolist.map(item => (
          <Faq>
            <Container />
            <CollapseItemIcon alt="" src="/시간표collapse-item.svg" onClick={()=>deletememo(item)}/>
            <Div9>
              <P>{`교수명 : `+item[1] }</P>
              <P>강의 시간 : {item[4]}</P>
            </Div9>
            <Div10>{item[0]}</Div10>
            <AddIcon alt="" src="/시간표add.svg" onClick={()=>AddTimetable(item)}/>
          </Faq>
        ))}
        
      </Scrollpage>
      <FrameDiv />
      <Div1 onClick={navigate2Graduate}>{`졸업요건 `}</Div1>
      <HiconOutlineActivity3 alt="" src="/시간표hicon--outline--activity-3.svg" onClick={navigate2Abeek}/>
      <Abeek onClick={navigate2Abeek}>ABEEK요건</Abeek>
      <Smiley>SMILEY</Smiley>
      <HappyFaceIcon alt="" src="/시간표happyface.svg" />
      <Div onClick={navigate2Setting}>사용자 설정</Div>
      <Div7 onClick={navigate2Qna}>자주 묻는 질문</Div7>
      <SubtractIcon alt="" src="/시간표subtract.svg" onClick={navigate2Setting}/>
      <Page18Item />
      <Page18Inner />
      <Page18Child7 />
      <Div8>바로가기</Div8>
      <VectorParent>
        <VectorIcon alt="" src="/시간표vector.svg" onClick={navigate2Search}/>
        <Div11 type='text' value={form} onChange={handleChange} placeholder='과목명을 검색하세요'/>
      </VectorParent>
      <GroupIcon alt="" src="/시간표group-1000002345.svg" />
      <GroupDiv>
        <GroupWrapper>
          <GroupWrapper>
            <GroupChild />
            <GroupChild />
            <GroupInner />
          </GroupWrapper>
        </GroupWrapper>
      </GroupDiv>
      <Abeek2>ABEEK 이수 현황</Abeek2>
      <GroupParent>
        <GroupContainer>
          <GroupWrapper>
            <GroupWrapper>
              <GroupChild />
              <GroupChild />
              <GroupInner />
            </GroupWrapper>
          </GroupWrapper>
        </GroupContainer>
        <Div12>전공 이수 현황</Div12>
        <Parent1>
          {graduatelist.map(item=>(<Div13>{item[12][0]}</Div13>))}
          {graduatelist.map(item=>(<Div14>/기준 학점 {item[12][1]}</Div14>))}
        </Parent1>
      </GroupParent>
      <Group>
        {abeeklist.map(item=>(<Div13>{item[0][0]+item[1][0]+item[2][0]+item[3][0]+item[4][0]+item[5][0]}</Div13>))}
        {abeeklist.map(item=>(<Div14>/기준 학점 {item[0][1]+item[1][1]+item[2][1]+item[3][1]+item[4][1]+item[5][1]}</Div14>))}
      </Group>
      <Page18Inner1>
        <FrameWrapper>
          <FrameParent>
            <Parent11>
              <Div17>한눈에 보는 학점 이수 현황</Div17>
              <Iconsaxlinearsearchnormal1
                // alt=""
                // src="/시간표iconsaxlinearsearchnormal1.svg"
              />
            </Parent11>
            <Parent2>
              {graduatelist.map(item=>(<Div13>{item[13][0]}</Div13>))}
              {graduatelist.map(item=>(<Div14>/기준 학점 {item[13][1]}</Div14>))}
            </Parent2>
          </FrameParent>
        </FrameWrapper>
      </Page18Inner1>
      <GroupParent1>
        <GroupWrapper>
          <GroupWrapper>
            <GroupWrapper>
              <GroupChild />
              <GroupChild />
              <GroupInner />
            </GroupWrapper>
          </GroupWrapper>
        </GroupWrapper>
        <Parent3>
          {graduatelist.map(item=>(<Div13>{item[11][0]}</Div13>))}
          {graduatelist.map(item=>(<Div21>/기준 학점 {item[11][1]}</Div21>))}
        </Parent3>
        <Div22>교양 이수 현황</Div22>
      </GroupParent1>
      <SchedulelightWrapper>
        <Schedulelight>
          <Header>
            <HeaderCell>
              <Content>
                <Txt>Monday</Txt>
              </Content>
              <HeightControl>
                <DurationXh>
                  <Duration1h>
                    <ChangeMe />
                  </Duration1h>
                </DurationXh>
              </HeightControl>
            </HeaderCell>
            <HeaderCell>
              <Content>
                <Txt>Tuesday</Txt>
              </Content>
              <HeightControl>
                <DurationXh>
                  <Duration1h>
                    <ChangeMe />
                  </Duration1h>
                </DurationXh>
              </HeightControl>
            </HeaderCell>
            <HeaderCell>
              <Content>
                <Txt>Wednesday</Txt>
              </Content>
              <HeightControl>
                <DurationXh>
                  <Duration1h>
                    <ChangeMe />
                  </Duration1h>
                </DurationXh>
              </HeightControl>
            </HeaderCell>
            <HeaderCell>
              <Content>
                <Txt>Thursday</Txt>
              </Content>
              <HeightControl>
                <DurationXh>
                  <Duration1h>
                    <ChangeMe />
                  </Duration1h>
                </DurationXh>
              </HeightControl>
            </HeaderCell>
            <HeaderCell>
              <Content>
                <Txt>Friday</Txt>
              </Content>
              <HeightControl>
                <DurationXh>
                  <Duration1h>
                    <ChangeMe />
                  </Duration1h>
                </DurationXh>
              </HeightControl>
            </HeaderCell>
          </Header>
          <Grid>
            <FrameWrapper>
              <H>
                <Cells>
                  <Content5>
                    <Text1>09:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>09:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>10:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>10:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>11:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>11:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>12:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>12:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>13:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>13:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>14:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>14:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>15:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>15:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>16:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>16:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>17:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>17:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>18:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>18:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
              </H>
              <H>
                <Cells>
                  <Content5>
                    <Text1>19:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>19:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>20:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>20:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>21:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>21:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
              </H>
            </FrameWrapper>
            <Column>
              <Cells26>
                <Cell>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
                <Cell1>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell1>
              </Cells26>
            </Column>
            <FrameWrapper>
              <H>
                <Cells>
                  <Content5>
                    <Text1>09:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>09:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>10:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>10:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>11:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>11:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>12:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>12:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>13:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>13:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>14:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>14:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>15:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>15:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>16:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>16:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>17:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>17:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>18:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>18:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
              </H>
              <H>
                <Cells>
                  <Content5>
                    <Text1>19:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>19:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>20:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>20:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>21:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>21:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
              </H>
            </FrameWrapper>
            <Column>
              <Cells26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
              </Cells26>
            </Column>
            <FrameWrapper>
              <H>
                <Cells>
                  <Content5>
                    <Text1>09:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>09:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>10:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>10:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>11:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>11:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>12:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>12:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>13:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>13:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>14:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>14:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>15:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>15:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>16:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>16:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>17:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>17:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>18:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>18:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
              </H>
              <H>
                <Cells>
                  <Content5>
                    <Text1>19:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>19:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>20:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>20:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>21:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>21:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
              </H>
            </FrameWrapper>
            <Column>
              <Cells26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
              </Cells26>
            </Column>
            <FrameWrapper>
              <H>
                <Cells>
                  <Content5>
                    <Text1>09:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>09:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>10:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>10:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>11:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>11:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>12:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>12:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>13:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>13:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>14:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>14:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>15:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>15:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>16:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>16:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>17:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>17:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>18:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>18:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
              </H>
              <H>
                <Cells>
                  <Content5>
                    <Text1>19:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>19:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>20:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>20:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>21:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>21:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
              </H>
            </FrameWrapper>
            <Column>
              <Cells26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
              </Cells26>
            </Column>
            <FrameWrapper>
              <H>
                <Cells>
                  <Content5>
                    <Text1>09:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>09:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>10:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>10:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>11:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>11:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>12:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>12:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>13:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>13:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>14:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>14:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>15:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>15:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>16:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>16:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>17:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>17:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>18:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>18:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
              </H>
              <H>
                <Cells>
                  <Content5>
                    <Text1>19:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>19:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>20:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>20:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>21:00</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
                <Cells>
                  <Content5>
                    <Text1>21:30</Text1>
                  </Content5>
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cells>
              </H>
            </FrameWrapper>
            <Column>
              <Cells26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
                <Cell26>
                  <Content31 />
                  <DurationXh5>
                    <Duration1h>
                      <ChangeMe />
                    </Duration1h>
                  </DurationXh5>
                </Cell26>
              </Cells26>
            </Column>
          </Grid>
        </Schedulelight>
      </SchedulelightWrapper>
    </Page18Root>
  );
};

export default 시간표Page;
