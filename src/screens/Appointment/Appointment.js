import { React, useState } from "react";
import { Container } from "../../components/Container/Container";
import { ProfileImage } from "../../components/ProfileImage/style";
import { BoxNameComponent } from "../../components/BoxName_Profile/BoxNameComponent";
import { TitleInput, BigInput, Input } from "../../components/Input/styles";
import { CustomButton, TitleButton, ButtonSecondary, ButtonSecundaryTitle } from "../../components/Button/styles";

import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { CommonActions } from '@react-navigation/native';

const Appointment = ({ navigation }) => {
    return (
        <ScrollView>
            <ProfileImage source={require('../../../assets/images/ProfileImage_Richard.png')} />

            <Container>
                <BoxNameComponent />

                <TitleInput fontSize={20} style={{ marginTop: 80 }}>Descrição da Consulta</TitleInput>
                <BigInput
                    placeholder="Descrição"
                    fontSize={16}
                    style={{ marginBottom: 15, marginTop: 6 }}
                />

                <TitleInput fontSize={20}>Diagnóstico do paciente</TitleInput>
                <Input
                    placeholder="Diagnóstico"
                    fontSize={16}
                    style={{ marginBottom: 15, marginTop: 6 }}
                />

                <TitleInput fontSize={20}>Prescrição médica</TitleInput>
                <BigInput
                    placeholder="Prescrição médica"
                    fontSize={16}
                    style={{ marginBottom: 15, marginTop: 6 }}
                />

                <CustomButton
                    onPress={() => navigation.goBack()}
                    style={{ marginTop: 20 }}
                >
                    <TitleButton colorTxt={false}>SALVAR</TitleButton>
                </CustomButton>

                <ButtonSecondary onPress={() => navigation.goBack()}>
                    <ButtonSecundaryTitle>Cancelar</ButtonSecundaryTitle>
                </ButtonSecondary>
            </Container>

            <StatusBar style="light" />
        </ScrollView>
    );
};

export default Appointment;