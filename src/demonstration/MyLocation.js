import React, {useState, useEffect} from 'react'

import Geolocation from 'react-native-geolocation-service'
import {SafeAreaView, Text} from 'react-native'

const MyLocation = () => {
 const [location, setLocation] = useState(null)

 useEffect(() => {
  Geolocation.getCurrentPosition(
   position => {
    const {latitude, longitude} = position.coords
    setLocation({
     latitude,
     longitude
    })
   },
   error => {
    console.log(error.code, error.message)
   },
   {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
  )
 }, [])

 return (
  <SafeAreaView>
   {location ? (
    <>
     <Text>Latitude: {location.latitude}</Text>
     <Text>Latitude: {location.longitude}</Text>
    </>
   ) : (
    <Text>Loading.!!!</Text>
   )}
  </SafeAreaView>
 )
}

export default MyLocation
