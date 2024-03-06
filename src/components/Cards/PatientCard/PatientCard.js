import React from "react";
import { Title } from "../../Title/style";
import {
    PatientCardContainer,
    ImagePatient,
    ContainerData,
    ReasonConsultation,
    ContainerTimeAndCancel,
    TimeCard,
    TimeText,
    ConatinerNameAndReason,
    Dot,
    AgeText,
    CancelText,
    RecordText,
} from "./styles";

import { AntDesign } from "@expo/vector-icons";
import { useNavigationState } from '@react-navigation/native';


export const PatientCard = ({ name, age, reason, time, image, customColor, clockColor, colorTextTime, onPressCancel, onPressAppointment, onPressPrescription, selectedButton }) => {
    const navigationState = useNavigationState((state) => state);
    
    const isCancelButton = selectedButton === 'button1';
    const isRecordButton = selectedButton === 'button2' && navigationState.routes[navigationState.index].name === 'DoctorHome';
    const isPrescriptionButton = selectedButton === 'button2' && navigationState.routes[navigationState.index].name === 'PatientHome';


    return (
        <PatientCardContainer>
            <ImagePatient source={{ uri: image }} />

            <ContainerData>
                <Title fontSize={18}>{name}</Title>
                <ConatinerNameAndReason>
                    <AgeText>{age}</AgeText>
                    <Dot>.</Dot>
                    <ReasonConsultation>{reason}</ReasonConsultation>
                </ConatinerNameAndReason>

                <ContainerTimeAndCancel>
                    <TimeCard style={{ backgroundColor: customColor || '#E8FCFD' }}>
                        <AntDesign name="clockcircle" size={14} color={clockColor || "#49B3BA"} />
                        <TimeText style={{ color: colorTextTime || '#49B3BA' }}>{time}</TimeText>
                    </TimeCard>
                    {(isCancelButton) ? (
                        <CancelText onPress={onPressCancel} style={{ color: "#C81D25" }}>Cancelar</CancelText>
                    ) : null}
                    {(isRecordButton) ? (
                        <RecordText onPress={onPressAppointment} style={{ color: "#344F8F" }}>Ver Prontuário</RecordText>
                    ) : null}
                    {(isPrescriptionButton) ? (
                        <RecordText onPress={onPressPrescription} style={{ color: "#344F8F" }}>Ver Prescrição</RecordText>
                    ) : null}
                </ContainerTimeAndCancel>
            </ContainerData>
        </PatientCardContainer>
    );
};