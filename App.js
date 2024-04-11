import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home'
import Pagina from './src/screens/Pagina'
import Sobre from './src/screens/Sobre'

const homeName = 'Home';
const sobreName = 'Sobre';
const PaginaName = 'Pagina';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={homeName}
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={PaginaName}
          component={Pagina}  
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={sobreName}
          component={Sobre}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
