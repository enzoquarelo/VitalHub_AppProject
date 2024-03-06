import { useState } from "react"

import { Title } from "../../components/Title/style"
import { Container } from "../../components/Container/Container"
import { CalendarFull } from "../../components/CalendarFull/style"
import { TitleInput } from "../../components/Input/styles"
import { SelectInput } from "../../components/SelectInput/SelectInput"

export const SelectDate = () => {
    return (

        <Container>
            <Title>Selecionar Data</Title>

            <CalendarFull/>

            <TitleInput fontSize={18}>Selecione um horário disponível:</TitleInput>
            <SelectInput/>
        </Container>
    )
}