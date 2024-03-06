import { React, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Modal } from 'react-native';
import { Title } from '../../Title/style';
import { QueryModal, ModalContent } from './style';
import { CustomButton, TitleButton, ButtonSecondary, ButtonSecundaryTitle, SelectableButtonAppointment, SelectableTitleButtonAppointment, ContainerButtonsRow} from '../../Button/styles';
import { TitleInput, Input } from '../../Input/styles';

export const QueryModalComponent = ({ visible, setShowModalQuery, ...rest}) => {

    const navigation = useNavigation();

    const [selectedButton, setSelectedButton] = useState('button1');

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };
    const onPressSelectClinic = () => {
        setShowModalQuery(false);
        
        navigation.navigate("SelectClinic")
      }

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <QueryModal>
                <ModalContent>
                    <Title style={{ marginBottom: 40 }}>Agendar consulta</Title>

                    <TitleInput fontSize={18}>Qual o nível da consulta</TitleInput>
                    <ContainerButtonsRow>
                        <SelectableButtonAppointment
                            selected={selectedButton === 'button1'}
                            onPress={() => handleButtonPress('button1')}
                            borderBtn={true}
                            backgroundBtn="white"
                        >
                            <SelectableTitleButtonAppointment
                                colorTxt="white"
                                fontSize={14}
                                selected={selectedButton === 'button1'}
                            >
                                Rotina
                            </SelectableTitleButtonAppointment>
                        </SelectableButtonAppointment>

                        <SelectableButtonAppointment
                            selected={selectedButton === 'button2'}
                            onPress={() => handleButtonPress('button2')}
                            borderBtn={true}
                            backgroundBtn="#496BBA"
                        >
                            <SelectableTitleButtonAppointment
                                colorTxt="white"
                                fontSize={14}
                                selected={selectedButton === 'button2'}
                            >
                                Exames
                            </SelectableTitleButtonAppointment>
                        </SelectableButtonAppointment>

                        <SelectableButtonAppointment
                            selected={selectedButton === 'button3'}
                            onPress={() => handleButtonPress('button3')}
                            borderBtn={true}
                            backgroundBtn="#496BBA"
                        >
                            <SelectableTitleButtonAppointment
                                colorTxt="white"
                                fontSize={14}
                                selected={selectedButton === 'button3'}
                            >
                                Urgência
                            </SelectableTitleButtonAppointment>
                        </SelectableButtonAppointment>

                    </ContainerButtonsRow>

                    <TitleInput fontSize={18}>Informe a localização desejada</TitleInput>
                    <Input
                        placeholder="Informe a localização"
                        fontSize={16}
                        style={{ marginTop: 8, marginBottom: 100 }}
                    />

                    <CustomButton onPress={onPressSelectClinic}>
                        <TitleButton>CONTINUAR</TitleButton>
                    </CustomButton>

                    <ButtonSecondary onPress={() => setShowModalQuery(false)}>
                        <ButtonSecundaryTitle>Cancelar</ButtonSecundaryTitle>
                    </ButtonSecondary>
                </ModalContent>
            </QueryModal>
        </Modal>
    );
};