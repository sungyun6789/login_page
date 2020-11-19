import React from 'react';
import Template from './components/Template';
import Email from './components/Email';
import Address from './components/ShippingAddress';
import RightBody from './components/R_Template';

const App = () => {
  return (
    <Template>
      <Email />
      <Address />
      <RightBody />
    </Template>
  );
};

export default App;
