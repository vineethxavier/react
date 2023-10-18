import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import UpcomingWeather from './src/components/screens/UpcomingWeather'
import City from './src/components/screens/City'

const App = () => {
 return (
  <View style={styles.container}>
   {/* <CurrentWeather /> */}
   {/* <UpcomingWeather /> */}
   <City />
  </View>
 )
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  color: 'red'
 }
})

export default App
