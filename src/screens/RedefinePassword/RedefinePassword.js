import React from "react";
import { Image, StatusBar, TouchableWithoutFeedback, StyleSheet } from "react-native";


import { Container } from "../../components/Container/Container";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/style";
import { DefaultText } from "../../components/DefaultText/DefaultText";
import { Input } from "../../components/Input/styles";
import { CustomButton, TitleButton } from "../../components/Button/styles";

const RedefinePassword = ({navigation}) => {
    const onPressButton = () => {
        navigation.navigate('Login');
    };

    const onPressReturn = () => {
        navigation.navigate('VerifyEmail');
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

            <Title style={{ marginTop: 20, marginBottom: 10 }}>Redefinir Senha</Title>

            <DefaultText style={{ marginBottom: 15 }} fontSize={20}>
                Insira e confirme a sua nova senha
            </DefaultText>

            <Input
                placeholder="Nova Senha"
                fontSize={16}
                style={{marginBottom: 15, marginTop: 15}}
            />
            <Input

                placeholder="Confirmar nova senha"
                fontSize={16}
                style={{marginBottom: 35}}
            />

            <CustomButton onPress={onPressButton} style={{ marginBottom: 15 }}>
                <TitleButton colorTxt={false}>CONFIRMAR NOVA SENHA</TitleButton>
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

export default RedefinePassword;