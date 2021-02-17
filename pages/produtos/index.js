import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import Input from './../../componentes/input.js';
import Nike from './../../assets/Airmag.png';
import Play5 from './../../assets/Play5.png';
import Drone from './../../assets/Drone.png';


export default function produtos() {
  const DADOS = [
    {
      nome: 'Air Mag',
      preco: 999.99,
      imagem: Nike
    },
    {
      nome: 'Play5',
      preco: 4.999,
      imagem: Play5
    },
    {
      nome: 'Drone',
      preco: 3.999,
      imagem: Drone
    }
  ]
  function produto({ item }) {
    return <View style={styles.produtoBox}>
      <View style={styles.produtoboxBG}>
        <Image source={item.imagem} style={styles.produtoImagem} />
        <View style={styles.produtoboxText}>
          <Text style={styles.produtoNome}>Air MAG</Text>
          <Text style={styles.preco}> Preço: {item.preco}</Text>
        </View>
      </View>
    </View>
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'white', marginVertical: 10 }}> Produtos ! </Text>

      <FlatList
        style={{ width: '100%' }}
        data={DADOS}
        renderItem={produto}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  produtoBox: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  produtoboxBG: {
    width: '80%',
    backgroundColor: 'rgba(255,255,255, .3)',
    paddingBottom: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,.3)',

  },
  produtoNome: {
    fontSize: 24,
    textAlign: 'center'
  },
  preco: {
    textAlign: 'center'
  },
  produtoImagem: {
    width: '100%',
    resizeMode: 'contain',
    height: 200
  },
});
