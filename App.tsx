import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Splash from './src/screens/Splash'
import MainNavigation from './routes/nav'
import Details from './src/screens/Details'
import Appprovider from './store/appProrvider'

const App = () => {
  return (
    <Appprovider>
      <View style={styles.container}>
        <MainNavigation />
      </View>
    </Appprovider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})

