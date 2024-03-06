import styled from "styled-components";

export const DefaultText = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: ${props => (props.fontSize ? props.fontSize + "px" : "14px")};
    color: ${(props) => props.colorTxt === "blue" ? "#496BBA" : "#5F5C6B"};
    text-align: center;
    width: 88%;
`

export const TextShowPassword = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 14px;
    color: #000000;

    margin-left: 6px
`

export const TextWelcome = styled(DefaultText)`
    text-align: start;
`