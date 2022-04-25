import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Paginas/Login';
import Home from './src/Paginas/Home';
import MediaConsumo from './src/Paginas/MediaConsumo';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#1c3c94',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={
              { headerShown: false }
            }
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home"
            }}
          />

          <Stack.Screen
            name="MediaConsumo"
            component={MediaConsumo}
            options={{
              title: "MediaConsumo"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;