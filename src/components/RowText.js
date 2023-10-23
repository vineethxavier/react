import React from 'react'
import {Text, View} from 'react-native'

const RowText = props => {
 const {
  messageOne = 'my default message one',
  messageTwo = 'my default message two',
  containerStyles,
  messageOneStyles,
  messageTwoStyles
 } = props
 return (
  <View style={containerStyles}>
   <Text style={messageOneStyles}>{messageOne}</Text>
   <Text style={messageTwoStyles}>{messageTwo}</Text>
  </View>
 )
}

export default RowText
