import {Form} from '@unform/mobile';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const FormLogin = styled(Form)`
  width: 100%;
`;

export const Logo = styled.Image``;

export const ForgotPassword = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordText = styled.Text`
  color: ${colors.black};
  font-size: 14px;
  font-family: 'Raleway-Medium';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const CreateAccountButtonText = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-family: 'Raleway-Medium';
`;

export const LoginWithoutButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
  border-color: ${colors.grayLigth};
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const LoginWithoutButtonText = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 16px;
  margin-left: 10px;
`;
