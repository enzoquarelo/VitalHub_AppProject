import React from 'react';
import { Modal } from 'react-native';

// Components
import { Title } from '../../Title/style';
import {
  ModalContent,
  ModalText,
  PatientModal,
  ImagePatientModal,
} from './style';
import {
  CustomButton,
  TitleButton,
  ButtonSecondary,
  ButtonSecundaryTitle,
} from '../../Button/styles';

// Navegaçãp prontuário
import { useNavigation } from '@react-navigation/native';

export const AppointmentModal = ({ visible, setShowModalAppointment, data, ...rest }) => {

  const navigation = useNavigation();

  const onPressAppointment = () => {
    setShowModalAppointment(false);
    
    navigation.navigate("Appointment")
  }
  
  const { name, age, email, image } = data;

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <ImagePatientModal source={{ uri: image }} />

          <Title style={{ marginTop: 20 }}>{name}</Title>

          <ModalText>{age}  -  {email}</ModalText>

          <CustomButton
            style={{ marginTop: 10 }}
            onPress={onPressAppointment}
          >
            <TitleButton>Inserir prontuário</TitleButton>
          </CustomButton>

          <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
            <ButtonSecundaryTitle>Cancelar</ButtonSecundaryTitle>
          </ButtonSecondary>

        </ModalContent>
      </PatientModal>
    </Modal>
  );
};