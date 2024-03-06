import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/style";
import { CustomButton, TitleButton } from "../../components/Button/styles";
import { LinkBlue } from "../../components/LinksText/style";
import { ClinicCard } from "../../components/Cards/ClinicCard/ClinicCard";

import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const SelectClinic = ({ navigation: { goBack } }) => {
    const clinicData = [
        { nameClinic: "Clínica Natureh", locate: " São Paulo, SP", assessment: "4,8", workingDays: "Seg-Sex" },
        { nameClinic: "Diamond Pró-Mulher", locate: " São Paulo, SP", assessment: "4,5", workingDays: "Seg-Sex" },
        { nameClinic: "Clinica Villa Lobos", locate: " Taboão, SP", assessment: "4,2", workingDays: "Seg-Sáb" },
        { nameClinic: "SP Oncologia Clínica", locate: " Taboão, SP", assessment: "4,2", workingDays: "Seg-Sáb" },
    ];

    const navigation = useNavigation();

    return (
        <Container>
            <StatusBar/>

            <Title style={{ marginBottom: 45}} fontSize={24}>Selecionar Clínica</Title>

            {clinicData.map((data, index) => (
                <ClinicCard
                    key={index}
                    nameClinic={data.nameClinic}
                    locate={data.locate}
                    assessment={data.assessment}
                    workingDays={data.workingDays}
                />
            ))}

            <CustomButton style={{ marginTop: 60 }} onPress={() => navigation.navigate("SelectDoctor")}>
                <TitleButton colorTxt={false}>CONTINUAR</TitleButton>
            </CustomButton>

            <LinkBlue style={{ marginTop: 20 }} fontSize={18} onPress={() => goBack()}>Cancelar</LinkBlue>
        </Container>
    );
};

export default SelectClinic;