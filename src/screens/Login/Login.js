import { React, useState } from "react";

import Icon from 'react-native-vector-icons/Ionicons';

import { TouchableWithoutFeedback, View } from "react-native";

import { Logo } from "../../components/Logo/Logo";
import { Image } from "react-native";
import { Title } from "../../components/Title/style";
import { Container, ContainerShowPassword } from "../../components/Container/Container";
import { Input } from "../../components/Input/styles";
import { CustomButton, TitleButton } from "../../components/Button/styles";
import { LinkMedium } from "../../components/Links/style"
import { LinksText, TextAccount, LinkBlue } from "../../components/LinksText/style"
import { TextShowPassword } from "../../components/DefaultText/DefaultText";

const Login = ({ navigation }) => {
    const [userInput, setUserInput] = useState("paulo@gmail.com");
    const [passwordInput, setPasswordInput] = useState("medicoPaulo");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onPressButton = () => {
        if (userInput === "paulo@gmail.com" && passwordInput === "medicoPaulo") {
            navigation.navigate('Main');
        } else {
          navigation.navigate('PatientHome');
        }
    };

    return (
        <Container>
            <Logo />
            <Title style={{ marginTop: 40, marginBottom: 20 }}>Entrar ou criar conta</Title>

            <Input
                value={userInput}
                placeholder="Usuário ou E-mail"
                fontSize={16}
                style={{ marginBottom: 15 }}
                onChangeText={(text) => setUserInput(text)}
            />
            <Input
                value={passwordInput}
                placeholder="Senha"
                secureTextEntry={!showPassword}
                fontSize={16}
                onChangeText={(text) => setPasswordInput(text)}
            />

            <ContainerShowPassword>
                <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                    <View
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: showPassword ? '#34898F' : 'transparent',
                            borderWidth: showPassword ? 0 : 1,
                            borderColor: showPassword ? '#34898F' : '#000000',
                            borderRadius: 5,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {showPassword && (
                            <Icon
                                name="checkmark"
                                size={14}
                                color="white"
                                style={{ alignSelf: 'center' }}
                            />
                        )}
                    </View>
                </TouchableWithoutFeedback>
                <TextShowPassword>Mostrar Senha</TextShowPassword>
            </ContainerShowPassword>

            <LinkMedium
                onPress={() => navigation.navigate("RecoverPassword")}
            >
                Esqueceu sua senha?
            </LinkMedium>

            <CustomButton style={{ marginBottom: 15 }} onPress={onPressButton}>
                <TitleButton>ENTRAR</TitleButton>
            </CustomButton>

            <CustomButton borderBtn={true} backgroundBtn="white">
                <Image
                    source={require('../../../assets/icons/Google.png')}
                    style={{ width: 20, height: 20, marginRight: 20, marginTop: 1 }}
                />
                <TitleButton colorTxt={true}>ENTRAR COM GOOGLE</TitleButton>
            </CustomButton>

            <LinksText>
                <TextAccount>Não tem conta?</TextAccount>
                <LinkBlue onPress={() => navigation.navigate("CreateAccount")}>Crie uma conta agora!</LinkBlue>
            </LinksText>

        </Container>
    );
}

export default Login;