import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'


const CustomTextInput = (props) => {
    const {placeholder,placeholderTextColor, value, onChangeText, icon, type,keyboardType  }=props
  return (
    <View
     style={{borderColor:"grey",
     borderWidth:0.5,
     borderRadius:10,
     width:'85%',
     height:50,
     alignSelf:"center",
     paddingLeft:15,
    //  paddingRight:20,
     marginTop:20,
     flexDirection:'row',
    alignItems:"center"
    }}>
    <Image source={icon} style={{width:28,flex:1, height:28,}}/>
    <TextInput 
    placeholder={placeholder} 
    placeholderTextColor={placeholderTextColor} 
    secureTextEntry={type==="password"?true:false}
    style={{marginLeft:7, color:"dimgray",flex:9}}
    onChangeText={onChangeText}
    value={value}
    keyboardType={keyboardType?keyboardType:"default"}
    />
    
    </View>
  )
}

export default CustomTextInput