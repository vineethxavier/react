import React, {useState} from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import Counter from './src/demonstration/Counter'

import {SafeAreaView} from 'react-native'
import MyLocation from './src/demonstration/MyLocation'

const App = () => {
 const [loading, setLoading] = useState(false)

 if (loading) {
  return (
   <View style={styles.container}>
    <ActivityIndicator size={'large'} color={'blue'} />
   </View>
  )
 } else
  return (
   <MyLocation />

   //  <NavigationContainer>
   //   {/* <Tabs /> */}
   //  </NavigationContainer>
  )
}
const styles = StyleSheet.create({
 container: {
  justifyContent: 'center',
  flex: 1
 }
})

export default App
