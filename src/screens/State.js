import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const State = () => {
    const[number,setnumber]=useState(0)
    return (
        <View style={styles.screen}>
            <View style={styles.batata}>
                <TouchableOpacity onPress={()=>setnumber(number+1)}>
                   <Text style={styles.batekh}>+</Text> 
                </TouchableOpacity>
                <Text style={styles.batekh}>{number}</Text>
                <TouchableOpacity onPress={()=>setnumber(number-1)}>
                   <Text style={styles.batekh}>-</Text> 
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default State

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        backgroundColor: 'lightgreen'
    },
    batata:{
        flexDirection:'row',
        justifyContent:'center'
    },
    batekh:{
        fontSize:25,
        margin:10,
    }

})




