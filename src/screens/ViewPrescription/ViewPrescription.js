import { ScrollView } from "react-native"
import { ProfileImage } from "../../components/ProfileImage/style"
import { Container } from "../../components/Container/Container"
import { Title } from "../../components/Title/style"
import { DefaultText } from "../../components/DefaultText/DefaultText"
import { BigInputDark, InputDark, TitleInput } from "../../components/Input/styles"
import { WarningText } from "../../components/WarningText/WarningText"
import { ContainerButtonsRow, SmallButton, TitleButton } from "../../components/Button/styles"

import { View } from "react-native"

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinkBlue } from "../../components/LinksText/style"
import { StatusBar } from "expo-status-bar"


export const ViewPrescription = ({ navigation: { goBack } }) => {
    return (
        <ScrollView>
            <StatusBar style="light"/>

            <ProfileImage source={require("../../../assets/images/doctorImage.jpg")} style={{height: 320}}/>

            <Container>
                <Title fontSize={20} style={{marginTop: 15}}>Nome do Médico</Title>
                    {/* Colocar dentro de um ContainerButtonsRow */}
                        <DefaultText>Ocupação do Médico</DefaultText>
                        <DefaultText>CRM do Médico</DefaultText>
                    {/* Colocar dentro de um ContainerButtonsRow */}

                <TitleInput fontSize={18} style={{marginTop: 15, marginBottom:5}}>Descrição da consulta</TitleInput>
                <BigInputDark
                    placeholder="Exemplo -> O paciente possuí uma infecção no
                    ouvido. Necessário repouse de 2 dias
                    e acompanhamento médico constante"
                    fontSize={16}
                    multiline={true}
                    editable={false}
                />

                <TitleInput fontSize={18} style={{marginTop: 15, marginBottom:5}}>Diagnóstico do Paciente</TitleInput>
                <InputDark
                    placeholder="Exemplo -> Infecção no ouvido"
                    fontSize={16}
                    multiline={true}
                    editable={false}
                />

                <TitleInput fontSize={18} style={{marginTop: 15, marginBottom:5}}>Prescrição Médica</TitleInput>
                <BigInputDark
                    placeholder="Exemplo -> 
                    Medicamento: Advil
                    Dosagem: 50 mg
                    Frequência: 3 vezes ao dia
                    Duração: 3 dias"
                    fontSize={16}
                    multiline={true}
                    editable={false}
                />

                <TitleInput fontSize={18} style={{marginTop: 15, marginBottom:5}}>Exames Médicos</TitleInput>
                <BigInputDark
                    placeholder="Exemplo -> 
                     ! - Nenhuma foto informada"
                    fontSize={16}
                    style={{verticalAlign: "center"}}
                    editable={false}
                />

                <ContainerButtonsRow style={{marginTop: 30, justifyContent:"space-around"}}>
                    <SmallButton>
                        <MaterialCommunityIcons name="camera-plus-outline" size={24} color="white" />
                        <TitleButton fontSize={14} colorTxt={false} style={{ paddingLeft: 8 }}>Enviar</TitleButton>
                    </SmallButton>

                    <WarningText colorVisible={true} style={{paddingRight: 30}}>Cancelar</WarningText>
                </ContainerButtonsRow>

                <View
                    style={{
                        borderBottomWidth: 2,
                        borderBottomColor: 'grey',
                        marginVertical: 10,  // Ajuste conforme necessário
                    }}
                />

                <BigInputDark
                    placeholder="Exemplo ->
                    Resultado do exame de sangue : tudo normal"
                    fontSize={16}
                    multiline={true}
                    editable={false}
                />

                <LinkBlue style={{paddingTop: 30, paddingBottom: 40}} fontSize={16} onPress={() => goBack()}>Voltar</LinkBlue>
            </Container>
        </ScrollView>
    )
}