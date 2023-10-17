import React, { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import 회원가입GlobalStyles from "../회원가입global";
import axios from 'axios';

const Smiley = styled.div`
  position: absolute;
  top: 16.67%;
  left: 50.28%;
  font-weight: 600;
`;
const HappyFaceIcon = styled.img`
  position: absolute;
  height: 93.75%;
  width: 34.86%;
  top: 16.67%;
  right: 57.77%;
  bottom: -10.42%;
  left: 7.37%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  cursor: pointer;
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
  border-radius: var(--br-9xs);
  display: flex;
  flex-direction: column;
  padding: var(--padding-9xs) var(--padding-base);
  align-items: center;
  justify-content: center;
  color: var(--black-600-666666);
`;
const BgTabSwitcher32px = styled.div`
  border-radius: 8px;
  background-color: var(--black-100-e5e5e5);
  border: 0.5px solid rgba(204, 204, 204, 0.25);
  display: flex;
  flex-direction: row;
  padding: 2px;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: 0;
  text-align: center;
  font-size: var(--micro-button-label-size);
  color: var(--black-000000);
  font-family: var(--micro-button-label);
`;
const UiUnicornLogoParent = styled.div`
  width: 360px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const SignUpPageInner = styled.div`
  position: absolute;
  top: 138px;
  left: 105px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 36px;
  color: #130f26;
  font-family: var(--font-plus-jakarta-sans);
`;
const Dis2 = styled.b`
  position: relative;
  letter-spacing: 0.3px;
  line-height: 20px;
`;
const PrimaryButton40px = styled.button`
  border-radius: var(--br-7xs);
  background-color: rgba(97, 0, 255, 0.63);
  width: 448px;
  height: 66px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-3xs) 24px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
const PrimaryButton40pxWrapper = styled.div`
  position: absolute;
  top: 857px;
  left: 1220px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--white-ffffff);
  font-family: var(--micro-button-label);
`;
const GroupChild = styled.div`
  position: absolute;
  top: 4.95px;
  left: 0px;
  background-color: var(--white-ffffff);
  width: 124px;
  height: 36px;
`;
const P = styled.p`
  margin: 0;
`;
const Div = styled.div`
  position: absolute;
  height: 59.38%;
  width: 94.07%;
  top: 0%;
  left: 5.93%;
  font-weight: 500;
  display: inline-block;
`;
const RectangleParent = styled.div`
  position: relative;
  width: 135px;
  height: 40.95px;
`;
const FrameChild = styled.input`
  position: relative;
  border-radius: var(--br-9xs);
  background-color: var(--white-ffffff);
  border: 0.7px solid var(--black-000000);
  box-sizing: border-box;
  width: 589.4px;
  height: 63.4px;
  margin-top: -7px;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 573px;
  left: 222px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 464px;
  left: 221px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 0px;
  left: 458px;
  background-color: var(--white-ffffff);
  width: 124px;
  height: 36px;
`;
const Div2 = styled.div`
  position: absolute;
  height: 67.55%;
  width: 21.82%;
  top: 0.13%;
  left: 0%;
  font-weight: 500;
  display: inline-block;
`;
const RectangleContainer = styled.div`
  position: relative;
  width: 582px;
  height: 36px;
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 360px;
  left: 1091px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;
const GroupParent1 = styled.div`
  position: absolute;
  top: 585px;
  left: 1091px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;
const GroupParent2 = styled.div`
  position: absolute;
  top: 470px;
  left: 1091px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;
const GroupParent3 = styled.div`
  position: absolute;
  top: 353px;
  left: 222px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameChild4 = styled.input`
  position: relative;
  border-radius: 3px;
  background-color: var(--white-ffffff);
  border: 0.5px solid var(--black-000000);
  box-sizing: border-box;
  width: 21px;
  height: 21px;
`;
const SignUpPageChild = styled.div`
  position: absolute;
  top: 796px;
  left: 1120px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs);
  align-items: flex-end;
  justify-content: flex-end;
`;
const Div6 = styled.div`
  position: relative;
  font-weight: 500;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 792px;
  left: 1206px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs);
  align-items: flex-end;
  justify-content: flex-end;
  font-size: var(--font-size-xl);
  color: var(--black-000000);
`;
const FrameChild5 = styled.input`
  position: relative;
  border-radius: var(--br-9xs);
  background-color: var(--white-ffffff);
  border: 0.7px solid var(--black-000000);
  box-sizing: border-box;
  width: 270.4px;
  height: 63.4px;
  margin-top: -7px;
`;
const GroupParent4 = styled.div`
  width: 269px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  z-index: 0;
`;
const ArrowDropDownLine6Icon = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 51px;
  left: 233px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 10px;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 689px;
  left: 223px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 48px;
`;
const Div9 = styled.div`
  position: relative;
  font-weight: 600;
`;
const Container = styled.div`
  position: absolute;
  top: 197px;
  left: 169px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  color: #8b79bd;
`;
const SignUpPageRoot = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: var(--white-ffffff);
  width: 100%;
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray);
  font-family: var(--font-nunito);
`;

const api = axios.create({
  baseURL: 'http://localhost:8000'  // 백엔드 서버의 주소와 포트를 baseURL로 설정
});

const 회원가입Page = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ id: "", password: "", password_config:"", major:"", school_name:"", student_id:"", student_id_config:"", level:"" });

  const [check, setCheck] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });}

  const checkChange = (e) => {
    setCheck(!check);}
  
  const onClickExecute = (e) => {
      handleRegister(e);
  };
  
  const handleRegister = async(e) => {
    e.preventDefault();
    if (check){
      try {
        const response = await api.post('/api/register/', {
          username: form.id,
          password: form.password,
          password_config : form.password_config,
          student_id : form.student_id,
          student_id_config : form.student_id_config,
          level : form.level,
          major : form.major
        });
        
        
        if (response.data.message == '회원가입 성공'){
          alert('환영합니다.'+form.id+"님!");
          navigate("/");
        }
        else{
          alert(response.data.message);
        }
      } catch (error) {
        alert('중복된 아이디 입니다');
      } 
    }
    else{
      alert('회원가입에 동의해주세요')
    }
  };
  const navigate2login = () => {
    navigate("/");
  };

  return (
    <SignUpPageRoot>
      <회원가입GlobalStyles />
      <SignUpPageInner>
        <UiUnicornLogoParent>
          <UiUnicornLogo>
            <Smiley>SMILEY</Smiley>
            <HappyFaceIcon alt="" src="/회원가입happyface.svg" onClick={navigate2login}/>
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
      </SignUpPageInner>
      <PrimaryButton40pxWrapper>
        <PrimaryButton40px onClick={onClickExecute}>
          <Dis2>시작하기</Dis2>
        </PrimaryButton40px>
      </PrimaryButton40pxWrapper>
      <GroupParent>
        <RectangleParent>
          <GroupChild />
          <Div>
            <P>{`학번 확인 `}</P>
          </Div>
        </RectangleParent>
        <FrameChild 
          type="text"
          id="student_id_config"
          name="student_id_config"
          value={form.student_id_config}
          onChange={handleChange}
          placeholder="학번을 재입력하세요"
        />
      </GroupParent>
      <GroupContainer>
        <RectangleParent>
          <GroupChild />
          <Div>학번</Div>
        </RectangleParent>
        <FrameChild 
          type="text"
          id="student_id"
          name="student_id"
          value={form.student_id}
          onChange={handleChange}
          placeholder="학번을 입력하세요"
        />
      </GroupContainer>
      <FrameDiv>
        <RectangleContainer>
          <GroupInner />
          <Div2>아이디</Div2>
        </RectangleContainer>
        <FrameChild 
          type="text"
          id="id"
          name="id"
          value={form.id}
          onChange={handleChange}
          placeholder="아이디를 입력하세요"
        />
      </FrameDiv>
      <GroupParent1>
        <RectangleContainer>
          <GroupInner />
          <Div2>비밀번호 확인</Div2>
        </RectangleContainer>
        <FrameChild 
          type="password"
          id="password_config"
          name="password_config"
          value={form.password_config}
          onChange={handleChange}
          placeholder="비밀번호를 재입력하세요"
        />
      </GroupParent1>
      <GroupParent2>
        <RectangleContainer>
          <GroupInner />
          <Div2>{`비밀번호 `}</Div2>
        </RectangleContainer>
        <FrameChild 
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력하세요"
        />
      </GroupParent2>
      <GroupParent3>
        <RectangleParent>
          <GroupChild />
          <Div>학교명</Div>
        </RectangleParent>
        <FrameChild 
          type="text"
          id="school_name"
          name="school_name"
          value={form.school_name}
          onChange={handleChange}
          placeholder="학교명을 입력하세요"
        />
      </GroupParent3>
      <SignUpPageChild>
        <FrameChild4
          type='checkbox'
          checked={check}
          onChange={checkChange}
        />
      </SignUpPageChild>
      <Wrapper>
        <Div6>본 서비스 이용을 위한 회원가입에 동의합니다.</Div6>
      </Wrapper>
      <FrameParent>
        <FrameWrapper>
          <FrameContainer>
            <GroupParent4>
              <RectangleParent>
                <GroupChild />
                <Div>학과명</Div>
              </RectangleParent>
              <FrameChild5 
                type="text"
                id="major"
                name="major"
                value={form.major}
                onChange={handleChange}
                placeholder="학과명을 입력하세요"
              />
            </GroupParent4>
          </FrameContainer>
        </FrameWrapper>
        <FrameGroup>
          <FrameWrapper1>
            <GroupParent4>
              <RectangleParent>
                <GroupChild />
                <Div>
                  <P>{`학년 `}</P>
                </Div>
              </RectangleParent>
              <FrameChild5 
                type="text"
                id="level"
                name="level"
                value={form.level}
                onChange={handleChange}
                placeholder="학년을 입력하세요. ex) 1"
              />
            </GroupParent4>
          </FrameWrapper1>
        </FrameGroup>
      </FrameParent>
      <Container>
        <Div9>한 학기의 시작과 끝을 스마일리와 함께!</Div9>
      </Container>
    </SignUpPageRoot>
  );
};

export default 회원가입Page;
