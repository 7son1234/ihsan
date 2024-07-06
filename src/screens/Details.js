import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, Button } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../../store/appContext'
import { useNavigation } from '@react-navigation/native'

const Details = (props) => {
  const navigation = useNavigation()

  const { name, price, img, details } = props.route.params
  const{cart,setCart}=useContext(AppContext)


  console.log(" props.route.params: ", props.route.params);

  return (
    <View style ={styles.screen}>
    <View style={styles.cob}>

      <Image style={styles.img} source={img} />

      <View style={styles.txtContainer}>
        <Text style={styles.txt}>{"name:" + name}</Text>
        <Text style ={styles.txt}>{"price:" + price}</Text>
        <Text style={styles.txt}>{"details "+details}</Text>
      </View>

    </View>
      <Button title='add to cart' onPress={()=>{
        // cart.push({
        //   name, price, img, details 
        // })
        setCart((oldCart)=>[...oldCart,{name, price, img, details }])
        navigation.goBack()
      }}/>


    </View>

  )
}

export default Details

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  cob: {
    flex: 1,
    backgroundColor: "lightgreen" , 
    flexDirection:'row'
  },
  txt: {
    color: "darkgreen",
    fontSize: 15,

  },
  img: {
    height: 230,
    width: 220,
  } , 
  txtContainer:{
    marginLeft: 10
  },

























})       















