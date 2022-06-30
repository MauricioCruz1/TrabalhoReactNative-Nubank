import React from 'react'
import { CardBlog } from '../../components/CardBlog/CardBlog'
import { CardMyCards } from '../../components/CardMyCards/CardMyCards'
import { Header } from '../../components/Header/Header'

import {ScrollView, StyleSheet, Text} from 'react-native'

import { Container, CardMyCardsView, CardBlogView, CardBlogItem, CardValue, CardValueNow, Touchable } from './Nubank.styles'

import{Ionicons} from '@expo/vector-icons'

export function Nubank() {
  return(
    <Container>
      <Header />
      <CardMyCardsView>
        <CardMyCards />
      </CardMyCardsView>

      <CardBlogView>
        <ScrollView 
          horizontal 
          contentContainerStyle={{ paddingHorizontal: 24 }}
          showsHorizontalScrollIndicator={false}
        >
          <CardBlogItem>
            <CardBlog link='#' 
            text={
              <Text style={styles.textBlack}>Conheça a
                <Text style={styles.textPurple}> conta PJ:</Text> prática e livre de burocracia para se...
              </Text>} />
          </CardBlogItem>
          <CardBlogItem>
            <CardBlog link='#' 
            text={
              <Text style={styles.textBlack}>Salve seus amigos da burocracia. 
                <Text style={styles.textPurple}> Faça um convit...</Text>
              </Text>} />
          </CardBlogItem>
          
        </ScrollView>
      </CardBlogView>

      <CardValue>

        <CardValueNow>
          <Text style={styles.newTitle}>Cartão de crédito</Text>
          <Ionicons name='chevron-forward' size={27} />
        </CardValueNow>

        <Text style={styles.newValue}>Fatura atual</Text>
        <Text style={styles.title}>R$ 20.000,00</Text>
        <Text style={styles.newValueX}>Limite disponível de R$ 100.000,00</Text>

        <Touchable>
          <Text style={styles.textButton}>Parcelar compras</Text>
        </Touchable>
      </CardValue>
    </Container>
  )
}

const styles = StyleSheet.create({
  textBlack: {
    color: '#000'
  },
  textPurple: {
    color: '#820AD1'
  },
  newTitle:{
    fontSize: 23,
    fontWeight: 'bold',
  },
  newValue:{
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 22,
    color:'#696969'
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8
  },
  newValueX:{
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color:'#696969'  
  },
  textButton:{
    fontSize: 16,
    fontWeight: 'bold',

  }

})