import React, { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import 로그인GlobalStyles from "../로그인global";
import axios from 'axios';

const PageChild = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Smiley = styled.div`
  position: absolute;
  top: 240px;
  left: 50.28%;
  font-weight: 600;
`;
const HappyFaceIcon = styled.img`
  position: absolute;
  height: 93.75%;
  width: 34.86%;
  top: 240px;
  right: 57.77%;
  bottom: -10.42%;
  left: 7.37%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const UiUnicornLogo = styled.div`
  position: relative;
  width: 149.17px;
  height: 48px;
`;
const Dis = styled.div`
  position: relative;
  letter-spacing: 0.3px;
  line-height: 20px;
  font-weight: 500;
`;
const DisWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const TabSwitcherButton28px = styled.div`
  border-radius: var(--br-7xs);
  background-color: var(--white-ffffff);
  border: 0.5px solid var(--black-100-e5e5e5);
  display: flex;
  flex-direction: column;
  padding: var(--padding-9xs) var(--padding-base);
  align-items: center;
  justify-content: center;
`;
const TabSwitcherButton28px1 = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-9xs) var(--padding-base);
  align-items: center;
  justify-content: center;
  color: var(--black-600-666666);
`;
const BgTabSwitcher32px = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--black-100-e5e5e5);
  border: 0.5px solid rgba(204, 204, 204, 0.25);
  display: flex;
  flex-direction: row;
  padding: 2px;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: 0;
  text-align: center;
  font-size: var(--checkbox-size);
  color: var(--black-000000);
  font-family: var(--button-label);
`;
const UiUnicornLogoParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Hint = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.3px;
  line-height: 12px;
`;
const SatelliteInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
`;
const InputBg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-7xs);
  background-color: var(--black-50-f2f2f2);
  border: 0.5px solid var(--black-100-e5e5e5);
  box-sizing: border-box;
  overflow: hidden;
`;
const Div = styled.div`
  position: relative;
  line-height: 20px;
`;
const Rectangle = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: var(--black-900-1a1a1a);
`;
const PrintLine = styled.div`
  position: relative;
  width: 1px;
  height: 20px;
  display: none;
`;
const Parent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-12xs);
`;
const PlaceholderValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const UnionIcon = styled.img`
  position: relative;
  width: 6px;
  height: 6px;
`;
const UnionWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-5xs);
  background-color: var(--color-dimgray-100);
  display: flex;
  flex-direction: row;
  padding: var(--padding-8xs);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LoginIcons = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ArowIcons16Medium = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  display: none;
`;
const InputIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  opacity: 0;
`;
const RegularInputDoubleRow = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-7xs);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-5xs) var(--padding-5xs)
    var(--padding-base);
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;
const LoginInput = styled.div`
  align-self: stretch;
  position: relative;
  height: 48px;
  font-size: var(--button-label-size);
  color: var(--black-500-808080);
  font-family: var(--button-label);
`;
const LinkButtonLabel = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.3px;
  line-height: 12px;
  display: none;
`;
const LinkButtonLabel1 = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.3px;
  line-height: 12px;
  text-align: right;
`;
const SatelliteInput1 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  padding: 0px var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--system-blue-007aff);
`;
const SatelliteInput2 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  padding: 0px var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
`;
const SatelliteInput3 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  padding: 0px var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--system-red-ff3b30);
`;
const SatelliteInput4 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  padding: 0px var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--system-orange-ff9500);
`;
const SatelliteInput5 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  padding: 0px var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--system-green-26a212);
`;
const InputConfigurator1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const SignInFormWebInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LoginIcons1 = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const LoginIconsChild = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 68.18%;
  width: 100%;
  top: 16.67%;
  right: 0%;
  bottom: 15.15%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const LoginIcons2 = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
`;
const InputIcons1 = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const InputConfiguratorParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Default = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 36.5px;
  background-color: var(--black-50-f2f2f2);
  border: 0.5px solid var(--black-100-e5e5e5);
  box-sizing: border-box;
`;
const BgSwitcher = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 40px;
  height: 20px;
`;
const Knob20 = styled.div`
  position: absolute;
  height: 80%;
  width: 80%;
  top: 10%;
  right: 10%;
  bottom: 10%;
  left: 10%;
  border-radius: 12px;
  background-color: var(--white-ffffff);
  box-shadow: 1px 1px 2px -1px rgba(51, 51, 51, 0.3);
`;
const KnobIcon = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
`;
const Switcher = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Description2 = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.3px;
  line-height: 20px;
`;
const SwitcherItemLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const SwitcherItemLeftWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--checkbox-size);
  color: var(--black-900-1a1a1a);
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;
const Dis2 = styled.b`
  position: relative;
  letter-spacing: 0.3px;
  line-height: 20px;
`;
const PrimaryButton40px = styled.button`
  align-self: stretch;
  border-radius: var(--br-7xs);
  background-color: #a85cf9;
  display: flex;
  flex-direction: column;
  padding: 10px var(--padding-5xl);
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--button-label-size);
  color: var(--white-ffffff);
  font-family: var(--button-label);
`;
const Nav = styled.div`
  align-self: stretch;
  position: relative;
  background-color: var(--black-100-e5e5e5);
  height: 0.5px;
`;
const OtherPayMethodIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
`;
const FacebookSmallButton40px = styled.div`
  flex: 1;
  border-radius: var(--br-7xs);
  background-color: var(--black-800-333333);
  height: 40px;
  display: none;
  flex-direction: column;
  padding: 12px var(--padding-5xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
const FacebookSmallButton40pxWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SignInFormWeb = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
`;
const Dis21 = styled.div`
  position: relative;
  letter-spacing: 0.3px;
  line-height: 20px;
`;
const Description4 = styled.div`
  position: relative;
  letter-spacing: 0.3px;
  line-height: 20px;
  color: var(--system-blue-007aff);
  text-align: right;
`;
const SignUpOffer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  cursor: pointer;
  font-size: var(--checkbox-size);
  color: var(--black-900-1a1a1a);
`;
const SignInForms = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  font-size: var(--hint-placeholder-size);
  color: var(--black-800-333333);
  font-family: var(--checkbox);
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 285px;
`;
const PageInner = styled.div`
  align-self: stretch;
  background-color: var(--white-ffffff);
  width: 456px;
  display: flex;
  flex-direction: column;
  padding: 48px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: space-between;
`;
const PageRoot = styled.div`
  position: relative;
  border-radius: 15px;
  width: 100%;
  height: 1080px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: 36px;
  color: #130f26;
  font-family: var(--font-plus-jakarta-sans);
`;

const api = axios.create({
  baseURL: 'http://localhost:8000'  // 백엔드 서버의 주소와 포트를 baseURL로 설정
});

const 로그인Page = () => {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/Register");
  };

  const [form, setForm] = useState({ id: "", password: "" });

  

  const handleLogin = async(e) => {
    e.preventDefault();
   
    try {
      const response = await api.post('/api/login/', {
        username: form.id,
        password: form.password,
      });
      
      alert('로그인에 성공하였습니다.');
      navigate("/Main", {state : {student_id : response.data.data}});

    } catch (error) {
      alert('로그인에 실패했습니다.');
    } 
    

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });}

  const onClickExecute = (e) => {
      handleLogin(e);
  };

  return (
    <PageRoot>
      <로그인GlobalStyles/>
      <PageChild alt="" src="/로그인rectangle-2756@2x.png" />
      <PageInner>
        <FrameParent>
          <UiUnicornLogoParent>
            <UiUnicornLogo>
              <Smiley>SMILEY</Smiley>
              <HappyFaceIcon alt="" src="/로그인happyface.svg" />
            </UiUnicornLogo>
            <BgTabSwitcher32px>
              <TabSwitcherButton28px>
                <DisWrapper>
                  <Dis>Sign in</Dis>
                </DisWrapper>
              </TabSwitcherButton28px>
              <TabSwitcherButton28px1>
                <DisWrapper>
                  <Dis>Sign up</Dis>
                </DisWrapper>
              </TabSwitcherButton28px1>
            </BgTabSwitcher32px>
          </UiUnicornLogoParent>
          <SignInForms>
            <SignInFormWeb>
              <SignInFormWebInner>
                <FrameGroup>
                  <InputConfiguratorParent>
                    <SignInFormWebInner>
                      <InputConfigurator1>
                        <SatelliteInput>
                          <Hint>Login</Hint>
                        </SatelliteInput>
                        <LoginInput>
                          <InputBg />
                          <RegularInputDoubleRow
                            type="text"
                            id="id"
                            name="id"
                            value={form.id}
                            onChange={handleChange}
                            placeholder="아이디를 입력하세요"
                          />
                            {/* <PlaceholderValue>
                              <Parent1>
                                <Div>아이디를 입력하세요</Div>
                                <PrintLine>
                                  <Rectangle />
                                </PrintLine>
                              </Parent1>
                            </PlaceholderValue>
                            <InputIcons>
                              <LoginIcons>
                                <UnionWrapper>
                                  <UnionIcon alt="" src="/union.svg" />
                                </UnionWrapper>
                              </LoginIcons>
                              <ArowIcons16Medium alt="" src="/union.svg" />
                            </InputIcons>
                          </RegularInputDoubleRow> */}
                        </LoginInput>
                        <SatelliteInput1>
                          <LinkButtonLabel>Link Button Label</LinkButtonLabel>
                          <LinkButtonLabel1>Link Button Label</LinkButtonLabel1>
                        </SatelliteInput1>
                        <SatelliteInput2>
                          <Hint>Login (email or phone number)</Hint>
                        </SatelliteInput2>
                        <SatelliteInput3>
                          <Hint>Error</Hint>
                        </SatelliteInput3>
                        <SatelliteInput4>
                          <Hint>Warning</Hint>
                        </SatelliteInput4>
                        <SatelliteInput5>
                          <Hint>Success</Hint>
                        </SatelliteInput5>
                      </InputConfigurator1>
                    </SignInFormWebInner>
                    <SignInFormWebInner>
                      <InputConfigurator1>
                        <SatelliteInput>
                          <Hint>Password</Hint>
                        </SatelliteInput>
                        <LoginInput>
                          <InputBg />
                          <RegularInputDoubleRow 
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="비밀번호를 입력하세요"
                          />
                            {/* <PlaceholderValue>
                              <Parent1>
                                <Div>비밀번호를 입력하세요</Div>
                                <PrintLine>
                                  <Rectangle />
                                </PrintLine>
                              </Parent1>
                            </PlaceholderValue>
                            <InputIcons1>
                              <LoginIcons1>
                                <UnionWrapper>
                                  <UnionIcon alt="" src="/union.svg" />
                                </UnionWrapper>
                              </LoginIcons1>
                              <LoginIcons2>
                                <LoginIconsChild />
                                <VectorIcon alt="" src="/vector.svg" />
                              </LoginIcons2>
                            </InputIcons1>
                          </RegularInputDoubleRow> */}
                        </LoginInput>
                        <SatelliteInput1>
                          <LinkButtonLabel>Link Button Label</LinkButtonLabel>
                          <LinkButtonLabel1>Link Button Label</LinkButtonLabel1>
                        </SatelliteInput1>
                        <SatelliteInput2>
                          <Hint>Password</Hint>
                        </SatelliteInput2>
                        <SatelliteInput3>
                          <Hint>Error</Hint>
                        </SatelliteInput3>
                        <SatelliteInput4>
                          <Hint>Warning</Hint>
                        </SatelliteInput4>
                        <SatelliteInput5>
                          <Hint>Success</Hint>
                        </SatelliteInput5>
                      </InputConfigurator1>
                    </SignInFormWebInner>
                  </InputConfiguratorParent>
                  {/* <SwitcherItemLeftWrapper>
                    <SwitcherItemLeft>
                      <Switcher>
                        <BgSwitcher>
                          <Default />
                        </BgSwitcher>
                        <KnobIcon>
                          <Knob20 />
                        </KnobIcon>
                      </Switcher>
                      <Description2>Remember me</Description2>
                    </SwitcherItemLeft>
                  </SwitcherItemLeftWrapper> */}
                </FrameGroup>
              </SignInFormWebInner>
              <PrimaryButton40px onClick={onClickExecute}>
                <Dis2>시작하기</Dis2>
              </PrimaryButton40px>
              <Nav />
              <FacebookSmallButton40pxWrapper>
                <FacebookSmallButton40px>
                  <OtherPayMethodIcon alt="" src="/로그인union.svg" />
                </FacebookSmallButton40px>
              </FacebookSmallButton40pxWrapper>
            </SignInFormWeb>
            <SignUpOffer onClick={navigateToRegister}>
              <Dis21>Dont have an account?</Dis21>
              <Description4>Sign up now</Description4>
            </SignUpOffer>
          </SignInForms>
        </FrameParent>
      </PageInner>
    </PageRoot>
  );
};

export default 로그인Page;
