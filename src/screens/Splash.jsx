import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { images } from '../Images/images'

const Splash = (props) => {
  let x = props
    const navigation = useNavigation();

    const nn=()=>{
        navigation.navigate('Home')
    }
    
  return (
    <View style={styles.screen}>
      <ImageBackground 
        source={images.mix()}  
        style={styles.bgImage}>
    
    
        <TouchableOpacity onPress={nn}>
          <Image source={images.Ison()} style={styles.logo} />
        </TouchableOpacity>
      
      </ImageBackground>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  bgImage:{
    height:"100%",
    resizeMode:'repeat',
    // justifyContent:'center',
  },
  logo:{
    height:200,
    width:200 ,
    marginTop:150,
    // left:110,
    alignSelf:'center',
    borderRadius:100
  }
})