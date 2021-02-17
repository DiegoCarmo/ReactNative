import React from 'react';
import { TextInput, StyleSheet } from 'react-native'

export default function input({ placeholder, senha = false, tipoTeclado = 'email-address' }) {
  return <TextInput style={css.input} placeholder={placeholder} secureTextEntry={senha} keyboardType={tipoTeclado} />
}
const css = StyleSheet.create({
  input: {
    width: 300,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 30,
    fontSize: 30
  }
})


