import React from 'react';
import styled from 'styled-components';

const ShippingAddressBlock = styled.h1`
  font-size: 18px;
  font-weight: 600;

  position: absolute;
  width: 162px;
  height: 22px;
  left: 240px;
  top: 430px;
`;

const NameText = styled.p`
  font-size: 12px;
  font-weight: 600;

  position: absolute;
  width: 62px;
  height: 15px;
  left: 240px;
  top: 467px;

  color: #4f4f4f;
  transform: rotate(-0.02deg);
`;

const NameInput = styled.input`
  margin-top: 7px;
  padding-left: 30px;

  position: absolute;
  width: 465px;
  height: 56px;
  left: 239px;
  top: 489px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;

  color: #333333;
`;

const AddressText = styled.p`
  font-size: 12px;
  font-weight: 600;

  position: absolute;
  width: 51px;
  height: 15px;
  left: 240px;
  top: 565px;

  color: #4f4f4f;
  transform: rotate(-0.02deg);
`;

const AddressInput = styled.input`
  margin-top: 7px;
  padding-left: 30px;

  position: absolute;
  width: 465px;
  height: 56px;
  left: 239px;
  top: 587px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;
`;

const CityText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  position: absolute;
  width: 25px;
  height: 15px;
  left: 240px;
  top: 656px;

  color: #4f4f4f;
  transform: rotate(-0.02deg);
`;

const CityInput = styled.input`
  position: absolute;
  width: 465px;
  height: 56px;
  left: 239px;
  top: 678px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  padding-left: 30px;
  margin-top: 7px;

  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;
`;

const CountryText = styled.p`
  position: absolute;
  width: 50px;
  height: 15px;
  left: 240px;
  top: 747px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;

const CountryInput = styled.input`
  position: absolute;
  width: 217px;
  height: 56px;
  left: 239px;
  top: 769px;

  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;

  margin-top: 7px;
  text-align: center;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

const PostalText = styled.p`
  position: absolute;
  width: 72px;
  height: 15px;
  left: 488px;
  top: 747.01px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;

const PostalInput = styled.input`
  position: absolute;
  width: 217px;
  height: 56px;
  left: 487px;
  top: 769px;

  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;

  margin-top: 7px;
  text-align: center;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

const CheckBox = styled.input`
  position: absolute;
  width: 21px;
  height: 21px;
  left: 240px;
  top: 845px;

  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 20px;
`;

const CheckBoxText = styled.p`
  position: absolute;
  width: 215px;
  height: 15px;
  left: 272px;
  top: 848px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  color: #4f4f4f;
  transform: rotate(-0.02deg);

  margin-top: 23px;
`;

const ContinueButton = styled.button`
  position: absolute;
  width: 166px;
  height: 54px;
  left: 539px;
  top: 886px;

  background: #f2994a;
  border-radius: 12px;
`;

const ButtonText = styled.p`
  position: absolute;
  width: 76px;
  height: 20px;
  left: 584px;
  top: 890px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;
  text-align: center;
`;

const Address = () => {
  return (
    <>
      <ShippingAddressBlock>Shipping Address</ShippingAddressBlock>
      <NameText>Full name</NameText>
      <NameInput placeholder="Rodney Cotton" />

      <AddressText>Addrss</AddressText>
      <AddressInput placeholder="Your address.." />

      <CityText>City</CityText>
      <CityInput placeholder="Your city.." />

      <CountryText>Country</CountryText>
      <CountryInput placeholder="Your country.." />

      <PostalText>Postal code</PostalText>
      <PostalInput placeholder="Your postal code.." />

      <CheckBox type="checkbox" />
      <CheckBoxText>Save this information for next time</CheckBoxText>

      <ContinueButton />
      <ButtonText>Continue</ButtonText>
    </>
  );
};

export default Address;
