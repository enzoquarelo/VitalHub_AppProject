import React, { useState, useEffect } from "react";
import { Image, StatusBar, TouchableWithoutFeedback, StyleSheet } from "react-native";

import { Container } from "../../components/Container/Container";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/style";
import { DefaultText } from "../../components/DefaultText/DefaultText";
import { Input } from "../../components/Input/styles";
import { CustomButton, TitleButton } from "../../components/Button/styles";
import { WarningText } from "../../components/WarningText/WarningText";

const RecoverPassword = ({ navigation }) => {
  const [textInput, setTextInput] = useState('');
  const [textWarning, setTextWarning] = useState('');

  const onPress = () => {
    if (textInput.trim() !== '') {
      navigation.navigate("VerifyEmail");
    } else {
      setTextWarning("O campo acima não pode ser vazio!");

      setTimeout(() => {
        setTextWarning('');
      }, 3000);
    }
  };

  const onPressReturn = () => {
    navigation.navigate('Login');
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={onPressReturn}>
        <Image
          source={require('../../../assets/icons/iconReturnPage.png')}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>
      <Logo />

      <Title style={{ marginTop: 20, marginBottom: 10 }}>Recuperar Senha</Title>

      <DefaultText style={{ marginBottom: 15 }} fontSize={20}>
        Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha
      </DefaultText>

      <Input
        value={textInput}
        onChangeText={(texto) => setTextInput(texto)}
        placeholder="Usuário ou E-mail"
        fontSize={16}
      />

      <WarningText style={{ marginBottom: 20 }} colorVisible={textWarning !== ''}>
        {textWarning}
      </WarningText>

      <CustomButton style={{ marginBottom: 15 }} onPress={onPress}>
        <TitleButton colorTxt={false}>CONTINUAR</TitleButton>
      </CustomButton>

    </Container>
  );
}

const styles = StyleSheet.create({
  icon: {
      height: 35,
      width: 35,
      position: 'absolute',
      top: 15,
      left: 15,
  },
});

export default RecoverPassword;