import React from 'react';
import styled from 'styled-components';

const TestPageRoot = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: var(--white-ffffff);
  width: 1920px;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray);
  font-family: var(--font-nunito);
`;

const StyledSVG = styled.svg`
  position: absolute;
  top: 88px;
  left: 414px;
  width: 336px;
  height: 336px;
`;

const Div777 = styled.div`
  position: absolute;
  top: 155px;
  left: 516px;
  font-size: 60px;
  font-family: var(--font-inter);
  color: var(--color);
  text-align: center;
  display: inline-block;
  width: 137.44px;
  height: 168.15px;
`;


const Circle = styled.circle`
  fill: none;
  stroke: #bcbcbc;
  stroke-width: 15; /* 게이지 굵기 */
  stroke-dasharray: 251; /* 원의 둘레 길이인 2πr 값을 기준으로 설정합니다 */
  stroke-dashoffset: ${props => 251 * (1 - props.fill)}; /* 채워진 정도에 따라 dashoffset 값을 설정합니다 */
  transform: rotate(-90deg); /* 원의 시작점을 상단으로 조정합니다 */
  transform-origin: center; /* 원의 회전 기준점을 중심으로 설정합니다 */
  transition: stroke-dashoffset 0.3s ease-in-out; /* 채워진 정도 변경 시 애니메이션을 적용합니다 */
`;

function FilledCircle({ fill }) {
  return (
    <div>
      <TestPageRoot>
        <StyledSVG viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="40" fill={fill} />
        </StyledSVG>
        <Div777>60%</Div777>
      </TestPageRoot>
    </div>
    
  );
}

export default FilledCircle;