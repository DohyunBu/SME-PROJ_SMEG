import styled from "styled-components";
import 추천GlobalStyles from "../추천global";
import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const HiconOutlineActivity1 = styled.div`
  position: absolute;
  height: 2.21%;
  width: 1.53%;
  top: 20.28%;
  right: 96.25%;
  bottom: 77.51%;
  left: 2.22%;
  background-color: var(--neutral-colors-white);
  overflow: hidden;
`;
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
  cursor : pointer;
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
  color: var(--color-gray-100);
  display: inline-block;
`;
const Smiley = styled.div`
  position: absolute;
  height: 2.81%;
  width: 5.49%;
  top: 5.12%;
  left: 5.32%;
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
  color: var(--color-gray-100);
  display: inline-block;
`;
const HappyFaceIcon = styled.img`
  position: absolute;
  top : 52px;
  left : 40px;
  width: 38px;
  height: 35px;
`;
const SubtractIcon = styled.img`
  cursor: pointer;
  position: absolute;
  width: 25.5px;
  height: 21.02px;
  top: 91.2%;
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
  top: 92px;
  left: 244px;
  border-radius: var(--br-xl) 0px var(--br-xl) 0px;
  background-color: #f1eef6;
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 1676px;
  height: 988px;
`;

const Scrollpage = styled.div`
  position: absolute;
  top: 92px;
  left: 244px;
  border-radius: var(--br-xl) 0px var(--br-xl) 0px;
  background-color: #f1eef6;
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 1640px;
  height: 988px;
  overflow-y: scroll;
`;

const PageInner = styled.div`
  position: relative;
  left : 20px;
  padding : 10px;
  margin-top : 20px;

  border-radius: var(--br-xl);
  background-color: var(--neutral-colors-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 1580px;
  height: 162px;
`;
const LineRoundedsearchIcon = styled.img`
  position: relative;
  width: 1px;
  height: 1px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const ButtonText = styled.b`
  position: relative;
  line-height: 18px;
  display: inline-block;
  width: 50px;
  flex-shrink: 0;
`;
const Frame = styled.div`
  position: absolute;
  top: calc(70.6%);
  left: calc(96%);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  display: flex;
  flex-direction: row;
  //padding: var(--padding-5xl) var(--padding-17xl);
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const Frame1 = styled.div`
  position: absolute;
  top: calc(70.6%);
  left: calc(89%);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;

const PageChild1 = styled.img`
  position: absolute;
  top: 90px;
  left: 50px;
  width: 35px;
  height: 35px;
`;
const PageChild2 = styled.img`
  position: absolute;
  top: 90px;
  left: 90px;
  width: 35px;
  height: 35px;
`;
const PageChild3 = styled.img`
  position: absolute;
  top: 90px;
  left: 130px;
  width: 35px;
  height: 35px;
`;
const PageChild4 = styled.img`
  position: absolute;
  top: 90px;
  left: 170px;
  width: 35px;
  height: 35px;
`;
const PageChild5 = styled.img`
  position: absolute;
  top: 90px;
  left: 210px;
  width: 35px;
  height: 35px;
`;

const Div1 = styled.div`
  position: absolute;
  top: 100px;
  left: 350px;
  font-weight: 500;
  display: inline-block;
  width: 950px;
  height: 25px;
`;

const Div2 = styled.div`
  position: absolute;
  top: 40px;
  left: 50px;
  font-weight: 500;
  display: inline-block;
  width: 206px;
  height: 41px;
`;
const Abeek = styled.div`
  position: absolute;
  top: 40px;
  left: 1100px;
  font-weight: 500;
  display: inline-block;
  width: 193px;
  height: 41px;
`;
const Esm307544 = styled.div`
  position: absolute;
  top: 762px;
  left: 1138px;
  font-weight: 500;
  display: inline-block;
  width: 130px;
  height: 41px;
`;
const Div3 = styled.div`
  position: absolute;
  top: 40px;
  left: 650px;
  font-weight: 500;
  display: inline-block;
  width: 450px;
  height: 41px;
`;
const Div4 = styled.div`
  position: absolute;
  top: 40px;
  left: 350px;
  font-weight: 500;
  display: inline-block;
  width: 128px;
  height: 41px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 120px;
  left: 267px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-colors-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 1621px;
  height: 162px;
`;
const Frame2 = styled.div`
  position: absolute;
  top: calc(50% - 300px);
  left: calc(50% + 734px);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 57px;
  height: 28px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;

const PageChild6 = styled.img`
  position: absolute;
  top: 220px;
  left: 405.86px;
  width: 35px;
  height: 35px;
`;
const PageChild7 = styled.img`
  position: absolute;
  top: 220px;
  left: 370.86px;
  width: 35px;
  height: 35px;
`;
const PageChild8 = styled.img`
  position: absolute;
  top: 220px;
  left: 335.86px;
  width: 35px;
  height: 35px;
`;
const Frame3 = styled.div`
  cursor : pointer;
  position: absolute;
  top: calc(70.6%);
  left: calc(85.3%);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 57px;
  height: 28px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const Frame4 = styled.div`
  cursor: pointer;
  position: absolute;
  top: calc(70.6%);
  left: calc(92.3%);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 57px;
  height: 28px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const Div5 = styled.div`
  position: absolute;
  top: calc(58.0%);
  left: calc(87%);
  font-size: var(--font-size-5xs);
  font-weight: 300;
  color: var(--neutral-colors-headings-black);
  display: inline-block;
  width: 160px;
  height: 13px;
`;
const Frame5 = styled.div`
  position: absolute;
  top: calc(49.6% - 296px);
  left: calc(50% + 794px);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const Frame6 = styled.div`
  position: absolute;
  top: calc(49.6% - 296px);
  left: calc(50.8% + 879px);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const Frame7 = styled.div`
  position: absolute;
  top: calc(50% - 300px);
  left: calc(50.8% + 819px);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 57px;
  height: 28px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const Div6 = styled.div`
  position: absolute;
  top: 220px;
  left: 540px;
  font-weight: 500;
  display: inline-block;
  width: 665px;
  height: 25px;
`;
const Abeek1 = styled.div`
  position: absolute;
  top: 162px;
  left: 1369px;
  font-weight: 500;
  display: inline-block;
  width: 193px;
  height: 41px;
`;
const Esm307541 = styled.div`
  position: absolute;
  top: 162px;
  left: 1138px;
  font-weight: 500;
  display: inline-block;
  width: 130px;
  height: 41px;
`;
const Div7 = styled.div`
  position: absolute;
  top: 150px;
  left: 800px;
  font-weight: 500;
  display: inline-block;
  width: 135px;
  height: 41px;
`;
const Div8 = styled.div`
  position: absolute;
  top: 150px;
  left: 600px;
  font-weight: 500;
  display: inline-block;
  width: 116px;
  height: 41px;
`;
const PageChild9 = styled.div`
  position: absolute;
  top: 320px;
  left: 267px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-colors-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 1621px;
  height: 162px;
`;
const B = styled.b`
  position: absolute;
  top: calc(40.6%);
  left: calc(88.7%);
  display: inline-block;
  color: var(--neutral-colors-headings-black);
  width: 100px;
  height: 23px;
`;
const Frame8 = styled.div`
  position: absolute;
  top: calc(49.6% - 96px);
  left: calc(50.8% + 879px);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const Frame9 = styled.div`
  position: absolute;
  top: calc(49.6% - 96px);
  left: calc(50% + 794px);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const Div9 = styled.div`
  position: absolute;
  top: 350px;
  left: 300px;
  font-weight: 500;
  display: inline-block;
  width: 272px;
  height: 41px;
`;
const MasterPrimaryButton = styled.input`
  cursor : pointer;
  position: absolute;
  top: calc(10.6%);
  left: calc(90.3%);
  border-radius: var(--br-3xs);
  background-color: var(--neutral-colors-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--neutral-colors-headings-black);
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 25px 25px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const MasterPrimaryButton1 = styled.input`
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50.3% + 799px);
  border-radius: var(--br-3xs);
  background-color: var(--neutral-colors-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--neutral-colors-headings-black);
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 25px 25px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const PageChild10 = styled.div`
  position: absolute;
  top: 520px;
  left: 267px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-colors-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 1621px;
  height: 162px;
`;
const Frame10 = styled.div`
  position: absolute;
  top: calc(49.6% + 104px);
  left: calc(50.8% + 879px);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const PageChild11 = styled.img`
  position: absolute;
  top: 620px;
  left: 440.86px;
  width: 35px;
  height: 35px;
`;
const PageChild12 = styled.img`
  position: absolute;
  top: 620px;
  left: 405.86px;
  width: 35px;
  height: 35px;
`;
const PageChild13 = styled.img`
  position: absolute;
  top: 620px;
  left: 370.86px;
  width: 35px;
  height: 35px;
`;
const PageChild14 = styled.img`
  position: absolute;
  top: 620px;
  left: 335.86px;
  width: 35px;
  height: 35px;
`;
const Div10 = styled.div`
  position: absolute;
  top: 620px;
  left: 540px;
  font-weight: 500;
  display: inline-block;
  width: 665px;
  height: 25px;
`;
const PageChild15 = styled.img`
  position: absolute;
  top: 620px;
  left: 300.86px;
  width: 35px;
  height: 35px;
`;
const Frame11 = styled.div`
  position: absolute;
  top: calc(50% + 100px);
  left: calc(50% + 734px);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 57px;
  height: 28px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const Frame12 = styled.div`
  position: absolute;
  top: calc(50% + 100px);
  left: calc(50.8% + 819px);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 57px;
  height: 28px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const Div11 = styled.div`
  position: absolute;
  top: calc(50% + 80px);
  left: calc(50% + 760px);
  font-size: var(--font-size-5xs);
  font-weight: 300;
  color: var(--neutral-colors-headings-black);
  display: inline-block;
  width: 160px;
  height: 13px;
`;
const Div12 = styled.div`
  position: absolute;
  top: 550px;
  left: 300px;
  font-weight: 500;
  display: inline-block;
  width: 206px;
  height: 41px;
`;
const Abeek2 = styled.div`
  position: absolute;
  top: 562px;
  left: 1369px;
  font-weight: 500;
  display: inline-block;
  width: 193px;
  height: 41px;
`;
const Esm307543 = styled.div`
  position: absolute;
  top: 562px;
  left: 1138px;
  font-weight: 500;
  display: inline-block;
  width: 130px;
  height: 41px;
`;
const Div13 = styled.div`
  position: absolute;
  top: 550px;
  left: 800px;
  font-weight: 500;
  display: inline-block;
  width: 135px;
  height: 41px;
`;
const Div14 = styled.div`
  position: absolute;
  top: 550px;
  left: 600px;
  font-weight: 500;
  display: inline-block;
  width: 128px;
  height: 41px;
`;
const Div15 = styled.div`
  position: absolute;
  top: 30px;
  left: 266px;
  font-size: 25px;
  letter-spacing: -0.01em;
  font-weight: 600;
  display: inline-block;
  width: 150px;
  height: 33px;
`;
const MasterPrimaryButton2 = styled.input`
  position: absolute;
  top: calc(50% - 0px);
  left: calc(50.3% + 799px);
  border-radius: var(--br-3xs);
  background-color: var(--neutral-colors-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--neutral-colors-headings-black);
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 25px 25px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  opacity: 0.97;
`;
const MasterPrimaryButton3 = styled.input`
  position: absolute;
  top: calc(50% + 200px);
  left: calc(50.3% + 799px);
  border-radius: var(--br-3xs);
  background-color: var(--neutral-colors-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--neutral-colors-headings-black);
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 25px 25px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const B1 = styled.b`
  position: absolute;
  top: calc(50.3% - 350px);
  left: calc(50.5% + 771px);
  display: inline-block;
  color: var(--neutral-colors-headings-black);
  width: 100px;
  height: 23px;
`;
const B2 = styled.b`
  position: absolute;
  top: calc(50.3% + 50px);
  left: calc(50.5% + 771px);
  display: inline-block;
  color: var(--neutral-colors-headings-black);
  width: 100px;
  height: 23px;
`;
const B3 = styled.b`
  position: absolute;
  top: calc(50.3% + 250px);
  left: calc(50.5% + 767px);
  display: inline-block;
  color: var(--neutral-colors-headings-black);
  width: 100px;
  height: 23px;
`;
const Div16 = styled.div`
  position: absolute;
  top: 150px;
  left: 300px;
  font-weight: 500;
  display: inline-block;
  width: 206px;
  height: 41px;
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
const Div17 = styled.div`
  cursor: pointer;
  position: absolute;
  height: 2.01%;
  width: 4.1%;
  top: 20.48%;
  left: 4.24%;
  color: var(--color-gray-100);
  display: inline-block;
`;
const Abeek3 = styled.div`
  cursor: pointer;
  position: absolute;
  height: 2.01%;
  width: 5.83%;
  top: 26.51%;
  left: 4.24%;
  color: var(--color-gray-100);
  display: inline-block;
`;
const HiconOutlineActivity12 = styled.img`
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
const Div18 = styled.div`
  position: absolute;
  top: 362px;
  left: 1369px;
  font-weight: 500;
  display: inline-block;
  width: 193px;
  height: 41px;
`;
const Esm307542 = styled.div`
  position: absolute;
  top: 362px;
  left: 1138px;
  font-weight: 500;
  display: inline-block;
  width: 130px;
  height: 41px;
`;
const Div19 = styled.div`
  position: absolute;
  top: 350px;
  left: 800px;
  font-weight: 500;
  display: inline-block;
  width: 362px;
  height: 41px;
`;
const Div20 = styled.div`
  position: absolute;
  top: 350px;
  left: 600px;
  font-weight: 500;
  display: inline-block;
  width: 128px;
  height: 41px;
`;
const Div21 = styled.div`
  cursor: pointer;
  position: absolute;
  height: 2.01%;
  width: 6.53%;
  top: 84.84%;
  left: 4.65%;
  font-weight: 500;
  color: var(--color-gray-100);
  display: inline-block;
`;
const Div22 = styled.div`
  position: absolute;
  top: calc(50% - 320px);
  left: calc(50% + 760px);
  font-size: var(--font-size-5xs);
  font-weight: 300;
  color: var(--neutral-colors-headings-black);
  display: inline-block;
  width: 160px;
  height: 13px;
`;
const Frame13 = styled.div`
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% + 734px);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 57px;
  height: 28px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const Frame14 = styled.div`
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50.8% + 819px);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 57px;
  height: 28px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
`;
const Div23 = styled.div`
  position: absolute;
  top: calc(50% - 120px);
  left: calc(50% + 756px);
  font-size: var(--font-size-5xs);
  font-weight: 300;
  color: var(--neutral-colors-headings-black);
  display: inline-block;
  width: 160px;
  height: 13px;
`;
const PageChild16 = styled.img`
  position: absolute;
  top: 220px;
  left: 300.86px;
  width: 35px;
  height: 35px;
`;
const PageChild17 = styled.img`
  position: absolute;
  top: 420px;
  left: 440.86px;
  width: 35px;
  height: 35px;
`;
const PageChild18 = styled.img`
  position: absolute;
  top: 420px;
  left: 405.86px;
  width: 35px;
  height: 35px;
`;
const PageChild19 = styled.img`
  position: absolute;
  top: 420px;
  left: 370.86px;
  width: 35px;
  height: 35px;
`;
const PageChild20 = styled.img`
  position: absolute;
  top: 420px;
  left: 335.86px;
  width: 35px;
  height: 35px;
`;
const Div24 = styled.div`
  position: absolute;
  top: 420px;
  left: 540px;
  font-weight: 500;
  display: inline-block;
  width: 665px;
  height: 25px;
`;
const PageChild21 = styled.img`
  position: absolute;
  top: 420px;
  left: 300.86px;
  width: 35px;
  height: 35px;
`;
const Frame15 = styled.div`
  position: absolute;
  top: calc(49.6% + 104px);
  left: calc(50% + 795px);
  border-radius: var(--br-21xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--color-thistle);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  padding:15px 15px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--neutral-colors-headings-black);
  font-family: var(--font-dm-sans);
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
  color: var(--color-black);
  font-family: var(--font-plus-jakarta-sans);
`;

const api = axios.create({
  baseURL: 'http://localhost:8000'  // 백엔드 서버의 주소와 포트를 baseURL로 설정
});



const 추천Page = () => {
  const userstudentid_location = useLocation();
  const user_student_id = userstudentid_location.state.student_id;
  const user_lect_domain = userstudentid_location.state.lect_domain;
  const user_from = userstudentid_location.state.from;
  const [recomlist, setRecomlist] = useState([]);
  const [evallist, setEvallist] = useState([]);
  const [finallist, setFinallist] = useState([]);

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
    alert("바꿈");
  }
  const keepConfirm = () => {
    alert("안바꿈.");
  }

  const Qchange = 
    useConfirm(
      "바꿀래?",
      changeConfirm,
      keepConfirm
    );

  const memoaddConfirm = () => {
    alert("메모 추가");
  }
  const memoskipConfirm = () => {
    alert("스킵");
  }

  const Qmemo = useConfirm(
      "메모에 추가할래?",
      memoaddConfirm,
      memoskipConfirm
  );

  if(user_from=='Graduate' && user_lect_domain!='전공'){
    const Showuserinfo = async(e) => {
      try {
        const response = await api.post('/api/recomgyoyang/', {
          student_id : user_student_id,
          lect_domain : user_lect_domain,
        });
        setRecomlist(response.data.message);
        var tempevallist = []
        for(var i=0; i < response.data.message.length; i++){
          try{
            const response1 = await api.post('/api/showeval/',{
              lect_name : response.data.message[i][0],
              prof_name : response.data.message[i][1]
            });
            var temp_list = tempevallist;
            temp_list.push([response1.data.message[0],response1.data.message[1]]);
            tempevallist = temp_list;
            setEvallist(temp_list);
          } catch (error) {
            alert('서버 연결 실패!');
          }
        }
        var tempfinallist=[]
        for(var i=0; i < response.data.message.length; i++){
          var temp_list1 = response.data.message[i].concat([0,0,0]).concat(tempevallist[i]);
          var temp_list2 = tempfinallist;
          temp_list2.push(temp_list1);
          tempfinallist = temp_list2;
          setFinallist(temp_list2);
        }
        
        
        
      } catch (error) {
        alert('서버 연결 실패!');
      } 
    };
    useEffect(() => {
      Showuserinfo();
     },[]);
  }else if(user_from=='Graduate'){
    const Showuserinfo = async(e) => {
      try {
        const response = await api.post('/api/recommajor/', {
          student_id : user_student_id,
          lect_domain : user_lect_domain,
        });
        setRecomlist(response.data.message);
        var tempevallist = []
        for(var i=0; i < response.data.message.length; i++){
          try{
            const response1 = await api.post('/api/showeval/',{
              lect_name : response.data.message[i][0],
              prof_name : response.data.message[i][1]
            });
            var temp_list = tempevallist;
            temp_list.push([response1.data.message[0],response1.data.message[1]]);
            tempevallist = temp_list;
            setEvallist(temp_list);
          } catch (error) {
            alert('서버 연결 실패!');
          }
        }
        
        var tempfinallist=[]
        for(var i=0; i < response.data.message.length; i++){
          var temp_list1 = response.data.message[i].concat(tempevallist[i]);
          var temp_list2 = tempfinallist;
          temp_list2.push(temp_list1);
          tempfinallist = temp_list2;
          setFinallist(temp_list2);
        }
        console.log(temp_list2);
        
      } catch (error) {
        alert('서버 연결 실패!');
      } 
    };
    useEffect(() => {
      Showuserinfo();
     },[]);
  }else{
    const Showuserinfo = async(e) => {
      try {
        const response = await api.post('/api/recomabeek/', {
          student_id : user_student_id,
          lect_domain : user_lect_domain,
        });
        setRecomlist(response.data.message);
        var tempevallist = []
        for(var i=0; i < response.data.message.length; i++){
          try{
            const response1 = await api.post('/api/showeval/',{
              lect_name : response.data.message[i][0],
              prof_name : response.data.message[i][1]
            });
            var temp_list = tempevallist;
            temp_list.push([response1.data.message[0],response1.data.message[1]]);
            tempevallist = temp_list;
            setEvallist(temp_list);
          } catch (error) {
            alert('서버 연결 실패!');
          }
        }
        
        var tempfinallist=[]
        for(var i=0; i < response.data.message.length; i++){
          var temp_list1 = response.data.message[i].concat(tempevallist[i]);
          var temp_list2 = tempfinallist;
          temp_list2.push(temp_list1);
          tempfinallist = temp_list2;
          setFinallist(temp_list2);
        }
        console.log(temp_list2);
        
      } catch (error) {
        alert('서버 연결 실패!');
      } 
    };
    useEffect(() => {
      Showuserinfo();
     },[]);

  }

  const evalhandling = async(item1, item2, item3, item4) => {
    try{
      const response2 = await api.post('/api/altereval/',{
        student_id : user_student_id,
        lect_name : item1,
        prof_name : item2,
        is_up : item3,
        is_down : item4
      });
      alert(response2.data.message);

      if(user_from=='Graduate' && user_lect_domain!='전공'){
        const response = await api.post('/api/recomgyoyang/', {
          student_id : user_student_id,
          lect_domain : user_lect_domain,
        });
        setRecomlist(response.data.message);
        var tempevallist = []
        for(var i=0; i < response.data.message.length; i++){
          try{
            const response1 = await api.post('/api/showeval/',{
              lect_name : response.data.message[i][0],
              prof_name : response.data.message[i][1]
            });
            var temp_list = tempevallist;
            temp_list.push([response1.data.message[0],response1.data.message[1]]);
            tempevallist = temp_list;
            setEvallist(temp_list);
          } catch (error) {
            alert('서버 연결 실패!');
          }
        }
        var tempfinallist=[]
        for(var i=0; i < response.data.message.length; i++){
          var temp_list1 = response.data.message[i].concat([0,0,0]).concat(tempevallist[i]);
          var temp_list2 = tempfinallist;
          temp_list2.push(temp_list1);
          tempfinallist = temp_list2;
          setFinallist(temp_list2);
        }
      }else if(user_from=='Graduate'){
        const response = await api.post('/api/recommajor/', {
          student_id : user_student_id,
          lect_domain : user_lect_domain,
        });
        setRecomlist(response.data.message);
        var tempevallist = []
        for(var i=0; i < response.data.message.length; i++){
          try{
            const response1 = await api.post('/api/showeval/',{
              lect_name : response.data.message[i][0],
              prof_name : response.data.message[i][1]
            });
            var temp_list = tempevallist;
            temp_list.push([response1.data.message[0],response1.data.message[1]]);
            tempevallist = temp_list;
            setEvallist(temp_list);
          } catch (error) {
            alert('서버 연결 실패!');
          }
        }
        var tempfinallist=[]
        for(var i=0; i < response.data.message.length; i++){
          var temp_list1 = response.data.message[i].concat(tempevallist[i]);
          var temp_list2 = tempfinallist;
          temp_list2.push(temp_list1);
          tempfinallist = temp_list2;
          setFinallist(temp_list2);
        }
      }else{
        const response = await api.post('/api/recomabeek/', {
          student_id : user_student_id,
          lect_domain : user_lect_domain,
        });
        setRecomlist(response.data.message);
        var tempevallist = []
        for(var i=0; i < response.data.message.length; i++){
          try{
            const response1 = await api.post('/api/showeval/',{
              lect_name : response.data.message[i][0],
              prof_name : response.data.message[i][1]
            });
            var temp_list = tempevallist;
            temp_list.push([response1.data.message[0],response1.data.message[1]]);
            tempevallist = temp_list;
            setEvallist(temp_list);
          } catch (error) {
            alert('서버 연결 실패!');
          }
        }
        
        var tempfinallist=[]
        for(var i=0; i < response.data.message.length; i++){
          var temp_list1 = response.data.message[i].concat(tempevallist[i]);
          var temp_list2 = tempfinallist;
          temp_list2.push(temp_list1);
          tempfinallist = temp_list2;
          setFinallist(temp_list2);
        }
      }

    } catch (error) {
      alert('서버 연결 실패!');
    }
  }
  
  

  const AddTimetable = async(item) => {
    try {
      const response10 = await api.post('/api/addtimetable/', {
        student_id : user_student_id,
        lect_name : item[0],
        prof_name : item[1],
        lect_time_numbered : item[4],
        credit : item[7],
        lect_domain : item[6],
        lect_time : item[3],
        isString : 1,
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
    } catch (error) {
      alert('서버 연결 실패!');
    } 
  };
  
  
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

  const navigate2Abeek = () => {
    navigate("/Abeek18", {state : {student_id : user_student_id}});
  }


  return (
    <PageRoot>
      <추천GlobalStyles/>
      <HiconOutlineActivity1 />
      <HiconOutlineGroup2 />
      <HiconOutlineMessage18 alt="" src="/추천hicon--outline--message-18.svg" onClick={navigate2Qna}/>
      <Iconlybulkcategory alt="" src="/추천iconlybulkcategory.svg" onClick={navigate2Main}/>
      <Home onClick={navigate2Main}>Home</Home>
      <Smiley>SMILEY</Smiley>
      <Div onClick={navigate2Setting}>사용자 설정</Div>
      <HappyFaceIcon alt="" src="/추천happyface.svg" />
      <SubtractIcon alt="" src="/추천subtract.svg"  onClick={navigate2Setting}/>
      <HiconOutlineActivity11 alt="" src="/추천hicon--outline--activity-11.svg"  onClick={navigate2Graduate}/>
      <Div17 onClick={navigate2Graduate}>{`졸업요건 `}</Div17>
      <Abeek3  onClick={navigate2Abeek}>{`ABEEK 요건 `}</Abeek3>
      <HiconOutlineActivity12 alt="" src="/추천hicon--outline--activity-12.svg"  onClick={navigate2Abeek}/>
      <Div21 onClick={navigate2Qna}>자주 묻는 질문</Div21>
      <Scrollpage>
        
        {finallist.map(item => (
          <PageInner>
            <Div5>추천 과목 정보가 도움이 되었나요?</Div5>
            <Frame3>
              <LineRoundedsearchIcon alt="" src="/추천line-roundedsearch.svg" />
              <ButtonText onClick={()=>evalhandling(item[0],item[1],1,0)}>좋아요</ButtonText>
            </Frame3>
            <Frame1>
              <LineRoundedsearchIcon alt="" src="/추천line-roundedsearch.svg" />
              <ButtonText>{item[17]}</ButtonText>
            </Frame1>
            <Frame4>
              <LineRoundedsearchIcon alt="" src="/추천line-roundedsearch.svg" />
              <ButtonText onClick={()=>evalhandling(item[0],item[1],0,1)}>싫어요</ButtonText>
            </Frame4>
            <Frame>
              <LineRoundedsearchIcon alt="" src="/추천line-roundedsearch.svg" />
              <ButtonText>{item[18]}</ButtonText>
            </Frame>
            <PageChild1 alt="" src={item[13]>=1? "/추천star-17.svg" : "/추천star-16.svg"} />
            <PageChild2 alt="" src={item[13]>=2? "/추천star-17.svg" : "/추천star-16.svg"} />
            <PageChild3 alt="" src={item[13]>=3? "/추천star-17.svg" : "/추천star-16.svg"} />
            <PageChild4 alt="" src={item[13]>=4? "/추천star-17.svg" : "/추천star-16.svg"} />
            <PageChild5 alt="" src={item[13]>=5? "/추천star-17.svg" : "/추천star-16.svg"} /> 
            <Div2>{item[0]}</Div2> {/*lect_name*/}
            <Div4>{item[1]}</Div4> {/*prof_name*/}
            <Div3>{item[3]}</Div3>  {/*time*/}
            <Abeek>{item[6]}</Abeek> {/*domain*/}
            <Div1>{item[12]}</Div1> {/*hashtag*/}
            <MasterPrimaryButton type='checkbox' checked={1} onClick={()=>AddTimetable(item)}/> {/* 담기 */}
            <B>시간표에 추가</B>
          </PageInner>
        ))}
        
      
      </Scrollpage>
    </PageRoot>
  );
};

export default 추천Page;
