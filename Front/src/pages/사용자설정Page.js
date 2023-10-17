import styled from "styled-components";
import 사용자설정GlobalStyles from "../사용자설정global";
import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const HiconOutlineGroup2 = styled.div`
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 26.61%;
  right: 96.25%;
  bottom: 71.18%;
  left: 2.22%;
  background-color: var(--neutral-colors-white);
  overflow: hidden;
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
const Div = styled.div`
  position: absolute;
  height: 4.02%;
  width: 10.63%;
  top: 4.32%;
  left: 19.72%;
  font-size: 32px;
  font-weight: 600;
  color: var(--color-gray-200);
  display: inline-block;
`;
const Div1 = styled.div`
  position: absolute;
  height: 2.01%;
  width: 5.35%;
  top: 91.16%;
  left: 4.58%;
  font-weight: 500;
  color: var(--color-slateblue);
  display: inline-block;
`;
const HappyFaceIcon = styled.img`
  position: relative;
  width: 38px;
  height: 35px;
`;
const Smiley = styled.div`
  position: relative;
  font-weight: 600;
  display: inline-block;
  width: 79px;
  height: 28.79px;
  flex-shrink: 0;
`;
const HappyFaceParent = styled.div`
  position: absolute;
  top: 50px;
  left: 43px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  font-size: 22px;
  color: var(--color-gray-200);
`;
const SubtractIcon = styled.img`
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
  height: 1025px;
`;
const FrameChild = styled.div`
  position: relative;
  border-radius: var(--br-xl) 0px var(--br-xl) 0px;
  background-color: var(--color-ghostwhite);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 982px;
  height: 1104px;
`;
const FrameItem = styled.div`
  position: absolute;
  border-radius: var(--br-3xs);
  background-color: var(--neutral-colors-white);
  width: 100px;
  height: 30px;
  top: 3.1%;
  right:20%;
`;

const Div11 = styled.div`
  position: relative;
  font-weight: 550;
  font-size: 14px;
  display: inline-block;
  width: 110px;
  height: 25.7px;
  top:3px;
  left:7px;
  flex-shrink: 0;
`;

const RectangleParent = styled.div`
  position: absolute;
  top: -15px;
  left: 1078px;
  width: 864px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs) var(--padding-3xs) 76px;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
`;
const PageItem = styled.div`
  position: absolute;
  top: 133px;
  left: 553px;
  border-radius: var(--br-3xs);
  background-color: var(--color-lavender);
  width: 100px;
  height: 30px;
`;
const PageInner = styled.div`
  position: absolute;
  top: 367px;
  left: 121px;
  width: 100px;
  height: 100px;
  overflow: hidden;
`;
const Div2 = styled.div`
  position: absolute;
  height: 2.51%;
  width: 4.1%;
  top: 14.96%;
  left: 21.11%;
  font-size: var(--font-size-xl);
  letter-spacing: -0.01em;
  font-weight: 600;
  color: var(--color-black);
  display: inline-block;
`;
const UploadIcon = styled.img`
  position: absolute;
  top: calc(50% + 175px);
  left: calc(50% - 417px);
  width: 34px;
  height: 29px;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: var(--br-3xs);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 521px;
  height: 121px;
`;
const UploadIcon1 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;
const UploadWrapper = styled.button`
  position: absolute;
  top: 47px;
  left: 442px;
  border-radius: var(--br-3xs);
  background-color: var(--color-ghostwhite);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 12px 13px;
  align-items: flex-start;
  justify-content: flex-start;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 615px;
  left: 263px;
  width: 531px;
  height: 141px;
`;
const Div33 = styled.input`
  position: absolute;
  top: 20px;
  left: -150px;
 
  font-size: 18px;
  font-weight: 600;
`;

const Div3 = styled.div`
  position: absolute;
  top: -30px;
  left: -150px;
  font-size: 24px;
  font-weight: 600;
  width: 200px;
  height: 30px;
`;


const Wrapper = styled.div`
  position: absolute;
  top: 671px;
  left: 448px;
  width: 136px;
  height: 25px;
  font-size: var(--font-size-xl);
`;
const Div4 = styled.div`
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 600;
  display: inline-block;
  width: 190.79px;
  height: 30.73px;
  flex-shrink: 0;
`;
const RectangleDiv = styled.div`
  position: relative;
  border-radius: var(--br-3xs);
  background-color: var(--color-ghostwhite);
  width: 588px;
  height: 94px;
`;
const Parent1 = styled.div`
  position: absolute;
  top: 0px;
  left: -0.5px;
  width: 690px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-17xl) var(--padding-3xs) var(--padding-3xs) 244px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13px;
`;
const OvalIcon = styled.img`
  position: relative;
  width: 21px;
  height: 21px;
  mix-blend-mode: normal;
  z-index: 0;
`;
const Path3Icon = styled.img`
  position: absolute;
  margin: 0 !important;
  height: 34.2%;
  width: 45.83%;
  top: 35.42%;
  right: 27.08%;
  bottom: 30.39%;
  left: 27.08%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  mix-blend-mode: normal;
  z-index: 1;
`;
const CircleOk = styled.button`
  position: absolute;
  top: 11px;
  left: 631.5px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-11xs);
  align-items: flex-start;
  justify-content: flex-end;
  gap: var(--gap-3xs);
`;
const FrameGroup = styled.div`
  position: relative;
  width: 689px;
  height: 148px;
  z-index: 0;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-plus-jakarta-sans);
`;
const FrameChild1 = styled.div`
  position: relative;
  border-radius: var(--br-3xs);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 701px;
  height: 440px;
  z-index: 1;
  margin-top: -44px;
`;
const LineRoundedsearchIcon = styled.img`
  position: relative;
  width: 18px;
  height: 18px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const ButtonText = styled.b`
  position: relative;
  line-height: 18px;
`;
const MasterPrimaryButton = styled.button`
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 108px);
  left: calc(50% - 311px);
  border-radius: var(--br-21xl);
  box-sizing: border-box;
  width: 299px;
  height: 76px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xl) var(--padding-17xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  z-index: 2;
  border: 1px solid var(--color-thistle);
  &.select{
    background-color: var(--color-lavender);
  }
  &.unselect{
    background-color: var(--neutral-colors-white);
  }
`;
const MasterPrimaryButton1 = styled.button`
  margin: 0 !important;
  position: absolute;
  top: calc(50% + 6px);
  left: calc(50% - 311px);
  border-radius: var(--br-21xl);
  box-sizing: border-box;
  width: 299px;
  height: 76px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xl) var(--padding-17xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  z-index: 3;
  border: 1px solid var(--color-thistle);
  &.select{
    background-color: var(--color-lavender);
  }
  &.unselect{
    background-color: var(--neutral-colors-white);
  }
`;
const MasterPrimaryButton2 = styled.button`
  margin: 0 !important;
  position: absolute;
  top: calc(50% + 121px);
  left: calc(50% - 311px);
  border-radius: var(--br-21xl);
  box-sizing: border-box;
  width: 299px;
  height: 76px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xl) var(--padding-17xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  z-index: 4;
  border: 1px solid var(--color-thistle);
  &.select{
    background-color: var(--color-lavender);
  }
  &.unselect{
    background-color: var(--neutral-colors-white);
  }
`;
const MasterPrimaryButton3 = styled.button`
  margin: 0 !important;
  position: absolute;
  top: calc(50% + 121px);
  left: calc(50% + 5px);
  border-radius: var(--br-21xl);
  box-sizing: border-box;
  width: 299px;
  height: 76px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xl) var(--padding-17xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  z-index: 5;
  border: 1px solid var(--color-thistle);
  &.select{
    background-color: var(--color-lavender);
  }
  &.unselect{
    background-color: var(--neutral-colors-white);
  }
`;
const MasterPrimaryButton4 = styled.button`
  margin: 0 !important;
  position: absolute;
  top: calc(50% + 6px);
  left: calc(50% - 0px);
  border-radius: var(--br-21xl);
  box-sizing: border-box;
  width: 300px;
  height: 76px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xl) var(--padding-17xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  z-index: 6;
  border: 1px solid var(--color-thistle);
  &.select{
    background-color: var(--color-lavender);
  }
  &.unselect{
    background-color: var(--neutral-colors-white);
  }
`;
const MasterPrimaryButton5 = styled.button`
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 108px);
  left: calc(50% + 5px);
  border-radius: var(--br-21xl);
  box-sizing: border-box;
  width: 299px;
  height: 76px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xl) var(--padding-17xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  z-index: 7;
  border: 1px solid var(--color-thistle);
  &.select{
    background-color: var(--color-lavender);
  }
  &.unselect{
    background-color: var(--neutral-colors-white);
  }
`;
const FrameParent = styled.div`
  position: absolute;
  top: 14px;
  left: 950px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const HiconOutlineActivity1 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 20.08%;
  right: 96.25%;
  bottom: 77.71%;
  left: 2.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Div5 = styled.div`
  cursor: pointer;
  position: absolute;
  height: 2.01%;
  width: 4.1%;
  top: 20.18%;
  left: 4.44%;
  font-weight: 500;
  display: inline-block;
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 357px;
  left: 121px;
  width: 100px;
  height: 100px;
  overflow: hidden;
`;
const HiconOutlineDocumentJus = styled.div`
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 32.23%;
  right: 96.11%;
  bottom: 65.56%;
  left: 2.36%;
  background-color: var(--neutral-colors-white);
  overflow: hidden;
`;
const HiconOutlineActivity3 = styled.img`
  cursor: pointer;
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 26%;
  right: 96.25%;
  bottom: 71.79%;
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
  top: 26.2%;
  left: 4.24%;
  font-weight: 500;
  display: inline-block;
`;
const HiconOutlineActivity5 = styled.img`
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 32.03%;
  right: 96.11%;
  bottom: 65.76%;
  left: 2.36%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Div6 = styled.div`
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 600;
  font-size:18px;
  // display: inline-block;
  width: 113px;
  height: 0px;
  flex-shrink: 0;
`;

const CircleOk1 = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-11xs);
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  gap: var(--gap-3xs);
`;

const GroupChild = styled.img`
  position: absolute;
  height: 92.22%;
  width: 19.47%;
  top: 7.78%;
  right: 80.53%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const C = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
  font-weight: 500;
  display: inline-block;
`;

const CWrapper = styled.div`
  position: absolute;
  height: 75.45%;
  width: 71.68%;
  top: 0%;
  right: 0%;
  bottom: 24.55%;
  left: 33%;
`;

const DWrapper = styled.div`
  position: absolute;
  height: 75.45%;
  width: 71.68%;
  top: 0%;
  right: 0%;
  bottom: 24.55%;
  left: 33%;
`;

const GroupContainer = styled.div`
  position: absolute;
  top: 15%;
  width: 116px;
  height: 23.19px;
`;

const GroupContainer1 = styled.div`
  position: absolute;
  top: 35%;
  width: 116px;
  height: 23.19px;
`;

const GroupContainer2 = styled.div`
  position: absolute;
  top: 55%;
  width: 116px;
  height: 23.19px;
`;

const GroupContainer3 = styled.div`
  position: absolute;
  top: 75%;
  width: 116px;
  height: 23.19px;
`;

const GroupContainer4 = styled.div`
  position: absolute;
  top: 95%;
  width: 116px;
  height: 23.19px;
`;


const GroupInner = styled.img`
  position: absolute;
  height: 97.3%;
  width: 19.44%;
  top: 2.7%;
  right: 80.56%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const D = styled.div`
  position: absolute;
  height: 26.09%;
  width: 100%;
  top: 0%;
  left: 0%;
  font-weight: 500;
  display: inline-block;
`;
const D1 = styled.div`
  position: absolute;
  height: 26.09%;
  width: 100%;
  top: 0%;
  left: 0%;
  font-weight: 500;
  display: inline-block;
`;
const DParent = styled.div`
  position: absolute;
  height: 93.24%;
  width: 71.59%;
  top: 0%;
  right: 0%;
  bottom: 6.76%;
  left: 28.41%;
`;
const GroupParent1 = styled.div`
  position: relative;
  width: 116.15px;
  height: 74px;
`;
const GroupChild1 = styled.input`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-lavender);
  width: 22px;
  height: 22px;
`;
const CombinedShapeIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 2px;
  left: 0px;
  width: 22px;
  height: 22px;
`;
const F = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  font-weight: 500;
`;
const FWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 26.09%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 73.91%;
`;
const GroupParent2 = styled.div`
  position: relative;
  width: 46px;
  height: 25px;
`;
const GroupParent = styled.div`
  position: relative;
  top : 0%;
  left : 0%;
  width: 200px;
  height: 300px;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
  // align-items: flex-start;
  gap: 0px;
`;
const Group = styled.div`
  position: absolute;
  top: -30px;
  left: 240px;
  border-radius: var(--br-3xs);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 383px;
  height: 413px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: var(--padding-16xl) 26px var(--padding-16xl) 48px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px;
`;
const PageInner1 = styled.div`
  position: absolute;
  top: 640px;
  left: 1175px;
  width: 240px;
  height: 427px;
  font-size: var(--font-size-xl);
  color: var(--color-black);
`;
const EllipseIcon = styled.img`
  position: relative;
  border-radius: 50%;
  width: 143px;
  height: 138px;
  object-fit: cover;
`;
const EllipseWrapper = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 521px;
  height: 476px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: var(--padding-86xl) 88px var(--padding-86xl) 191px;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;
const EllipseDiv = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: #a85cf9;
  width: 15px;
  height: 15px;
`;
const Span = styled.span`
  font-size: var(--font-size-base);
`;
const Div7 = styled.div`
  position: relative;
  font-weight: 550;
  font-size: 18px;
  display: inline-block;
  width: 110px;
  height: 25.7px;
  flex-shrink: 0;
`;
const EllipseParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const FrameWrapper = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 390px;
  left: 41px;
  width: 134px;
  height: 25.7px;
  z-index: 1;
`;
const FrameChild2 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: #4b7be5;
  width: 15px;
  height: 15px;
`;
const Taelim1207 = styled.div`
  position: relative;
  font-weight: 550;
  display: inline-block;
  width: 105px;
  height: 25.7px;
  font-size: 18px;
  flex-shrink: 0;
`;
const FrameWrapper1 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 314px;
  left: 41px;
  width: 129px;
  height: 25.7px;
  z-index: 2;
`;
const FrameChild3 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--color-slateblue);
  width: 15px;
  height: 15px;
`;
const Div8 = styled.div`
  position: relative;
  font-weight: 550;
  font-size: 18px;
`;
const FrameWrapper2 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 352px;
  left: 41px;
  width: 172px;
  height: 25px;
  z-index: 3;
`;
const Div9 = styled.input`
  position: relative;
  font-weight: 550;
  font-size: 18px;
  display: inline-block;
  width: 50px;
  height: 25.7px;
  flex-shrink: 0;
`;

const Div99 = styled.div`
  position: relative;
  font-weight: 550;
  font-size: 18px;
  display: inline-block;
  width: 50px;
  height: 25.7px;
  flex-shrink: 0;
`;

const EllipseParent1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const FrameWrapper3 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 425px;
  left: 40px;
  width: 75px;
  height: 25.7px;
  z-index: 4;
`;
const CircleOk2 = styled.button`
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 218px);
  left: calc(50% + 216.5px);
  display: flex;
  flex-direction: row;
  padding: var(--padding-11xs);
  align-items: flex-start;
  justify-content: flex-end;
  gap: var(--gap-3xs);
  z-index: 5;
`;
const FrameContainer = styled.div`
  position: absolute;
  top: 119px;
  left: 273px;
  width: 521px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  font-size: var(--font-size-xl);
`;
const Div10 = styled.div`
  cursor : pointer;
  position: absolute;
  height: 2.01%;
  width: 6.53%;
  top: 84.84%;
  left: 4.58%;
  font-weight: 500;
  display: inline-block;
`;
const PageChild1 = styled.div`
  position: absolute;
  top: 178px;
  left: 1343px;
  width: 100px;
  height: 100px;
  overflow: hidden;
`;
const PageRoot = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: var(--neutral-colors-white);
  width: 100%;
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
  font-family: var(--font-plus-jakarta-sans);
`;

const api = axios.create({
  baseURL: 'http://localhost:8000'  // 백엔드 서버의 주소와 포트를 baseURL로 설정
});

const 사용자설정Page = () => {
  const userstudentid_location = useLocation();
  const user_student_id = userstudentid_location.state.student_id;

  const navigate = useNavigate();
  const [form, setForm] = useState({ user_name: "", major: "", student_id:"", level:"" });
  const [check, setCheck] = useState({ cp:false, c:false, dp:false, d:false, f:true });
  const [user_retry, setUserretry] = useState("F");
  const checkcpChange = () => {
    setCheck({cp:true, c:false, dp:false, d:false, f:false});
    setUserretry("C+");
  }
  const checkcChange = () => {
    setCheck({cp:false, c:true, dp:false, d:false, f:false});
    setUserretry("C");
  }
  const checkdpChange = () => {
    setCheck({cp:false, c:false, dp:true, d:false, f:false});
    setUserretry("D+");
  }
  const checkdChange = () => {
    setCheck({cp:false, c:false, dp:false, d:true, f:false});
    setUserretry("D");
  }
  const checkfChange = () => {
    setCheck({cp:false, c:false, dp:false, d:false, f:true});
    setUserretry("F");
  }

  const [usertype, setUsertype] = useState({ type1:false, type2:false, type3:true, type4:false, type5:false, type6: false });
  const [intusertype, setIntUsertype] = useState(3);
  const type1Change = () => {
    setUsertype({type1:true, type2:false, type3:false, type4:false, type5:false, type6: false});
    setIntUsertype(1);
  }
  const type2Change = () => {
    setUsertype({type1:false, type2:true, type3:false, type4:false, type5:false, type6: false})
    setIntUsertype(2);
  }
  const type3Change = () => {
    setUsertype({type1:false, type2:false, type3:true, type4:false, type5:false, type6: false})
    setIntUsertype(3);
  }
  const type4Change = () => {
    setUsertype({type1:false, type2:false, type3:false, type4:true, type5:false, type6: false})
    setIntUsertype(4);
  }
  const type5Change = () => {
    setUsertype({type1:false, type2:false, type3:false, type4:false, type5:true, type6: false})
    setIntUsertype(5);
  }
  const type6Change = () => {
    setUsertype({type1:false, type2:false, type3:false, type4:false, type5:false, type6: true})
    setIntUsertype(6);
  }

  const Showuserinfo = async(e) => {
   
    try {
      const response = await api.post('/api/showuserinfo/', {
        student_id : user_student_id,
      });
      setForm({user_name:response.data.message[0], major:response.data.message[1],student_id:response.data.message[2],level:response.data.message[3]})
      
    } catch (error) {
      alert('사용자 정보 로드 실패!');
    } 
  };
  useEffect(() => {
   Showuserinfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });}
  
    const changeLevel = async(e) => {
   
      try {
        const response = await api.post('/api/updatelevel/', {
          student_id : user_student_id,
          level : form.level
        });
        alert(response.data.message);
        
      } catch (error) {
        alert('사용자 학년 업데이트 실패!');
      } 
    };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (e) => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      try {
        const response = await api.post('/api/pdf2df/', formData);
        alert(response.data.message);
      }
      catch (error){
        alert("사용자 이수 과목 업로드 실패!");
      }
    }
    else{
      alert("이수과목 pdf 파일을 선택해주세요.");
    }
  }

  const submitChange = async (e) => {
    
    try {
      const response1 = await api.post('/api/updatetype/', {
        student_id : user_student_id,
        usertype : intusertype
      });
      alert(response1.data.message);
    }
    catch (error){
      alert("사용자 취향 갱신 실패!");
    }
    try {
      const response2 = await api.post('/api/updateretry/', {
        student_id : user_student_id,
        retry_standard : user_retry
      });
      alert(response2.data.message);
    }
    catch (error){
      alert("사용자 재수강 기준 갱신 실패!");
    }
    
    
  }

  const navigate2Qna = () => {
    navigate("/Qna", {state : {student_id : user_student_id}});
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
      <사용자설정GlobalStyles />
      <HiconOutlineGroup2 />
      <HiconOutlineMessage18 alt="" src="/사용자설정hicon--outline--message-18.svg" onClick={navigate2Qna}/>
      <Iconlybulkcategory alt="" src="/사용자설정iconlybulkcategory.svg" onClick={navigate2Main}/>
      <Home onClick={navigate2Main}>Home</Home>
      <Div>사용자 설정</Div>
      <Div1>사용자 설정</Div1>
      <HappyFaceParent>
        <HappyFaceIcon alt="" src="/사용자설정happyface.svg" />
        <Smiley>SMILEY</Smiley>
      </HappyFaceParent>
      <SubtractIcon alt="" src="/사용자설정subtract.svg" />
      <PageChild />
      <RectangleParent>
        <FrameChild />
        <FrameItem>
          <Div11>저장하기</Div11>
        </FrameItem>
      </RectangleParent>
      <PageItem />
      <PageInner />
      <Div2>내 정보</Div2>
      {/* <UploadIcon alt="" src="/사용자설정upload.svg" /> */}
      <RectangleGroup>
        <FrameInner />
        <UploadWrapper type="submit" onClick={handleUpload}>
          <UploadIcon1 alt="" src="/사용자설정upload1.svg" />
        </UploadWrapper>
      </RectangleGroup>
      <Wrapper>
        <Div3>이수 과목 업로드</Div3>
        <Div33  type="file" accept=".pdf" onChange={handleFileChange}/>
      </Wrapper>
      <FrameParent>
        <FrameGroup>
          <Parent1>
            <Div4>수강 신청 유형</Div4>
            <RectangleDiv />
          </Parent1>
          <CircleOk onClick = {submitChange}>
            <OvalIcon alt="" src="/사용자설정oval.svg" />
            <Path3Icon alt="" src="/사용자설정path-3.svg" />
          </CircleOk>
        </FrameGroup>
        <FrameChild1 />
        <MasterPrimaryButton
          onClick = {type1Change}
          className={(usertype.type1)===true? "select":"unselect"}
        >
          <LineRoundedsearchIcon alt="" src="/사용자설정line-roundedsearch.svg" />
          <ButtonText>{`팀플 비선호 / 학점 상관 없음 `}</ButtonText>
          <LineRoundedsearchIcon alt="" src="/사용자설정line-roundedsearch.svg" />
        </MasterPrimaryButton>
        <MasterPrimaryButton1
          onClick = {type3Change}
          className={(usertype.type3)===true? "select":"unselect"}
        >
          <LineRoundedsearchIcon alt="" src="/사용자설정ine-roundedsearch.svg" />
          <ButtonText>학점 중요 / 팀플 상관 없음</ButtonText>
          <LineRoundedsearchIcon alt="" src="/사용자설정line-roundedsearch.svg" />
        </MasterPrimaryButton1>
        <MasterPrimaryButton2
          onClick = {type5Change}
          className={(usertype.type5)===true? "select":"unselect"}
        >
          <LineRoundedsearchIcon alt="" src="/사용자설정line-roundedsearch.svg" />
          <ButtonText>과제 비선호/ 학점 상관 없음</ButtonText>
          <LineRoundedsearchIcon alt="" src="/사용자설정line-roundedsearch.svg" />
        </MasterPrimaryButton2>
        <MasterPrimaryButton3
          onClick = {type6Change}
          className={(usertype.type6)===true? "select":"unselect"}
        >
          <LineRoundedsearchIcon alt="" src="/사용자설정line-roundedsearch.svg" />
          <ButtonText>과제 비선호 / 팀플 상관 없음</ButtonText>
          <LineRoundedsearchIcon alt="" src="/사용자설정line-roundedsearch.svg" />
        </MasterPrimaryButton3>
        <MasterPrimaryButton4
          onClick = {type4Change}
          className={(usertype.type4)===true? "select":"unselect"}
        >
          <LineRoundedsearchIcon alt="" src="/사용자설정line-roundedsearch.svg" />
          <ButtonText>학점 중요 / 과제 상관 없음</ButtonText>
          <LineRoundedsearchIcon alt="" src="/사용자설정line-roundedsearch.svg" />
        </MasterPrimaryButton4>
        <MasterPrimaryButton5
          onClick = {type2Change}
          className={(usertype.type2)===true? "select":"unselect"}
        >
          <LineRoundedsearchIcon alt="" src="/사용자설정line-roundedsearch.svg" />
          <ButtonText>팀플 비선호 / 과제 상관 없음</ButtonText>
          <LineRoundedsearchIcon alt="" src="/사용자설정line-roundedsearch.svg" />
        </MasterPrimaryButton5>
      </FrameParent>
      <HiconOutlineActivity1 alt="" src="/사용자설정hicon--outline--activity-1.svg" onClick={navigate2Graduate}/>
      <Div5 onClick={navigate2Graduate}>{`졸업요건 `}</Div5>
      <FrameDiv />
      <HiconOutlineDocumentJus />
      <HiconOutlineDocumentJus />
      <HiconOutlineActivity3 alt="" src="/사용자설정hicon--outline--activity-3.svg" onClick={navigate2Abeek}/>
      <Abeek onClick={navigate2Abeek}>ABEEK요건</Abeek>
      
      <PageInner1>
        <Group>
          <Div6>재수강 기준값</Div6>
          {/* <CircleOk1>
            <OvalIcon alt="" src="/사용자설정oval.svg" />
            <Path3Icon alt="" src="/사용자설정path-3.svg" />
          </CircleOk1> */}
          <GroupParent>
            <GroupContainer>
            <GroupChild1 
                type='checkbox'
                checked={check.cp}
                onChange={checkcpChange}
              />
              <CWrapper>
                <C>C+</C>
              </CWrapper>
            </GroupContainer>
            <GroupContainer1>
            <GroupChild1 
                type='checkbox'
                checked={check.c}
                onChange={checkcChange}
              />
              <CWrapper>
                <C>C</C>
              </CWrapper>
            </GroupContainer1>
          
            <GroupContainer2>
              <GroupChild1 
                type='checkbox'
                checked={check.dp}
                onChange={checkdpChange}
              />
              <DWrapper>
                <D>D+</D>
              </DWrapper>
            </GroupContainer2>
            <GroupContainer3>
              <GroupChild1 
                type='checkbox'
                checked={check.d}
                onChange={checkdChange}
              />
              <DWrapper>
                <D1>D</D1>
              </DWrapper>
            </GroupContainer3>
            <GroupContainer4>
              <GroupChild1 
                type='checkbox'
                checked={check.f}
                onChange={checkfChange}
              />
              <DWrapper>
                  <D1>F</D1>
              </DWrapper>
            </GroupContainer4>
            
            
          </GroupParent>
          
        </Group>
      </PageInner1>
      <FrameContainer>
        <EllipseWrapper>
          <EllipseIcon alt="" src="/사용자설정ellipse-17@2x.png" />
        </EllipseWrapper>
        <FrameWrapper>
          <EllipseParent>
            <EllipseDiv />
            <Div7>
              <span>{form.student_id}</span>
              <Span>{` `}</Span>
            </Div7>
          </EllipseParent>
        </FrameWrapper>
        <FrameWrapper1>
          <EllipseParent>
            <FrameChild2 />
            <Taelim1207>{form.user_name}</Taelim1207>
          </EllipseParent>
        </FrameWrapper1>
        <FrameWrapper2>
          <EllipseParent>
            <FrameChild3 />
            <Div8>{form.major}</Div8>
          </EllipseParent>
        </FrameWrapper2>
        <FrameWrapper3>
          <EllipseParent1>
            <FrameChild3 />
            {/* <Div9>{form.level}학년</Div9> */}
            <Div9
              type="text"
              id="level"
              name="level"
              value={form.level}
              onChange={handleChange}
              placeholder="학년"
            />
            <Div99>학년</Div99>
          </EllipseParent1>
        </FrameWrapper3>
        <CircleOk2 onClick={changeLevel}>
          <OvalIcon alt="" src="/사용자설정oval.svg" />
          <Path3Icon alt="" src="/사용자설정path-3.svg" />
        </CircleOk2>
      </FrameContainer>
      <Div10 onClick={navigate2Qna}>자주 묻는 질문</Div10>
      <PageChild1 />
    </PageRoot>
  );
};

export default 사용자설정Page;
