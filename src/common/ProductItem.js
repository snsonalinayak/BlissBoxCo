import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add_to_cart } from '../store/slices/CartSlice'

const ProductItem = (props) => {
  let { item, onPress, onPressWishlist } = props;
  // console.log(item?.image,'itesm')
  const dispatch= useDispatch();
  const addItem=()=>{
    dispatch(add_to_cart())
      }

  const addedItemData= useSelector((state)=>{
    
        return state.cart
  })
  return (
    <View style={styles.card}>
      <Image
        source={item.image}
        style={styles.img} />

      <View>
        <Text style={styles.name}>{item.name}</Text>
        <View style={{
          flexDirection: "row",
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: "baseline"
        }}>

          <Text style={styles.price}>₹{item.price}</Text>
          {
            // addedItemData.cart.length?null:
            <TouchableOpacity onPress={onPress}>
            <Text style={styles.cart}>Add to Cart</Text>
          </TouchableOpacity>
          }

          {/* Only + - buttons:  */}

          {/* {
            addedItemData.cart.length?         
            <View style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingLeft: 10,
              paddingRight: 10,
              // alignItems: ""
            }}>
            <TouchableOpacity onPress={onPress} >
            <Text style={[styles.plus, {backgroundColor:"#dd636e"}]}>-</Text>
          </TouchableOpacity>
          
          <Text style={{marginHorizontal:5,alignSelf:"center", color:"#c32430"}}>0</Text>

            <TouchableOpacity onPress={onPress} >
            <Text style={[styles.plus, {backgroundColor:"#dd636e"}]}>+</Text>
          </TouchableOpacity>
            </View>:null
          } */}

          {/*  + - buttons & Add to Cart:  */}
          {/* {
            addedItemData.cart.length?
            <View style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingLeft: 10,
              paddingRight: 10,
              // alignItems: ""
            }}>
            <TouchableOpacity onPress={onPress} >
            <Text style={[styles.plus, {backgroundColor:"#dd636e"}]}>-</Text>
          </TouchableOpacity>
          
          <Text style={{marginHorizontal:5,alignSelf:"center", color:"#c32430"}}>0</Text>

            <TouchableOpacity onPress={onPress} >
            <Text style={[styles.plus, {backgroundColor:"#dd636e"}]}>+</Text>
          </TouchableOpacity>
            </View>:

          <TouchableOpacity onPress={onPress}>
            <Text style={styles.cart}>Add to Cart</Text>
          </TouchableOpacity>
          } */}

          
        </View>
        
          


      </View>
      <TouchableOpacity style={styles.wishlist} onPress={onPressWishlist}>
        <Image style={styles.wishlistImg} source={require('../../Images/wishlist.png')} />
      </TouchableOpacity >
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 270,
    // borderRadius:10, 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    elevation: 5,
    backgroundColor: "#e8f1f6",
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    flex: 1
  },
  img: {
    width: "100%",
    height: "65%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  name: {
    color: "gray",
    marginLeft: 10,
    marginTop: 10

  },
  price: {
    color: "dimgray",
    fontSize: 14,
    fontWeight: "600"
    // marginLeft:15,
    // marginTop:10

  },
  cart: {
    borderWidth: 1,
    color: "gray",
    borderRadius: 10,
    borderColor: "gray",
    padding: 6,
    marginTop:5
  },
  wishlist: {
    width: 32,
    height: 32,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent:"center",
    alignItems:"center"
  },
  wishlistImg: {
    
    height: 21,
    width: 21,
    marginTop:3
  },
  plus:{
    color: "white",
    backgroundColor:"green",
    borderRadius: 2,
    padding: 6,
    marginHorizontal:2,
  }

})
export default ProductItem