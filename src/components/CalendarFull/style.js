import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],

    monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov.', 'Dez'],

    dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],

    dayNamesShort: ['Seg', 'Ter', 'Qua.', 'Quin', 'Sex', 'Sab', 'Dom'],
};

export const CalendarFull = () => {

    const [selected, setSelected] = useState('')

    return (
        <Calendar
            style={{
                width: 318,
                backgroundColor: 'transparent'
            }}
            onDayPress={day => {
                setSelected(day.dateString);
            }}
            hideArrows={true}

            theme={{
                selectedDayBackgroundColor: '#49B3BA', 
                selectedDayTextColor: '#FFFFFF',
                dayBackgroundColor: 'transparent'
            }}

            markedDates={{
                [selected]: { selected: true, disableTouchEvent: true }
            }}
        />
    )


}