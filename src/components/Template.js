import React from 'react';
import styled from 'styled-components';

const TemplateBlock = styled.div`
  width: 1440px;
  height: 1140px;

  border-radius: 12px;

  font-size: 36px;
  font-weight: 600;

  .logo {
    position: absolute;
    width: 180px;
    height: 44px;
    left: 240px;
    top: 64.06px;

    line-height: 44px;
    color: #4e5150;
  }

  .second-logo {
    position: absolute;
    width: 181px;
    height: 22px;
    left: 239px;
    top: 159.06px;

    font-size: 18px;
    font-weight: 600;

    color: #333333;
  }
`;

const Template = ({ children }) => {
  return (
    <TemplateBlock>
      <div className="logo">Checkout</div>
      <div className="second-logo">Contcat information</div>
      {children}
    </TemplateBlock>
  );
};

export default Template;
