import React from 'react'
import UpcomingWeather from './src/components/screens/UpcomingWeather'
import City from './src/components/screens/City'
import CurrentWeather from './src/components/screens/CurrentWeather'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
Feather.loadFont()
Ionicons.loadFont()
FontAwesome5.getStyledIconSet('brand').loadFont()
FontAwesome5.getStyledIconSet('light').loadFont()
FontAwesome5.getStyledIconSet('regular').loadFont()
FontAwesome5.getStyledIconSet('solid').loadFont()

const Tab = createBottomTabNavigator()
const App = () => {
 return (
  <NavigationContainer>
   <Tab.Navigator
    screenOptions={{
     tabBarActiveTintColor: 'tomato',
     tabBarInactiveTintColor: 'grey'
    }}>
    <Tab.Screen
     name={'Current'}
     component={CurrentWeather}
     options={{
      tabBarIcon: ({focused}) => (
       <Feather
        name={'droplet'}
        size={25}
        color={focused ? 'tomato' : 'black'}
       />
      )
     }}
    />
    <Tab.Screen
     name={'Upcoming'}
     component={UpcomingWeather}
     options={{
      tabBarIcon: ({focused}) => (
       <Feather name={'clock'} size={25} color={focused ? 'tomato' : 'black'} />
      )
     }}
    />
    <Tab.Screen
     name={'City'}
     component={City}
     options={{
      tabBarIcon: ({focused}) => (
       <Feather name={'home'} size={25} color={focused ? 'tomato' : 'black'} />
      )
     }}
    />
   </Tab.Navigator>
  </NavigationContainer>
 )
}

export default App
