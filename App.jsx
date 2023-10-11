import React from 'react'
import {SafeAreaView, StyleSheet, Text, View} from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.temp}> 6</Text>
        <Text style={styles.feels}> Feelts like 5</Text>

        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low : 6</Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}>It's perfect T-shirt weather</Text>
      </View>
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
    alignItems: 'center'
    //justifyContent: 'center'
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
    alignItems: 'flex-start' // to bring to start
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default App
