import React from "react";

import { Container, ContainerDoubleInput, ContainerInputAndTitle } from "../../components/Container/Container";
import { ProfileImage } from "../../components/ProfileImage/style";
import { BoxNameComponent } from "../../components/BoxName_Profile/BoxNameComponent";
import { InputDark } from "../../components/Input/styles";
import { TitleInput, InputDarkSmall } from "../../components/Input/styles";
import { CustomButton, TitleButton } from "../../components/Button/styles";

import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

const Profile = ({navigation}) => {
    const OnPressSave= () => {
        navigation.navigate('DoctorHome');
      };
    return (
        <ScrollView>
            <ProfileImage source={require('../../../assets/images/ProfileImage_Richard.png')} />

            <Container>
                <BoxNameComponent />

                <TitleInput fontSize={20} style={{ marginTop: 80 }}>Data de nascimento</TitleInput>
                <InputDark
                    placeholder="04/05/1999"
                    fontSize={16}
                    style={{ marginBottom: 15, marginTop: 6 }}
                />

                <TitleInput fontSize={20}>CPF</TitleInput>
                <InputDark
                    placeholder="859********"
                    fontSize={16}
                    style={{ marginBottom: 15, marginTop: 6 }}
                />

                <TitleInput fontSize={20}>Endereço</TitleInput>
                <InputDark
                    placeholder="Rua Vicenso Silva, 987"
                    fontSize={16}
                    style={{ marginBottom: 15, marginTop: 6 }}
                />

                <ContainerDoubleInput>
                    <ContainerInputAndTitle>
                        <TitleInput fontSize={20}>CEP</TitleInput>
                        <InputDarkSmall
                            placeholder="06548-909"
                            fontSize={16}
                        />
                    </ContainerInputAndTitle>

                    <ContainerInputAndTitle>
                        <TitleInput fontSize={20}>Cidade</TitleInput>
                        <InputDarkSmall
                            placeholder="Moema-SP"
                            fontSize={16}
                        />
                    </ContainerInputAndTitle>
                </ContainerDoubleInput>

                <CustomButton onPress={OnPressSave} style={{ marginTop: 20 }}>
                    <TitleButton colorTxt={false}>SALVAR</TitleButton>
                </CustomButton>
            </Container>

            <StatusBar style="light" />
        </ScrollView>
    );
};

export default Profile;