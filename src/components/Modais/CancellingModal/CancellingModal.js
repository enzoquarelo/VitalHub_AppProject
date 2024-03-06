import { Modal } from "react-native";
import { Title } from '../../Title/style';
import { ModalContent, ModalText, PatientModal } from "./style";
import{ CustomButton, TitleButton, ButtonSecondary ,ButtonSecundaryTitle }from "../../Button/styles";


export const CancellingModal = ({ visible, setShowModalCancel, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <Title>Cancelar consulta</Title>

                    <ModalText>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no
                        seu horário, deseja mesmo cancelar essa consulta?
                    </ModalText>

                    <CustomButton style={{marginTop: 10}}>
                        <TitleButton>Confirmar</TitleButton>
                    </CustomButton>

                    <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                        <ButtonSecundaryTitle>Cancelar</ButtonSecundaryTitle>
                    </ButtonSecondary>
                </ModalContent>
            </PatientModal>
        </Modal>
    );
};