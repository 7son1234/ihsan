import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Details from '../screens/Details'
import { useNavigation } from '@react-navigation/native'
import AppContext from '../../store/appContext'

const Product = (props) => {
    const [Qty, setQty] = useState(0);
    const navigation = useNavigation()

    const Details = () => {
        navigation.navigate('Details', { ...props });
    }

    const check = () => {
        if (Qty < 1) {
            setQty(1)
        } else {
            setQty(Qty - 1)
        }
         
    }
    return (
        <View style={styles.card}>

            <Text style={styles.text}> {props.name}</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.text}> {props.price}</Text>
                <Image source={props.img}
                    style={styles.img}
                />

            </View>

            <TouchableOpacity style={styles.button} onPress={Details}>
                <Text style={styles.txtB}>GET</Text>
            </TouchableOpacity>

            <View style={styles.qtyview}>
                <Pressable onPress={() => setQty(Qty + 1)}>
                    <Text style={styles.presstxt}>+</Text>
                </Pressable>

                <Text style={styles.presstxt}>{Qty}</Text>

                <Pressable onPress={check}>
                    <Text style={styles.presstxt}>-</Text>
                </Pressable>
            </View>



        </View>


    )


}

export default Product

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        width: '90%',
        height: 200,
        borderRadius: 20,
        elevation: 5,
        alignSelf: 'center',
        marginTop: 18
    }

    , ich: {
        backgroundColor: "white",
        width: '90%',
        height: 200,
        borderRadius: 20,
        elevation: 5,
        alignSelf: 'center'
    },
    img: {
        height: 85,
        width: 60,
        marginLeft: 200
    },
    text: {
        fontSize: 25,

    },
    button: {

        backgroundColor: "#fcd238",
        height: 40,
        width: 100,
        borderRadius: 20,
        marginLeft: 160,
        marginTop: -20

    },

    txtB: {
        fontSize: 20,
        marginLeft: 30,
        marginTop: 8,
        fontWeight: "500",
    },

    qtyview: {
        borderWidth: 2,
        height: 80,
        width: 140,
        borderRadius: 8,
        marginLeft: 20,
        flexDirection: "row",
        marginTop: -25
    },
    presstxt: {
        fontSize: 20,
        fontWeight: '700',
        padding: 20,
        marginRight: -10

    }











})









