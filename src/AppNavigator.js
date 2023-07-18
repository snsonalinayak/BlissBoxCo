import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import Search from './bottomScreens/Search';
import Wishlist from './bottomScreens/Wishlist';
import Cart from './bottomScreens/Cart';
import Profile from './bottomScreens/Profile';
import home from '../Images/home.png'
import search2 from '../Images/search-interface-symbolgrey.png'
import search from '../Images/search-interface-symbol.png'
import wishlist from '../Images/wishlist.png'
import cart from '../Images/shopping-cart.png'
import profile from '../Images/profile.png';
import {useDispatch, useSelector} from 'react-redux'
import { add_to_cart } from '../src/store/slices/CartSlice'





const TabNavigator = () => {
  const Tab= createBottomTabNavigator();
// let {num}=props
  const dispatch= useDispatch();
  const addItem=()=>{
    dispatch(add_to_cart())
      }

  const addedItemData= useSelector((state)=>{
    
        return state.cart
  })

return (
  // Colors used: 
  // pink:   #dd636e   dark pink:   #c32430
  // yellow: #f9ef63   dark yellow: #e7a561
  // blue:   #e8f1f6   dark blue:   #2c67a5 

  <Tab.Navigator 
    screenOptions={{ 
      headerTitleStyle:{color:"white"},
      headerStyle: { backgroundColor: '#dd636e' }, 
      tabBarShowLabel:false
    }} 
  >
           <Tab.Screen name="Home" component={Home} 
           options={{tabBarIcon:()=>{
            return (<Image source={home} style={{width:25, height:25,}}/>)
           }}}>
           </Tab.Screen>

           {/* <Tab.Screen name="Search" component={Search}
           options={{tabBarIcon:()=>{
            return (<Image source={search} style={{width:22, height:22,}}/>)
           }}}>
           </Tab.Screen> */}

           <Tab.Screen name="Wishlist" component={Wishlist}
           options={{tabBarIcon:()=>{
            return (<Image source={wishlist} style={{width:22, height:22,}}/>)}}}>
            </Tab.Screen>

           

           <Tab.Screen name="Profile" component={Profile}
           options={{tabBarIcon:()=>{
            return (<Image source={profile} style={{width:23, height:23}}/>)},
            // activeTintColor: 'green',
            }}>
           </Tab.Screen>

           <Tab.Screen name="Cart" component={Cart}
           options={{tabBarIcon:()=>{
            return (
              <View>
            <Image source={cart} style={{width:24, height:24,}}/>
              {
                addedItemData.length?
            <View style={styles.indicator}>
              <Text style={styles.indicatorText}>{addedItemData.length}</Text>
            </View>:
            null
              }
            </View>
            )}}}>
           </Tab.Screen>
   </Tab.Navigator>
  
)
}
const Stack=createStackNavigator();



const AppNavigator = () => {


  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen options={{headerShown:false}} name="Splash"component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

const styles= StyleSheet.create({
  indicator:{
    width:15,
    height:15,
    backgroundColor:"red",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    top:-7,
    right:-4,
  },
  indicatorText:{
    fontSize:12,
    bottom:1,
    color:"white"
}

})
export default AppNavigator