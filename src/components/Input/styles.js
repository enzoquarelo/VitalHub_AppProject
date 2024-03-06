import styled from "styled-components/native";

export const Input = styled.TextInput.attrs(props => ({
    placeholderTextColor: "#34898F"
}))`
    width:88%;
    height:53px;
    border: 2px #49B3BA solid;
    border-radius: 5px;
    padding-left: 16px;

    color: #34898F;
    font-family: "MontserratAlternates_600SemiBold";
    font-size: ${props => (props.fontSize ? props.fontSize + "px" : "18px")};
`

export const InputCode = styled.TextInput.attrs(props => ({
    placeholderTextColor: "#34898F"
}))`
    width: 62px;
    height: 62px;

    border: 2px #49B3BA solid;
    border-radius: 5px;

    color: #34898F;
    font-family: "Quicksand_600SemiBold";
    font-size: ${props => (props.fontSize ? props.fontSize + "px" : "40px")};

    text-align: center;
`

export const InputDark = styled.TextInput.attrs(props => ({
    placeholderTextColor: "#33303E"
}))`
    width:88%;
    height:53px;

    border-radius: 5px;

    background-color: #F5F3F3;
    color: #33303E;
    font-family: "MontserratAlternates_500Medium";
    font-size: ${props => (props.fontSize ? props.fontSize + "px" : "14px")};

    text-align: start;
    padding-left: 15px;
`
export const InputDarkSmall = styled(InputDark)`
    width: 144px;
`
export const BigInputDark = styled(InputDark)`
    height: 120px;

    padding: 15px;
    text-align-vertical: top;
`

export const BigInput = styled(Input)`
    width: 88%;
    height: 120px;

    padding-top: 16px;

    text-align-vertical: top;
`

export const TitleInput = styled.Text`
    width: 88%;
    color: "#000000";

    font-family: "Quicksand_600SemiBold";
    font-size: ${props => (props.fontSize ? props.fontSize + "px" : "24px")};

    display: flex;
    align-items: flex-start;
`