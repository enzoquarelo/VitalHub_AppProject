import { Container, ContainerCodeInputs } from "../../components/Container/Container";
import { DefaultText } from "../../components/DefaultText/DefaultText";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/style"
import { CustomButton, TitleButton } from "../../components/Button/styles";
import { InputCode } from "../../components/Input/styles";
import { LinkBlue } from "../../components/LinksText/style";

import { Image, StatusBar, TouchableWithoutFeedback, StyleSheet } from "react-native";

const VerifyEmail = ({ navigation }) => {
    const onPressButton = () => {
        navigation.navigate('RedefinePassword');
    };

    const onPressReturn = () => {
        navigation.navigate('RecoverPassword');
    };

    return (
        <Container style={{ paddingBottom: 20 }}>
            <TouchableWithoutFeedback onPress={onPressReturn}>
                <Image
                    source={require('../../../assets/icons/iconReturnPage.png')}
                    style={styles.icon}
                />
            </TouchableWithoutFeedback>
            <Logo />

            <Title style={{ marginBottom: 15, marginTop: 20 }}>Verifique seu e-mail</Title>

            <DefaultText>Digite o código de 4 dígitos enviado para</DefaultText>
            <DefaultText colorTxt="blue" style={{ marginBottom: 15 }}>username@email.com</DefaultText>

            <ContainerCodeInputs style={{ marginBottom: 40 }}>
                <InputCode
                    placeholder="0"
                    maxLength={1}
                    keyboardType="numeric"
                />
                <InputCode
                    placeholder="0"
                    maxLength={1}
                    keyboardType="numeric"
                />
                <InputCode
                    placeholder="0"
                    maxLength={1}
                    keyboardType="numeric"
                />
                <InputCode
                    placeholder="0"
                    maxLength={1}
                    keyboardType="numeric"
                />
            </ContainerCodeInputs >

            <CustomButton onPress={onPressButton} style={{ marginBottom: 15 }}>
                <TitleButton colorTxt={false}>ENTRAR</TitleButton>
            </CustomButton>

            <LinkBlue style={{ marginTop: 20 }} fontSize={16}>Reenviar código</LinkBlue>
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

export default VerifyEmail;