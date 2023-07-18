import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CommonButton = ({onPress, title, bgColor, textColor}) => {
  return (
    <TouchableOpacity 
    style={{
        backgroundColor:bgColor,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        width:'85%',
        height:50,
        alignSelf:"center",
        marginTop:20,
        }}
    onPress={()=>onPress()}
    >
      <Text style={{color:textColor}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CommonButton