import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../../store/appContext'

const Cart = () => {
    const{cart,setCart}=useContext(AppContext)

  return (
    <View style={styles.screen}>
        {
            cart.map((item)=>
                <View>
                    <Text>{item.name}</Text>
                </View>
            )
        }
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#4545'
    }
})