import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { users } from '../res/data'
import Product from '../components/Product'
import AppContext from '../../store/appContext'
import { useNavigation } from '@react-navigation/native'
import screenNames from '../../routes/screenNames'

const HomeScreen = () => {
  const navigation = useNavigation()
  const{cart,setCart}=useContext(AppContext)

  const goCart = () => {
    navigation.navigate(screenNames.cart,);
}

    const rendercards = () => {
        const cards = users.map(user => {
          return (
          <Product 
            key={user.name}
            name={user.name}
            price={user.price}
            img={user.img}
            details={user.details}
          />
    
          )
        })  
        return cards;
    
      }
      return (

    <ScrollView style={styles.screen}>
      <TouchableOpacity onPress={goCart}>
        <Text>Cart:{cart.length}</Text>
      </TouchableOpacity>
      {/* <Text>Cart:{cart[4].name}</Text> */}
       {(rendercards())} 
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
      },
   








})