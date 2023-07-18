import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import {React, useState} from 'react'
import CustomTextInput from '../src/common/CustomTextInput'
import CommonButton from '../src/common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Signup = () => {
    const navigation= useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [contact, setContact] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState(false)

    const signupBtn=()=>{
      
        // setError(true) 
      // or
      if(password && email && cpassword && contact && name){
        setError(false)
        saveData();
      }
      else{
        setError(true)
      }
    }

    
    const saveData= async()=>{
      if(error===false){
        await AsyncStorage.setItem('NAME', name)
        await AsyncStorage.setItem('PASSWORD', password)
        await AsyncStorage.setItem('EMAIL', email)
        await AsyncStorage.setItem('CONTACT', contact)
        console.log(email,password);
        navigation.goBack();
        
      }
    }
  return (
    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
      
    
    <View style={{flex:1}}>
      <Image 
      source={require('../Images/ecomLogo.png')} 
      style={Styles.img}/>

    <Text style={Styles.textfield}>Create an Account</Text>

    <CustomTextInput 
    placeholder='Enter Name' 
    placeholderTextColor='grey' 
    icon={require('../Images/user.png')} 
    onChangeText={(text)=>setName(text)}
    value={name}

    />
    {
        error && !name &&
        <Text style={Styles.err}>*Enter Valid Name</Text>
    }

    <CustomTextInput 
    placeholder='Enter Email Id' 
    placeholderTextColor='grey' 
    icon={require('../Images/email.png')} 
    onChangeText={(text)=>setEmail(text)}
    value={email}
    />
    {
        error && !email.includes( ".com","@") &&
        <Text style={Styles.err}>*Enter Valid Name</Text>
    }
    
    <CustomTextInput 
    placeholder='Enter Contact No.' 
    placeholderTextColor='grey' 
    icon={require('../Images/phone-call.png')}
    onChangeText={(text)=>setContact(text)}
    keyboardType="numeric"
    value={contact}
    />
    {
        error && contact.length!==10 &&
        <Text style={Styles.err}>*Enter Valid Moblie No.</Text>
    }

    <CustomTextInput 
    placeholder='Enter Password' 
    placeholderTextColor='grey' 
    icon={require('../Images/unlock.png')}
    type="password"
    onChangeText={(text)=>setPassword(text)}
    value={password}
 
    />
    {
        error && !password &&
        <Text style={Styles.err}>*Enter Valid Password</Text>
    }

    <CustomTextInput 
    placeholder='Confirm Password' 
    placeholderTextColor='grey' 
    icon={require('../Images/unlock.png')}
    type="password"
    onChangeText={(text)=>setCpassword(text)}
    value={cpassword}
 
    />
    {
        error && password!==cpassword &&
        <Text style={Styles.err}>*Enter Valid Password</Text>
    }

    <CommonButton title={"Signup"} bgColor={"black"} textColor={"white"} onPress={signupBtn}/>
    <Text 
    style={Styles.signupText} onPress={()=>navigation.navigate('Login')}>Already User? Login.</Text>
    </View>
    </ScrollView>
  )
}

const Styles=StyleSheet.create({
    img:{
        width:80,
        height:80, 
        alignSelf:"center", 
        marginTop:60,
        // marginTop:100,
        marginBottom:50
    },
    textfield:{
        color:"black",
        alignSelf:"center",
        fontSize:28,
        fontWeight: "300"

    },
    signupText:{
        fontSize:15,
        fontWeight:"300",
        color:"grey",
        textDecorationLine:"underline",
        alignSelf:"center",
        marginTop:20,
        marginBottom:50
    },
    err:{
      color:"red",
      marginLeft:36,
      marginTop:4,
      fontWeight:"300"
    }
    
})

export default Signup