import { React, useState } from "react";
import { StatusBar } from "expo-status-bar";

// Import dos Components
import { ContainerDefault } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { PatientCard } from "../../components/Cards/PatientCard/PatientCard";
import { SelectableButton, SelectableTitleButton, ContainerButtonsRow } from "../../components/Button/styles";
import CalendarList from "../../components/Calendar/Calendar";

// Import dos Modais
import { CancellingModal } from "../../components/Modais/CancellingModal/CancellingModal";
import { AppointmentModal } from "../../components/Modais/AppointmentModal/AppointmentModal";

export const DoctorHome = () => {

    const [selectedButton, setSelectedButton] = useState('button1');
    const [selectedCardData, setSelectedCardData] = useState(null);

    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };

    // Arrays temporários para a exibição dos card com dados mocados
    const scheduledData = [
        { name: 'Eduardo Costa', age: '40 anos', reason: 'Exame', time: '12:30', image: "https://avatars.githubusercontent.com/u/29419052?v=4" },
        { name: 'Enzo Quarelo', age: '17 anos', reason: 'Rotina', time: '14:00', image: "https://avatars.githubusercontent.com/u/125266412?v=4" },
        { name: 'Kamile', age: '20 anos', reason: 'Urgência', time: '05:00', image: "https://avatars.githubusercontent.com/u/125273621?v=4" },
    ];

    const completedData = [
        { name: 'Gabriela', email: 'gabriela.ramos@gmail.com', age: '18 anos', reason: 'Urgência', time: '09:00', image: "https://avatars.githubusercontent.com/u/125273752?v=4" },
        { name: 'Rebeca Carolina', email: 'carolina.rebeca@gmail.com', age: '17 anos', reason: 'Rotina', time: '14:00', image: "https://avatars.githubusercontent.com/u/125309990?v=4" },
    ];

    const canceledData = [
        { name: 'Júlia Athar', age: '18 anos', reason: 'Rotina', time: '18:00', image: "https://avatars.githubusercontent.com/u/125266093?v=4" },
    ];


    const getSelectedData = () => {
        switch (selectedButton) {
            case 'button1':
                return scheduledData;
            case 'button2':
                return completedData;
            case 'button3':
                return canceledData;
            default:
                return [];
        }
    };

    return (
        <ContainerDefault>

            <Header imageHeader="https://avatars.githubusercontent.com/u/125275514?v=4" profileName="Dr. Paulo" />

            <CalendarList />

            <ContainerButtonsRow>
                <SelectableButton
                    selected={selectedButton === 'button1'}
                    onPress={() => handleButtonPress('button1')}
                    borderBtn={true}
                    backgroundBtn="white"
                >
                    <SelectableTitleButton
                        colorTxt="white"
                        fontSize={14}
                        selected={selectedButton === 'button1'}
                    >
                        Agendadas
                    </SelectableTitleButton>
                </SelectableButton>

                <SelectableButton
                    selected={selectedButton === 'button2'}
                    onPress={() => handleButtonPress('button2')}
                    borderBtn={true}
                    backgroundBtn="#496BBA"
                >
                    <SelectableTitleButton
                        colorTxt="white"
                        fontSize={14}
                        selected={selectedButton === 'button2'}
                    >
                        Realizadas
                    </SelectableTitleButton>
                </SelectableButton>

                <SelectableButton
                    selected={selectedButton === 'button3'}
                    onPress={() => handleButtonPress('button3')}
                    borderBtn={true}
                    backgroundBtn="#496BBA"
                >
                    <SelectableTitleButton
                        colorTxt="white"
                        fontSize={14}
                        selected={selectedButton === 'button3'}
                    >
                        Canceladas
                    </SelectableTitleButton>
                </SelectableButton>

            </ContainerButtonsRow>

            {getSelectedData().map((data, index) => (
                <PatientCard
                    key={index}
                    name={data.name}
                    age={data.age}
                    reason={data.reason}
                    time={data.time}
                    image={data.image}
                    onPressCancel={() => {
                        setShowModalCancel(true);
                        setSelectedCardData(data);
                    }}
                    onPressAppointment={() => {
                        setShowModalAppointment(true);
                        setSelectedCardData(data);
                    }}
                    selectedButton={selectedButton}
                    customColor={selectedButton === 'button2' || selectedButton === 'button3' ? '#F1F0F5' : null}
                    clockColor={selectedButton === 'button2' || selectedButton === 'button3' ? '#4E4B59' : null}
                    colorTextTime={selectedButton === 'button2' || selectedButton === 'button3' ? '#4E4B59' : null}
                />
            ))}

            <CancellingModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            {selectedCardData && (
                <AppointmentModal
                    visible={showModalAppointment}
                    setShowModalAppointment={setShowModalAppointment}
                    data={selectedCardData}
                />
            )}

            <StatusBar style="light" />

        </ContainerDefault>
    )
}