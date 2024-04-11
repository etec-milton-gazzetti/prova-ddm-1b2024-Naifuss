import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, StyleSheet, Text, ImageBackground } from 'react-native';

export default function PaginaScreen({ navigation }) {
 
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          style={styles.image}
          source={{uri: 'https://besthqwallpapers.com/Uploads/28-12-2017/35410/japan-churei-tower-fujiyama-sunset-japanese-landmarks.jpg'}}
        />
        <Text style={styles.textogrande}>
          O Japão feudal é um período fascinante da história japonesa que abrange aproximadamente do século XII ao século XIX. Durante esse tempo, o Japão estava dividido em uma série de estados independentes, cada um governado por senhores feudais conhecidos como daimyos. Esse período foi marcado por uma hierarquia social rígida, guerras constantes e uma cultura única que influenciou profundamente a identidade japonesa moderna.{'\n\n'}
          Um dos aspectos mais distintos do Japão feudal foi o sistema de classes, que era rigidamente estratificado. Na parte mais alta estavam os samurais, guerreiros habilidosos que serviam aos daimyos e seguiam um código de ética conhecido como bushido. Abaixo dos samurais estavam os camponeses, responsáveis pela produção agrícola e considerados a base da sociedade. Finalmente, os artesãos e os comerciantes ocupavam os níveis mais baixos da hierarquia.{'\n\n'}
          As guerras entre os daimyos eram uma característica central do período feudal japonês. Esses conflitos, conhecidos como "sengoku jidai" (período dos Estados Guerreiros), resultaram em um longo período de instabilidade e conflito armado. No entanto, essas guerras também estimularam o desenvolvimento de estratégias militares avançadas e o fortalecimento das fortalezas castelares, conhecidas como "castelos japoneses".{'\n\n'}
          Além disso, o Japão feudal viu o desenvolvimento do xogunato, um sistema de governo militar no qual o xogum, um general supremo, exercia o poder de fato, enquanto o imperador mantinha uma posição principalmente simbólica. O xogunato Tokugawa, estabelecido no século XVII, trouxe um período de estabilidade relativa ao Japão, conhecido como o "período Edo". Durante este tempo, o país experimentou um florescimento da cultura, incluindo o teatro kabuki, a cerimônia do chá e a impressão em blocos de madeira, conhecida como ukiyo-e.{'\n\n'}
          Apesar da estabilidade política, o período Edo também foi caracterizado por um rígido sistema de isolamento, conhecido como sakoku, que restringia severamente o contato com o exterior. No entanto, no século XIX, pressões internas e externas levaram ao colapso do sistema feudal e à restauração do poder imperial no evento conhecido como Restauração Meiji, marcando o fim do período feudal japonês.{'\n\n'}
          O Japão feudal deixou um legado duradouro na cultura e na sociedade japonesas. Seus valores de honra, disciplina e lealdade continuam a influenciar a identidade japonesa moderna, enquanto sua arquitetura, artes e tradições ainda são celebradas em todo o mundo.
        </Text>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao}>
         <Text style={{textAlign: 'center', lineHeight: 50}}>Voltar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C6D1FF',
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
    textAlign: 'justify',
    marginHorizontal: 30, 
    color: 'black', 
  },
  botao: {
    position: 'absolute',
    bottom: 20, 
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 100,
    height: 50,
    borderRadius:15,
  },
});
