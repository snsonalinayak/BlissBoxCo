import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add_to_cart } from '../store/slices/CartSlice'

const WishlistItem = (props) => {
  let { item, onPress } = props;
  // console.log(item?.image,'itesm')
//   const dispatch= useDispatch();
  const addItem=()=>{
    dispatch(add_to_cart())
      }

  const addedItemData= useSelector((state)=>{
    
        return state.wishlist
  })
  return (
    <View style={[styles.card,]} >

      <Image
        source={item.image}
        style={styles.img} />

        <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>₹{item.price}</Text>
      

    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 200,
    // height: 200,
    // width: 170,
    // borderRadius:10, 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    elevation: 5,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,

  },
  img: {
    width: "100%",
    height: "70%",
    // margin:10,
    alignSelf:"center",
    borderRadius: 2,
    
  },
  name: {
    color: "gray",
    // alignSelf:"center",
    fontSize: 13,

    marginLeft: 10,
    // marginTop: 10,
    // marginRight:100
  },
  price: {
    color: "dimgray",
    fontSize: 14,
    fontWeight: "600",
    // alignSelf:"center"

    marginLeft:12,
    // marginTop:10

  },


})
export default WishlistItem