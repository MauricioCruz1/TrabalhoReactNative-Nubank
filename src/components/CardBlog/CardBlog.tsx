import React, { ReactNode } from 'react';

import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native'

type Props = {
  text: ReactNode
  link: string
}

export function CardBlog({ link, text }: Props){
  return (
    <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(link)}>
      {text}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#e6e6e6",
    padding: 16,
    width:250,
    borderRadius:8
  }
})