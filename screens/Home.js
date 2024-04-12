import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import imagem from '../assets/japan.jpg'


export default function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={imagem} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} resizeMode="cover">
        <Text style={{ fontSize: 40, color: 'black', marginBottom: 320, }}>Japão Feudal</Text>
        <TouchableOpacity
          style={{ marginTop: 20, width: 200, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DB2A2A', borderRadius: 15 }}
          onPress={() => navigation.navigate('Pagina')}
        >
          <Text style={{color:'white', fontSize:20, }}>Descubra mais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20, width: 200, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DB2A2A', borderRadius: 15 }}
          onPress={() => navigation.navigate('Sobre')}
        >
          <Text style={{color:'white', fontSize:20, }}>Sobre</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
