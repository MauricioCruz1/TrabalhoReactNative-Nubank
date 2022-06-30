import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'

import { 
  Container,
  UpperView,
  UserIconView,
  OptionsIcon,
  TextHello,
  Total,
  AccountView,
  Titulo,
  BalanceTotalNotVisible,
  TotalBalance,
  OptionBox,
  OptionIcon,
  OptionText
} from './Header.styles'

import { Ionicons } from '@expo/vector-icons'
 
export function Header() {
  const [showBalance, setShowBalance] = useState(false)

  return(
    <>
      <Container>
        <UpperView>
          <UserIconView>
            <Ionicons name='person-outline' size={20} color="#ffffff" />
          </UserIconView>      

          <OptionsIcon>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              {showBalance ? (
                <Ionicons name='eye-outline' size={25} color="#ffffff" />
                ) : (
                <Ionicons name='eye-off-outline' size={25} color="#ffffff" />
              )}
            </TouchableOpacity>
            <Ionicons name='help-circle-outline' size={25} color="#ffffff" />
            <Ionicons name='mail-outline' size={25} color="#ffffff" />
          </OptionsIcon>
        </UpperView>

        <TextHello>
          Olá, Maurício
        </TextHello>
      </Container>
      
      <TotalBalance>
          <AccountView>
            <Titulo>Conta</Titulo>

            <Ionicons name='chevron-forward-outline' size={23} color="grey" />
          </AccountView>

          {showBalance ? (
            <Total>R$ 1.000.000,00</Total>
          ) : (
            <BalanceTotalNotVisible />
          )}
    </TotalBalance>

    <View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 20, paddingRight: 45 }}
      >
        <OptionBox>
          <OptionIcon>
            <Ionicons name='cash-outline' size={27} color="#000000" />
          </OptionIcon>

          <OptionText>Área Pix</OptionText>
        </OptionBox>

        <OptionBox>
          <OptionIcon>
            <Ionicons name='cash-outline' size={27} color="#000000" />
          </OptionIcon>

          <OptionText>Pagar</OptionText>
        </OptionBox>

        <OptionBox>
          <OptionIcon>
            <Ionicons name='cash-outline' size={27} color="#000000" />
          </OptionIcon>

          <OptionText>Transferir</OptionText>
        </OptionBox>

        <OptionBox>
          <OptionIcon>
            <Ionicons name='cash-outline' size={27} color="#000000" />
          </OptionIcon>

          <OptionText>Depositar</OptionText>
        </OptionBox>

        <OptionBox>
          <OptionIcon>
            <Ionicons name='cash-outline' size={27} color="#000000" />
          </OptionIcon>

          <OptionText>Recargar de celular</OptionText>
        </OptionBox>

        <OptionBox>
          <OptionIcon>
            <Ionicons name='cash-outline' size={27} color="#000000" />
          </OptionIcon>

          <OptionText>Cobrar</OptionText>
        </OptionBox>

        <OptionBox>
          <OptionIcon>
            <Ionicons name='cash-outline' size={27} color="#000000" />
          </OptionIcon>

          <OptionText>Doação</OptionText>
        </OptionBox>

        <OptionBox>
          <OptionIcon>
            <Ionicons name='cash-outline' size={27} color="#000000" />
          </OptionIcon>

          <OptionText>Tranferir internac.</OptionText>
        </OptionBox>

        <OptionBox>
          <OptionIcon>
            <Ionicons name='cash-outline' size={27} color="#000" />
          </OptionIcon>

          <OptionText>Investir</OptionText>
        </OptionBox>
      </ScrollView>
    </View>
    </>
  )
}