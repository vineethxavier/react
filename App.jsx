import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import Counter from './src/demonstration/Counter'

import {SafeAreaView} from 'react-native'

const App = () => {
 return (
  <SafeAreaView>
   <Counter />
  </SafeAreaView>

  //   <NavigationContainer>
  //    <Tabs />
  //   </NavigationContainer>
 )
}

export default App
