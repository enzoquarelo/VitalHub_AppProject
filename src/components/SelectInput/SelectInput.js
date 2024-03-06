import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';

export const SelectInput = () => {
    const [selectedTime, setSelectedTime] = useState(null); // Estado para armazenar o horário selecionado

    // Gera os horários de 05:00 até 18:30 em intervalos de 30 minutos
    const generateTimeSlots = () => {
        const timeSlots = [];
        for (let hour = 5; hour <= 12; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                timeSlots.push({ label: time, value: time });
            }
        }
        return timeSlots;
    };

    const timeSlots = generateTimeSlots();

    const onValueChange = (value) => {
        setSelectedTime(value);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <RNPickerSelect
                placeholder={{
                    label: selectedTime ? selectedTime : "Selecionar horário",
                    value: null,
                    color: '#34898F'
                }}
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                    return <AntDesign
                        style={{ padding: 16 }}
                        name='caretdown'
                        size={20}
                        color='#34898F'
                    />
                }}
                items={timeSlots}
                onValueChange={onValueChange}
            />
        </View>
    );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: 350,
        height: 53,
        borderColor: '#60BFC5',
        borderWidth: 2,
        borderRadius: 5,
        fontFamily: 'MontserratAlternates_600SemiBold',
        fontSize: 14,
        padding: 16,
    },
    inputAndroid: {
        width: 350,
        height: 53,
        borderColor: '#60BFC5',
        borderWidth: 2,
        borderRadius: 5,
        fontFamily: 'MontserratAlternates_600SemiBold',
        fontSize: 14,
        padding: 16,
    }
});