import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import japao from '../assets/japan'

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={japao}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 40, marginBottom: 250, color: 'white' }}>Japão Feudal</Text>
        <TouchableOpacity
          style={{ marginTop: 20, width: 200, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DDDDDD', borderRadius: 15 }}
          onPress={() => navigation.navigate('Pagina')}
        >
          <Text>Descubra mais aqui</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20, width: 200, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DDDDDD', borderRadius: 15 }}
          onPress={() => navigation.navigate('Sobre')}
        >
          <Text>Sobre</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
