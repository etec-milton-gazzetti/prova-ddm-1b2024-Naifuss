import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, StyleSheet, Text, ImageBackground } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';


export default function PaginaScreen({ navigation }) {
  const [fontLoaded] = useFonts({ 'Fonte': require('../assets/fonts/inter.ttf') });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          style={styles.image}
          source={{uri: 'https://i.pinimg.com/originals/64/3f/ad/643fad45be8d89828237b1123d725c9f.jpg'}}
        />
        {/* Use a fonte personalizada no estilo do texto */}
        <Text style={[styles.textogrande, {textAlign: 'justify', textAlignVertical: 'center', fontFamily: 'Fonte'}]}>
          O Japão feudal é um período fascinante da história japonesa que abrange aproximadamente do século XII ao século XIX. Durante esse tempo, o Japão estava dividido em uma série de estados independentes, cada um governado por senhores feudais conhecidos como daimyos. Esse período foi marcado por uma hierarquia social rígida, guerras constantes e uma cultura única que influenciou profundamente a identidade japonesa moderna.{'\n\n'}
          Um dos aspectos mais distintos do Japão feudal foi o sistema de classes, que era rigidamente estratificado. Na parte mais alta estavam os samurais, guerreiros habilidosos que serviam aos daimyos e seguiam um código de ética conhecido como bushido. Abaixo dos samurais estavam os camponeses, responsáveis pela produção agrícola e considerados a base da sociedade. Finalmente, os artesãos e os comerciantes ocupavam os níveis mais baixos da hierarquia.{'\n\n'}
          As guerras entre os daimyos eram uma característica central do período feudal japonês. Esses conflitos, conhecidos como "sengoku jidai" (período dos Estados Guerreiros), resultaram em um longo período de instabilidade e conflito armado. No entanto, essas guerras também estimularam o desenvolvimento de estratégias militares avançadas e o fortalecimento das fortalezas castelares, conhecidas como "castelos japoneses".{'\n\n'}
          Apesar da estabilidade política, o período Edo também foi caracterizado por um rígido sistema de isolamento, conhecido como sakoku, que restringia severamente o contato com o exterior. No entanto, no século XIX, pressões internas e externas levaram ao colapso do sistema feudal e à restauração do poder imperial no evento conhecido como Restauração Meiji, marcando o fim do período feudal japonês.{'\n\n'}
          O Japão feudal deixou um legado duradouro na cultura e na sociedade japonesas. Seus valores de honra, disciplina e lealdade continuam a influenciar a identidade japonesa moderna, enquanto sua arquitetura, artes e tradições ainda são celebradas em todo o mundo.
        </Text>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao}>
         <Text style={{textAlign: 'center', lineHeight: 50,color: 'white', fontFamily: 'Fonte', fontSize:19,}}>Voltar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9CAFFF',
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 450,
    height: 300,
    marginBottom: 20,
  },
  textogrande: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20, 
    color: 'black', 
    alignContent:'center',
    paddingRight:20,
  },
  botao: {
    position: 'absolute',
    bottom: 20, 
    alignSelf: 'center',
    backgroundColor: '#DB2A2A',
    width: 100,
    height: 50,
    borderRadius:15,
  },
});
