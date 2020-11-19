import React from 'react';
import styled from 'styled-components';

const EmailBlock = styled.div`
  position: absolute;
  width: 40px;
  height: 15px;
  left: 241px;
  top: 196px;

  font-size: 12px;
  font-weight: 600;
`;

const PhoneBlock = styled.div`
  position: absolute;
  width: 41px;
  height: 15px;
  left: 241px;
  top: 294px;

  font-size: 12px;
  font-weight: 600;
`;

const EmailInput = styled.input`
  border: 1px solid #828282;
  border-radius: 12px;
  box-sizing: border-box;

  margin-top: 7px;
  margin-bottom: 20px;
  padding-left: 30px;

  position: absolute;
  width: 465px;
  height: 56px;
  left: 240px;
  top: 218px;
`;

const PhoneInput = styled.input`
  border: 1px solid #828282;
  border-radius: 12px;
  box-sizing: border-box;

  margin-top: 7px;
  padding-left: 30px;

  position: absolute;
  width: 465px;
  height: 56px;
  left: 240px;
  top: 315.99px;
`;

const Email = () => {
  return (
    <>
      <EmailBlock>E-mail</EmailBlock>
      <EmailInput placeholder="Enter your email..."></EmailInput>
      <PhoneBlock>Phone</PhoneBlock>
      <PhoneInput placeholder="Enter your phone..."></PhoneInput>
    </>
  );
};

export default Email;
