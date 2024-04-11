import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      
      <Text style={styles.titulo}>Sobre</Text>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.texto}>Nome: Gabriel Henrique</Text>
        <Text style={styles.texto}>Sala: 2º Info</Text>
        <Text style={styles.texto}>RM: 07607</Text>
      </View>
      
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  foto: {
    width: '50%',
    height: '50%',
    borderRadius: 200,
    paddingBottom: 100,
  },
  titulo: {
    paddingTop: 100,
    paddingBottom: 170,
    alignSelf: 'center',
    fontSize: 50,
    color: 'black',
  },
  texto: {
    paddingTop: 10,
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
