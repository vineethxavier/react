import React from 'react'
import {
 SafeAreaView,
 View,
 Text,
 StyleSheet,
 ImageBackground,
 StatusBar
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
Feather.loadFont()

const City = () => {
 return (
  <SafeAreaView style={styles.container}>
   <ImageBackground
    source={require('../../../assets/city-background.jpg')}
    style={styles.imageLayout}>
    <Text style={[styles.cityName, styles.cityText]}>London</Text>
    {/*array of styles */}
    <Text style={[styles.countryName, styles.cityText]}>UK</Text>
    <View style={styles.populationWrapper}>
     <Feather name={'user'} size={50} color={'red'} />
     <Text style={styles.populationText}>8000</Text>
    </View>
    <View style={styles.riseSetWrapper}>
     <Feather name="sunrise" size={50} color={'white'} />
     <Text style={styles.riseSetText}>10:46:56am</Text>
     <Feather name="sunset" size={50} color={'white'} />
     <Text style={styles.riseSetText}>17:26:15pm</Text>
    </View>
   </ImageBackground>
  </SafeAreaView>
 )
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  marginTop: StatusBar.currentHeight || 0
 },
 imageLayout: {
  flex: 1
 },
 cityName: {
  fontSize: 40
 },
 countryName: {
  fontSize: 30
 },
 cityText: {
  justifyContent: 'center',
  alignSelf: 'center',
  fontWeight: 'bold',
  color: 'white'
 },
 populationWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '30'
 },
 populationText: {
  fontSize: 25,
  marginLeft: 7.5,
  color: 'red',
  fontWeight: 'bold'
 },
 riseSetWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 30
 },
 riseSetText: {
  fontSize: 20,
  color: 'white',
  fontWeight: 'bold'
 }
})

export default City
