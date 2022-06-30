import React from 'react';
import { ContainerLogin, Title } from './Login.styles';
import {TextInput, StyleSheet} from 'react-native'

function Login (){
  return(
      <ContainerLogin>
         <Title>Nubank</Title>
          <TextInput placeholder="Usar senha do celular" placeholderTextColor="#000000" style={styles.input}>
          </TextInput> 
      </ContainerLogin>
  
  )
}

const styles = StyleSheet.create({
   input:{
    backgroundColor: '#e6e6e6',
    fontSize:20,
    borderRadius:25,
    marginLeft: 10,
    marginTop: 200,
    marginRight: 20,
    padding: 30,
    
   }
})



export default Login;
