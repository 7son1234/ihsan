import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../src/screens/Splash';
import screenNames from './screenNames';
import HomeScreen from '../src/screens/HomeScreen';
import Details from '../src/screens/Details';
import Cart from '../src/screens/Cart';


const MainNavigation = () => {
  
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name={"test"} component={State} options={{headerShown:false}}/> */}
      <Stack.Screen name={screenNames.Splash} component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name={screenNames.Home} component={HomeScreen} />
      <Stack.Screen name={screenNames.Details} component={Details} />
      <Stack.Screen name={screenNames.cart} component={Cart} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNavigation

// const styles = StyleSheet.create({})
