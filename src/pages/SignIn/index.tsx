import React, {useCallback, useEffect, useRef, useState} from 'react';
import {faLock, faSignInAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import {KeyboardAvoidingView, ScrollView, TextInput, Alert} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Logo,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  FormLogin,
  LoginWithoutButton,
  LoginWithoutButtonText,
} from './styles';
import {useAuth} from '../../context/AuthContext';
import logoImg from '../../assets/images/logo.png';
import Input from '../../components/global/Input';
import Button from '../../components/global/Button';
import colors from '../../styles/colors';
import getValidationErrors from '../../utils/getValidationsErrors';

interface IFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const {signIn} = useAuth();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();
  const handleLoading = useCallback((value) => {
    setLoading(value);
  }, []);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .required('Senha é obrigatória')
            .min(6, 'Senha de no mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        handleLoading(true);

        await signIn({email: data.email, password: data.password});

        handleLoading(false);
      } catch (err) {
        handleLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [handleLoading, signIn],
  );

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1}} enabled>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <Container>
            <Logo source={logoImg} />
            <FormLogin onSubmit={handleSubmit} ref={formRef}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
                icon={faUser}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                placeholder="Password"
                secureTextEntry
                icon={faLock}
                style={{fontFamily: 'Raleway-Medium'}}
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <ForgotPassword onPress={() => {}}>
                <ForgotPasswordText>Esqueceu sua senha ?</ForgotPasswordText>
              </ForgotPassword>

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
                style={{marginTop: 40}}
                color={colors.primary}
                loading={loading}>
                Entrar
              </Button>
            </FormLogin>

            <CreateAccountButton onPress={() => {}}>
              <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
            </CreateAccountButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <LoginWithoutButton
        onPress={() => {
          navigation.navigate('Tabs');
        }}>
        <FontAwesomeIcon icon={faSignInAlt} size={18} color={colors.primary} />
        <LoginWithoutButtonText>Entrar sem logar </LoginWithoutButtonText>
      </LoginWithoutButton>
    </>
  );
};

export default SignIn;
