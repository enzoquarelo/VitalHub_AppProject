import { useNavigation } from "@react-navigation/native";

import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/style";
import { CustomButton, TitleButton } from "../../components/Button/styles";
import { LinkBlue } from "../../components/LinksText/style";
import { DoctorCard } from "../../components/Cards/DoctorCard/DoctorCard";
import { StatusBar } from "expo-status-bar";

const SelectDoctor = ({ navigation: { goBack } }) => {
    const doctorData = [
        {nameDoctor: "Lucas Gonsalvez", aboutDoctor: "Dermatoloista, Urologista", imageDoctor: "https://media.licdn.com/dms/image/D4D03AQFiDTm-w3_4wg/profile-displayphoto-shrink_400_400/0/1696638603566?e=1714003200&v=beta&t=1AFKZjWrgNhAM-xBLP-nKaKLOPoPp1GG--maNLCvmZA"},
        {nameDoctor: "Evelyn dos Santos", aboutDoctor: "Terapeuta, Socioemocional", imageDoctor: "https://avatars.githubusercontent.com/u/125275736?v=4"},
        {nameDoctor: "Paulo Gonsalvez", aboutDoctor: "Cardiologista, Cirurgião Geral", imageDoctor: "https://avatars.githubusercontent.com/u/125275514?v=4"}
    ];

    const navigation = useNavigation();

    return (
        <Container>
            <StatusBar/>

            <Title style={{ marginBottom: 45}} fontSize={24}>Selecionar Médico</Title>

            {doctorData.map((data, index) => (
                <DoctorCard
                    key={index}
                    nameDoctor={data.nameDoctor}
                    aboutDoctor={data.aboutDoctor}
                    imageDoctor={data.imageDoctor}
                />
            ))}

            <CustomButton style={{ marginTop: 60 }} onPress={() => navigation.navigate("SelectDate")} >
                <TitleButton colorTxt={false}>CONTINUAR</TitleButton>
            </CustomButton>

            <LinkBlue style={{ marginTop: 20 }} fontSize={18} onPress={() => goBack()}>Cancelar</LinkBlue>
        </Container>
    );
};

export default SelectDoctor;