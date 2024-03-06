import styled from "styled-components/native";

export const PatientCardContainer = styled.View`
    width: 88%;
    height: 105px;

    background-color: #FFFFFF;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    elevation: 4;

    margin-bottom:15px;
`

export const ImagePatient = styled.Image`
    width:77px;
    height: 80px;

    border-radius: 5px;
`

export const ContainerData = styled.View`
    display: flex;

    margin-left: -20px;
`

export const ConatinerNameAndReason = styled.View`
    width: 212px;
    
    display: flex;
    flex-direction:row;
    align-items:center;
`

export const AgeText = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 14px;
    color: #8C8A97;
`

export const Dot = styled.Text`
  font-size: 20px;
  color: gray; 
  margin-right: 5px;
  margin-left: 5px;
  margin-top: -8px;
`

export const ReasonConsultation = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 16px;
    color: #8C8A97;
`

export const ContainerTimeAndCancel = styled.View`
    width: 212px;

    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;

    margin-top: 10px;
`

export const TimeCard = styled.View`
    width: 100px;
    height: 26px;

    border-radius: 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const TimeText = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 17px;

    margin-left: 10px;
    margin-bottom: 3px;
`

export const RecordText = styled.Text`
    font-family: 'MontserratAlternates_500Medium';
    font-size:14px;
`
export const CancelText = styled.Text`
    font-family: 'MontserratAlternates_500Medium';
    font-size:14px;

    padding: 8px;
`