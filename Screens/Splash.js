import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {

  const navigation=useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login')
    }, 2000);
  }, [])
  
  

  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../Images/ecomLogo.png')} style={{width:150,height:150}}/>

    </View>
  )
}

export default Splash