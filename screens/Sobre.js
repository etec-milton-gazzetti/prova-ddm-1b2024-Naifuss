import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import imagem from '../assets/japan.jpg';
import { useFonts } from '@expo-google-fonts/inter';


export default function Home({ navigation }) {
  const [fontLoaded] = useFonts({ 'Fonte': require('../assets/fonts/inter.ttf') });

  return (
    <ImageBackground source={imagem} style={styles.container} resizeMode="cover">
      <Text style={styles.titulo}>Sobre</Text>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.texto}>Nome: Gabriel Henrique Lima</Text>
        <Text style={styles.texto}>RM: 07607</Text>
        <Text style={styles.textoemail}>E-mail: gabriel.pardini2@etec.sp.gov.br</Text>
      </View>
      
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    paddingTop: 80,
    paddingBottom: 80,
    alignSelf: 'center',
    fontSize: 50,
    color: 'white',
    
  },
  texto: {
    paddingTop: 10,
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
   
  },
  botao: {
    backgroundColor: '#DB2A2A',
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
  textoemail:{
    paddingTop: 10,
    alignSelf: 'center',
    fontSize: 18,
    color: 'black',

  }
});
