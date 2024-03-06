import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
`
export const ContainerShowPassword = styled.View`
    width: 87%;
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 8px;
`

export const ContainerDefault = styled.SafeAreaView`
    flex:1;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;

    display:flex;
    align-items: center;
`

export const ContainerCodeInputs = styled.View`
 width: 300px;
 height: 62px;

 display: flex;
 flex-direction: row;
 justify-content:space-between;
`

export const ContainerDoubleInput = styled.View`
 width: 88%;
 height: 83px;

 display: flex;
 justify-content: space-between;
 flex-direction: row;
`

export const ContainerInputAndTitle = styled.View`
    width: 144px;
    height: 83px;

    display: flex;
    justify-content: space-between;
`