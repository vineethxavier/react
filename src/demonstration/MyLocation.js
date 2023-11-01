import React, {useState, useEffect} from 'react'

import Geolocation from 'react-native-geolocation-service'
import {SafeAreaView, Text} from 'react-native'

const MyLocation = () => {
 const [location, setLocation] = useState(null)

 useEffect(() => {
  Geolocation.getCurrentPosition(
   position => {
    const {
     latitude,
     longitude,
     altitude,
     accuracy,
     speed,
     heading,
     altitudeAccuracy
    } = position.coords
    const timeStamp = position.timestamp
    setLocation({
     latitude,
     longitude,
     altitude,
     accuracy,
     speed,
     heading,
     altitudeAccuracy,
     timeStamp
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
     <Text>Longitude: {location.longitude}</Text>
     <Text>Altitude: {location.altitude}</Text>
     <Text>Accuracy: {location.accuracy}</Text>
     <Text>Speed: {location.speed}</Text>
     <Text>Heading: {location.heading}</Text>
     <Text>AltitudeAccuracy: {location.altitudeAccuracy}</Text>
     <Text>TimeStamp: {location.timeStamp}</Text>
    </>
   ) : (
    <Text>Loading.!!!</Text>
   )}
  </SafeAreaView>
 )
}

export default MyLocation
