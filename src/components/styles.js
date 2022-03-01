import styled from "styled-components";
import { KeyboardAvoidingView, View, Text } from "react-native";

export const StyledContainer = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 25px;
  align-items: center;
  background-color: #ccc;
`;
export const InnerContainer = styled.View`
  flex: 1;
  padding-top: 60px;
  padding-bottom: 30px;
  width: 282px;
  align-items: center;
  justify-content: center;
`;

export const TextLogo = styled.Text`
    color: black;
`;

