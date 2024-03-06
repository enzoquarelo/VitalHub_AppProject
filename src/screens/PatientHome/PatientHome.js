import { React, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
// Components
import { Header } from "../../components/Header/Header";
import { ContainerDefault } from "../../components/Container/Container";
import { PatientCard } from "../../components/Cards/PatientCard/PatientCard";
import { SelectableButton, SelectableTitleButton, ContainerButtonsRow } from "../../components/Button/styles";
import { ScheduleAppointment } from "../../components/ScheduleAppointment/ScheduleAppointment";
import CalendarList from "../../components/Calendar/Calendar";
// Modal
import { CancellingModal } from "../../components/Modais/CancellingModal/CancellingModal"
import { AppointmentModal } from "../../components/Modais/AppointmentModal/AppointmentModal";
import { QueryModalComponent } from "../../components/Modais/QueryModal/QueryModal";

export const PatientHome = ({navigation}) => {

    const [selectedButton, setSelectedButton] = useState('button1');
    const [selectedCardData, setSelectedCardData] = useState(null);

    // States dos Modais
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalQuery, setShowModalQuery] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };

    // Arrays temporários para exibir cards com dados mocados
    const scheduledData = [
        { name: 'Dr. Lucas', age: '20 anos', reason: 'Dermatologista', time: '12:30', image: "https://media.licdn.com/dms/image/D4D03AQFiDTm-w3_4wg/profile-displayphoto-shrink_400_400/0/1696638603566?e=1714003200&v=beta&t=1AFKZjWrgNhAM-xBLP-nKaKLOPoPp1GG--maNLCvmZA" },
    ];

    const completedData = [
        { name: 'Dr. Evelyn', email: 'evelyn.dr@gmail.com', age: '18 anos', reason: 'Terapeuta', time: '09:00', image: "https://avatars.githubusercontent.com/u/125275736?v=4" },
    ];

    const canceledData = [
        { name: 'Dr. Paulo', age: '23 anos', reason: 'Cardiologista', time: '17:00', image: "https://avatars.githubusercontent.com/u/125275514?v=4" },
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

            <Header imageHeader="https://avatars.githubusercontent.com/u/29419052?v=4" profileName="Paciente Edu" />

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
                    onPressPrescription={() => navigation.navigate("ViewPrescription")}
                    selectedButton={selectedButton}
                    customColor={selectedButton === 'button2' || selectedButton === 'button3' ? '#F1F0F5' : null}
                    clockColor={selectedButton === 'button2' || selectedButton === 'button3' ? '#4E4B59' : null}
                    colorTextTime={selectedButton === 'button2' || selectedButton === 'button3' ? '#4E4B59' : null}
                />
            ))}
            
            <ScheduleAppointment onPress={() => {
                setShowModalQuery(true);
            }} />

            {/* Modais */}
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

            <QueryModalComponent
                visible={showModalQuery}
                setShowModalQuery={setShowModalQuery}
            />

            <StatusBar style="light" />

        </ContainerDefault>
    )
}