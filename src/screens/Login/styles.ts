import styled from 'styled-components/native';

import {View, Text, TextInput} from 'react-native';
export const Title = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  align-self: center;
`;
export const Form = styled(View)`
  border-radius: 4px;
  padding: 20px;
  justify-content: space-evenly;
  flex: 1;
`;
export const CaptchaContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CaptchaText = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  align-self: center;
`;

export const CaptchaInput = styled(TextInput)`
  height: 30px;
  width: 30px;
  font-weight: bold;
  font-size: 20px;
  align-self: center;
  background-color: #ccc;
  text-align: center;
`;
