//State and hooks example
import {React, useState, useEffect} from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

const Counter = () => {
 const [count, setCount] = useState(0)
 const [newCount, setNewCount] = useState(0)

 useEffect(() => {
  console.log(
   `count changed - this line is printed wn component is loaded or updated, simillaar to componentDidLoad lifecycle`
  )
  return () => {
   console.log(
    ' use effect clean up- this line is printed only when updated, simillar to componentDidUpdate lifecycle'
   )
  }
 }, [count]) // here count is a dependency , this means only when count ( not newCount) value changes then only the component is rerendered
 return (
  <View style={{alignItems: 'center', justifyContent: 'center', padding: 50}}>
   <Text
    style={{backgroundColor: 'grey', fontSize: 34}}>{`Count: ${count}`}</Text>
   <Text
    style={{
     backgroundColor: 'grey',
     fontSize: 34
    }}>{`New Count: ${newCount}`}</Text>

   <View
    style={{
     flexDirection: 'column',
     alignItems: 'center',
     backgroundColor: 'lightyellow'
    }}>
    <Button
     color={'red'}
     title={'increase count'}
     onPress={() => {
      setCount(count + 1)
     }}
    />
    <Button
     color={'green'}
     title="decrease count"
     onPress={() => {
      setCount(count - 1)
     }}
    />
    <Button
     color={'red'}
     title={'increase new count'}
     onPress={() => {
      setNewCount(newCount + 1)
     }}
    />
    <Button
     color={'green'}
     title="decrease new count"
     onPress={() => {
      setNewCount(newCount - 1)
     }}
    />
   </View>
  </View>
 )
}
const styles = StyleSheet.create({})
export default Counter
