import styled from "styled-components";

export const WarningText = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: ${props => (props.fontSize ? props.fontSize + "px" : "16px")};
    color: ${(props) => props.colorVisible === true ? "#C81D25" : "transparent"};
`