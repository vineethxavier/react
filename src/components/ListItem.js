import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import {View, Text, StyleSheet} from 'react-native'

Feather.loadFont()

const ListItem = props => {
 const {dt_txt, min, max, condition} = props
 const {item, date, temp} = styles
 return (
  <View style={styles.item}>
   <Feather name="sun" size={50} color={'black'} />
   <Text style={date}>{dt_txt}</Text>
   <Text style={temp}>{min}</Text>
   <Text style={temp}>{max}</Text>
  </View>
 )
}
const styles = StyleSheet.create({
 item: {
  flexDirection: 'row',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
  justifyContent: 'space-around',
  alignItems: 'center',
  borderWidth: 5,
  backgroundColor: 'pink'
 },
 temp: {
  color: 'white',
  fontSize: 20
 },
 date: {
  color: 'white',
  fontSize: 15
 }
})

export default ListItem
