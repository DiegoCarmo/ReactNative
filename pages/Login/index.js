import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Input from './../../componentes/input.js';
import logo from './../../assets/boxlogo.png';

export default function login() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View>
        <Input placeholder='E-mail' />
        <Input placeholder='Senha' senha={true} tipoTeclado='default' />
        <TouchableOpacity style={styles.entrar}>ENTRAR</TouchableOpacity>
      </View>
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: 'contain'
  },
  entrar: {
    width: 100,
    height: 50,
    color: 'white',
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    padding: 10
  }
});
