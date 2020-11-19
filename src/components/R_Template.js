import React, { useState } from 'react';
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
  width: 150px;
  height: 136px;

  margin-top: 33px;
  margin-left: 25px;
  margin-right: 10px;

  border-radius: 16px;

  background: pink;
  transform: rotate(-0.02deg);
`;

const SecondImageBlock = styled.div`
  position: absolute;
  width: 150px;
  height: 136px;

  margin-top: 200px;
  margin-left: 25px;
  margin-right: 10px;

  border-radius: 16px;

  background: skyblue;
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

const SecondImageText = styled.p`
  position: absolute;
  width: 99.93px;
  height: 22.21px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #4e5150;

  margin-top: 201px;
  margin-bottom: 480px;
  margin-left: 184px;
  margin-right: 98px;
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

const SecondMoney = styled.p`
  position: absolute;
  width: 81.76px;
  height: 29.27px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  margin-top: 230px;
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

const SecondMiniMoney = styled.p`
  position: absolute;
  width: 53.5px;
  height: 17.16px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-decoration-line: line-through;

  margin-top: 233px;
  margin-left: 250px;
`;

const FirstButton = styled.button`
  position: absolute;
  width: 134.25px;
  height: 52px;

  margin-top: 115px;
  margin-left: 185px;

  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;
`;

const SecondButton = styled.button`
  position: absolute;
  width: 134.25px;
  height: 52px;

  margin-top: 285px;
  margin-left: 185px;

  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;
`;

const FirstLeftButton = styled.button`
  position: absolute;
  width: 21px;
  height: 21px;

  margin-top: 131px;
  margin-left: 198px;
  margin-right: 163px;

  background: #e0e0e0;
  border-radius: 4px;
`;

const FirstRightButton = styled.button`
  position: absolute;
  width: 21.2px;
  height: 21.2px;

  margin-top: 131px;
  margin-left: 287px;
  margin-right: 75px;

  background: #e0e0e0;
  border-radius: 4px;
`;

const SecondLeftButton = styled.button`
  position: absolute;
  width: 21px;
  height: 21px;

  margin-top: 300px;
  margin-left: 198px;
  margin-right: 163px;

  background: #e0e0e0;
  border-radius: 4px;
`;

const SecondRightButton = styled.button`
  position: absolute;
  width: 21.2px;
  height: 21.2px;

  margin-top: 300px;
  margin-left: 287px;
  margin-right: 75px;

  background: #e0e0e0;
  border-radius: 4px;
`;

const FirstText = styled.p`
  position: absolute;
  width: 7.07px;
  height: 20.19px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  margin-top: 132px;
  margin-left: 250px;
  margin-right: 126px;
`;

const SecondText = styled.p`
  position: absolute;
  width: 7.07px;
  height: 20.19px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  margin-top: 302px;
  margin-left: 250px;
  margin-right: 126px;
`;

const FirstLine = styled.hr`
  position: absolute;
  width: 327.06px;
  height: 0px;

  border: 1px solid #bdbdbd;
  transform: rotate(-0.18deg);

  margin-top: 432px;
  margin-left: 30px;
  margin-right: 26px;
`;

const SecondLine = styled.hr`
  position: absolute;
  width: 327.06px;
  height: 0px;

  border: 1px solid #bdbdbd;
  transform: rotate(-0.18deg);

  margin-top: 474px;
  margin-bottom: 60px;
  margin-left: 30px;
  margin-right: 26px;
`;

const FirstLineText = styled.p`
  position: absolute;
  width: 255px;
  height: 28px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  color: #333333;

  margin-top: 444px;
  margin-left: 29px;
`;

const SecondLineText = styled.p`
  position: absolute;
  width: 255px;
  height: 28px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  color: #333333;

  margin-top: 491px;
  margin-left: 30px;
`;

const FirstLineMoney = styled.p`
  position: absolute;
  width: 255px;
  height: 28px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: right;

  margin-top: 444px;
  margin-left: 101px;
  margin-right: 27px;
`;

const SecondLineMoney = styled.p`
  position: absolute;
  width: 255px;
  height: 28px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: right;

  margin-top: 488px;
  margin-bottom: 18px;
  margin-left: 102px;
  margin-right: 26px;
`;

const RightBody = () => {
  const [firstNum, setFirstNum] = useState(1);
  const [secNum, setSecNum] = useState(1);

  const FirstAddClick = () => {
    setFirstNum(firstNum + 1);
  };

  const FirstMinusClick = () => {
    setFirstNum(firstNum - 1);
  };

  const SecAddClick = () => {
    setSecNum(secNum + 1);
  };

  const SecMinusClick = () => {
    setSecNum(secNum - 1);
  };
  return (
    <Template>
      <FirstImageBlock />
      <FirstImageText>Vintage Backbag</FirstImageText>
      <FirstMoney>$54.99</FirstMoney>
      <FirstMiniMoney>$94.99</FirstMiniMoney>
      <FirstButton />
      <FirstLeftButton onClick={FirstMinusClick}>-</FirstLeftButton>
      <FirstText>{firstNum}</FirstText>
      <FirstRightButton onClick={FirstAddClick}>+</FirstRightButton>

      <SecondImageBlock />
      <SecondImageText>Levi Shoes</SecondImageText>
      <SecondMoney>$74.99</SecondMoney>
      <SecondMiniMoney>$124.99</SecondMiniMoney>
      <SecondButton />
      <SecondLeftButton onClick={SecMinusClick}>-</SecondLeftButton>
      <SecondText>{secNum}</SecondText>
      <SecondRightButton onClick={SecAddClick}>+</SecondRightButton>

      <FirstLine />
      <FirstLineText>Shipping</FirstLineText>
      <FirstLineMoney>$19</FirstLineMoney>

      <SecondLine />
      <SecondLineText>Total</SecondLineText>
      <SecondLineMoney>$148.98</SecondLineMoney>
    </Template>
  );
};

export default RightBody;
