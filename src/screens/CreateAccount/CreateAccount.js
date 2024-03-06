import React from 'react';

import { Container } from "../../components/Container/Container";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/style";
import { DefaultText } from "../../components/DefaultText/DefaultText";
import { Input } from "../../components/Input/styles";
import { CustomButton, TitleButton } from "../../components/Button/styles";
import { LinksText, LinkRed } from "../../components/LinksText/style";

import { Image, StatusBar, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';


const CreateAccount = () => {
    const navigation = useNavigation();

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

            <Title style={{ marginTop: 35, marginBottom: 8 }}>Criar Conta</Title>

            <DefaultText fontSize={18}>Insira seu endereço de e-mail e senha{'\n'}
                para realizar seu cadastro.</DefaultText>

            <Input
                placeholder="Usuário ou E-mail"
                fontSize={16}
                style={{ marginBottom: 15, marginTop: 45 }}
            />
            <Input
                placeholder="Senha"
                fontSize={16}
                secureTextEntry={true}
                style={{ marginBottom: 15 }}
            />
            <Input
                placeholder="Confirmar Senha"
                fontSize={16}
                secureTextEntry={true}
                style={{ marginBottom: 40 }}
            />

            <CustomButton style={{ marginBottom: 15 }}>
                <TitleButton colorTxt={false}>CADASTRAR</TitleButton>
            </CustomButton>

            <LinksText>
                <LinkRed onPress={() => navigation.navigate("Login")} fontSize={16}>Cancelar</LinkRed>
            </LinksText>

            <StatusBar />

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

export default CreateAccount;