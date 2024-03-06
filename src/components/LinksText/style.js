import styled from "styled-components";

export const LinksText = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
`
export const TextAccount = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: ${props => (props.fontSize ? props.fontSize + "px" : "14px")};
    margin-left: 5px;
`
export const LinkBlue = styled(TextAccount)`
    color: #4D659D;
    text-decoration: underline;
`
export const LinkRed = styled(TextAccount)`
    color: #C81D25;
    text-decoration: underline;
`