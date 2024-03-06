import React from "react";
import { BoxName } from "./style";
import { Title } from "../Title/style";
import { DefaultText } from "../DefaultText/DefaultText";

export const BoxNameComponent = () => {
    return (
        <BoxName>
            <Title fontSize={20}>Richard Kosta</Title>
            <DefaultText fontSize={16}>richard.kosta@gmail.com</DefaultText>
        </BoxName>
    );
};