import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:40}}>Página Inicial</Text>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('Pagina')}
      >
        <Text>Ir para a Página</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text>Ir para Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}
