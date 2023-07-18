import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add_to_cart } from '../store/slices/CartSlice'

const CartItem = (props) => {
  let { item, onPress } = props;
  // console.log(item?.image,'itesm')
//   const dispatch= useDispatch();
  const addItem=()=>{
    dispatch(add_to_cart())
      }

  const addedItemData= useSelector((state)=>
    
         state.cart
  )
  return (
    <View style={[styles.card,{flex:1, flexDirection: "row",}]} >
      <Image
        source={item.image}
        style={styles.img} />

      <View>
        <Text style={styles.name}>{item.name}</Text>
        <View style={{
        //   flexDirection: "row",
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: "baseline"
        }}>

          <Text style={styles.price}>₹{item.price}</Text>
          {
            // addedItemData.cart.length?null:
            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
            <TouchableOpacity onPress={onPress}>
            <Text style={styles.qtyBtn}>-</Text>
            </TouchableOpacity>
            <Text style={styles.price}>  Qty: 1  {item.qty}</Text>
            <TouchableOpacity onPress={onPress}>
            <Text style={styles.qtyBtn}>+</Text>
            </TouchableOpacity>
            </View>
          }
        </View>
        
          


      </View>
      {/* <TouchableOpacity style={styles.wishlist}>
        <Image style={styles.wishlistImg} source={require('../../Images/wishlist.png')} />
      </TouchableOpacity> */}
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    // width: 200,
    height: 170,
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
    width: "35%",
    height: "85%",
    margin:10,
    alignSelf:"center",
    borderRadius: 2,
    
  },
  name: {
    color: "gray",
    marginLeft: 10,
    marginTop: 10,
    marginRight:100
  },
  price: {
    color: "dimgray",
    fontSize: 14,
    fontWeight: "600"
    // marginLeft:15,
    // marginTop:10

  },
  qtyBtn: {
    // borderWidth: 1,
    color: "gray",
    borderRadius: 2,
    borderColor: "gray",
    padding: 6,
    marginTop:5,
    width:25,
    height:25,
    textAlign:"center",
    // textAlignVertical:"center",
    textAlign:"center",
    backgroundColor:"#e8f1f6",
    color:"#2c67a5", 
    paddingVertical:3

    
  },
  wishlist: {
    width: 32,
    height: 32,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
    position: 'absolute',
    top: 10,
    // right: 10,
    left: 10,
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
export default CartItem