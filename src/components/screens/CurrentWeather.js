import React from 'react'
import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import RowText from '../RowText'
import {weatherType} from '../../utilities/weatherType'
//https://levelup.gitconnected.com/integrating-react-native-vector-icon-with-react-native-0-60-and-above-4cad9b9c61c5

const CurrentWeather = () => {
 const {
  wrapper,
  container,
  temp,
  feels,
  highLow,
  highLowWrapper,
  bodyWrapper,
  description,
  message
 } = styles
 return (
  <SafeAreaView style={wrapper}>
   <View style={container}>
    <Text style={temp}> 6</Text>
    <Text style={feels}> Feelts like 5</Text>
    <Feather name="sun" size={50} />
    <RowText
     messageOne={'High: 8 '}
     messageTwo={'Low: 6 '}
     containerStyles={highLowWrapper}
     messageOneStyles={highLow}
     messageTwoStyles={highLow}
    />
   </View>
   <RowText
    messageOne={"It's Sunny"}
    messageTwo={weatherType['Thunderstorm'].message}
    containerStyles={bodyWrapper}
    messageOneStyles={description}
    messageTwoStyles={message}
   />
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
 wrapper: {
  flex: 1,
  backgroundColor: 'pink'
 },
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
 },
 temp: {
  colorl: 'black',
  fontSize: 48
 },
 feels: {
  fontSize: 30,
  color: 'black'
 },
 highLow: {
  color: 'black',
  fontSize: 20
 },
 highLowWrapper: {
  flexDirection: 'row'
 },
 bodyWrapper: {
  justifyContent: 'flex-end', // to bring to bottom
  alignItems: 'flex-start', // to bring to start
  paddingLeft: 25,
  marginBottom: 40
 },
 description: {
  fontSize: 48
 },
 message: {
  fontSize: 30
 }
})
export default CurrentWeather
