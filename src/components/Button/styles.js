import styled from "styled-components/native";

export const CustomButton = styled.TouchableOpacity`
    width: 88%;
    height: 53px;

    border: ${(props) => props.borderBtn ? "2px solid #496BBA" : "none"};
    background-color: ${(props) => props.backgroundBtn ? "#FFFFFF" : "#496BBA"};
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const SmallButton = styled(CustomButton)`
    width: 46%;

    background-color: #49B3BA;
    border: none;
`

export const ContainerButtonsRow = styled.View`
    width: 88%;
    height: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;
`;

export const TitleButton = styled.Text`
    color: ${(props) => props.colorTxt ? "#496BBA" : "#FFFFFF"};

    font-family: "MontserratAlternates_700Bold";
    font-size: ${props => (props.fontSize ? props.fontSize + "px" : "18px")};
`;

export const SelectableButton = styled(CustomButton)`
    width: 30%;
    height: 40px;
    ${(props) => props.selected && `
        background-color: #496BBA; 
        border: 2px solid #496BBA; 
    `}
`;

export const SelectableTitleButton = styled(TitleButton)`
    ${(props) => props.selected && `
        color: white;
    `}
`;

export const SelectableButtonAppointment = styled.TouchableOpacity`
    width: 30%;
    height: 40px;
    border: 2px solid #60BFC5;

    ${(props) => props.selected && `
        background-color: #60BFC5; 
        border: 2px solid #60BFC5; 
    `}
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SelectableTitleButtonAppointment = styled.Text`
    color: #34898F;
    ${(props) => props.selected && `
        color: #FFFFFF;
    `}

    font-family: "MontserratAlternates_700Bold";
    font-size: ${props => (props.fontSize ? props.fontSize + "px" : "18px")};
`;


export const ButtonSecondary = styled(CustomButton)`
  background-color: transparent ;
  border:none ;
  margin-bottom:30px ;
`

export const ButtonSecundaryTitle = styled(TitleButton)`
  text-transform: capitalize;
  text-decoration: underline;
  color: #344f8f;
`;