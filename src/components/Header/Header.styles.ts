import { Dimensions } from "react-native"
import styled from "styled-components/native"

const { width } = Dimensions.get('window')

export const Container = styled.View`
  width: 100%;
  height: 23%;
  padding: 40px 27px 20px 24px;
  background-color: #711AD0;
  justify-content: space-around;
`

export const Ionicons = styled.View`
  marginRight: 116px;
  padding: 10px;
`

export const UpperView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const UserIconView = styled.View`
  height: 37px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: #A75DD8;
`

export const OptionsIcon = styled.View`
  flex-direction: row;
`

export const TextHello = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`

export const AccountView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const TotalBalance = styled.View`
  padding: 24px;
`

export const Total = styled.Text`
  font-size: 23px;
  font-weight: 700;
  margin-top: 10px;
`

export const Titulo = styled.Text`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 9px;
`

export const BalanceTotalNotVisible = styled.View`
  margin-top: 10px;
  height: 33px;
  width: 75%;
  background-color: #c1bec9;
`

export const OptionBox = styled.TouchableOpacity`
  align-items: center;
  margin-right: 10px;
`

export const OptionIcon = styled.View`
  height: 75px;
  width: 75px; 
  background-color: #e6e6e6;
  border-radius: 99px;
  align-items: center;
  justify-content: center;
`

export const OptionText = styled.Text`
  font-weight: 700;
  font-size: 14px;
`
