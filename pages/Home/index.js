import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Input from './../../componentes/input.js';
import logo from './../../assets/boxlogo.png';

export default function Home(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.boxlogin}>
        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('login')}>
          <Text style={styles.entrar}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('produtos')}>
          <Text style={styles.entrar}>Produtos</Text>
        </TouchableOpacity>
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
    width: 200,
    height: 150,
    resizeMode: 'contain'
  },
  entrar: {
    width: 100,
    heigth: 100,
    color: 'white',
    backgroundColor: 'grey',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    textAlign: 'center'

  },


  boxlogin: {
    width: 250,
    height: 150,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.5)'
  }

});
