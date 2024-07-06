import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props) => {
  return (
    <View>
            <View style={styles.whiteBox} >
      
      <View style={styles.blackBox}>
        <View style={styles.redBox}>

        </View>
        <View style={styles.greenBox}>
        <Text style={styles.txt}>{ 'name:' + props.name}</Text>
      <Text style={styles.ihsan}>{'price:'+ props.price}</Text>
  
        </View>
      </View>
      <Text style={styles.hello}>my first UI</Text>
      </View>

    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    txt:{
        fontSize:29
        },
        ihsan:{
          fontSize:28
        },
        hello:{
          fontSize:33   ,
          textAlign:'center'
        },
        screen:{
          flex:1,
          backgroundColor:"yellow"
        },
        whiteBox:{
          height:"30%",
          width:"100%",
          backgroundColor:"white",
          marginTop:200,
          marginRight:40
        },
        blackBox:{
          backgroundColor:"#4545",
          height:"50%",
          width:'100%',
          flexDirection:'row'
        },
        redBox:{
          backgroundColor:"red",
          height:"100%",
          width:"30%"
        },
        greenBox:{
          backgroundColor:"green",
          height:"100%",
          width:"70%"
        },
})