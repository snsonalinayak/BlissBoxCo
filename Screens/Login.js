import { View, Text, Image, StyleSheet } from 'react-native'
import {React, useState} from 'react'
import CustomTextInput from '../src/common/CustomTextInput'
import CommonButton from '../src/common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = () => {
  
    const navigation= useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const loginBtn=()=>{
      console.warn({password,email})
      
      
        // setError(true) 
        // or
      if(password && email){
        setError(false)
        // getData() //uncomment this & remove next line:
        navigation.navigate("TabNavigator")
        
        
      }
      else{
        setError(true)

      }
    }

    const getData= async ()=>{
      const mEmail= await AsyncStorage.getItem('EMAIL')
      const mPassword= await AsyncStorage.getItem('PASSWORD')
      console.log(mEmail,mPassword)
      if(email===mEmail&& password===mPassword){
        console.warn("Navigating")
        navigation.navigate('TabNavigator')
      }
      else{
        alert('Incorrect Credentials')
      }
    }

    
  return (
    <View style={{flex:1}}>
      <Image 
      source={require('../Images/ecomLogo.png')} 
      style={Styles.img}/>

    <Text style={Styles.textfield}>Login</Text>

    <CustomTextInput 
    placeholder='Enter Email Id' 
    placeholderTextColor='grey' 
    icon={require('../Images/email.png')} 
    onChangeText={(text)=>setEmail(text)}
    value={email}
    />
    
      {
        error && !email &&
        <Text style={Styles.err}>*Enter Valid Email</Text>
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
        error && !password?
        <Text style={Styles.err}>*Enter Valid Password</Text>:null
      }
    <CommonButton title={"Login"} bgColor={"black"} textColor={"white"} onPress={loginBtn}/>
    <Text 
    style={Styles.signupText} onPress={()=>navigation.navigate('Signup')}>New User? Signup.</Text>

    </View>
  )
}

const Styles=StyleSheet.create({
    img:{
        width:80,
        height:80, 
        alignSelf:"center", 
        marginTop:100,
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
        marginTop:20
    },
    err:{
      color:"red",
      marginLeft:36,
      marginTop:4,
      fontWeight:"300"
    }
    
})
export default Login