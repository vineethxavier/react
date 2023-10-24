import React from 'react'
import CurrentWeather from './screens/CurrentWeather'
import UpcomingWeather from './screens/UpcomingWeather'
import City from './screens/City'
import Feather from 'react-native-vector-icons/Feather'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()
Feather.loadFont()
const Tabs = () => {
 return (
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
 )
}

export default Tabs
