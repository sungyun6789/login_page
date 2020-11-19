import React from 'react';
import styled from 'styled-components';

const Template = styled.div`
  position: absolute;
  width: 383px;
  height: 535px;
  left: 817px;
  top: 170px;

  background: #f2f2f2;
  border-radius: 12px;
`;

const FirstImageBlock = styled.div`
  position: absolute;
  width: 175px;
  height: 136px;

  margin-top: 33px;
  margin-left: 10px;

  border-radius: 16px;

  background: pink;
  transform: rotate(-0.02deg);
`;

const FirstImageText = styled.p`
  position: absolute;
  width: 162px;
  height: 22px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #4e5150;

  margin-top: 33px;
  margin-bottom: 480px;
  margin-left: 184px;
  margin-right: 36px;
`;

const FirstMoney = styled.p`
  position: absolute;
  width: 83px;
  height: 29px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  margin-top: 62px;
  margin-left: 184px;

  color: #f2994a;
  transform: rotate(-0.02deg);
`;

const FirstMiniMoney = styled.p`
  position: absolute;
  width: 49px;
  height: 17px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-decoration-line: line-through;

  margin-top: 64px;
  margin-left: 250px;
`;

const FirstButton = styled.button``;

const RightBody = () => {
  return (
    <Template>
      <FirstImageBlock />
      <FirstImageText>Vintage Backbag</FirstImageText>
      <FirstMoney>$54.99</FirstMoney>
      <FirstMiniMoney>$94.99</FirstMiniMoney>
    </Template>
  );
};

export default RightBody;
