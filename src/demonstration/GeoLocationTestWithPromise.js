import {React, useState, useEffect} from 'react'
import {SafeAreaView, Text} from 'react-native'
import Geolocation from 'react-native-geolocation-service'

const GeoLocationTestWithPromise = () => {
 const [locationInfo, setLocationInfo] = useState(null)
 const getCurrentLatLong = async () => {
  const opt = {
   // timeout:INFINITY,
   // maximumAge:INFINITY,
   // accuracy: { ios: "hundredMeters", android: "balanced" },
   // enableHighAccuracy: false,
   // distanceFilter:0,
   showLocationDialog: true,
   forceRequestLocation: true
  }
  const getCurrentPosition = () =>
   new Promise((resolve, error) =>
    Geolocation.getCurrentPosition(resolve, error, opt)
   )

  try {
   const Data = await getCurrentPosition()
   const Latlong = `${Data?.coords?.latitude}, ${Data?.coords?.longitude}`

   return {Status: true, Data, Latlong}
  } catch (error) {
   console.log('getCurrentLatLong::catcherror =>', error)
   return {Status: false, Message: Strings.Geolocation.Error(error.code)}
  }
 }
 useEffect(() => {
  getCurrentLatLong()
   .then(res => {
    setLocationInfo(res)
    console.log('----++++ ', locationInfo?.Latlong)
   })
   .catch(err => {
    console.error(err.message)
   })
 }, [])

 return (
  <SafeAreaView>
   <Text>GeoLocationTestWithPromise LAT LONG:{locationInfo?.Latlong}</Text>
   <Text>
    GeoLocationTestWithPromise Status :{String(locationInfo?.Status)}
   </Text>
  </SafeAreaView>
 )
}

export default GeoLocationTestWithPromise
