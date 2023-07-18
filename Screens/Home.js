import { View, Text, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { Products } from '../Products'
import ProductItem from '../src/common/ProductItem'
import { add_to_cart, remove_from_cart } from '../src/store/slices/CartSlice'
import {useDispatch, useSelector} from 'react-redux'
import { add_to_wishlist } from '../src/store/slices/WishlistSlice'




const Home = () => {
  // console.log(Products.categories[0].data)
  let i = 0;

  const dispatch = useDispatch();
  const addedItemData= useSelector((state)=>
    state.cart
  )
  console.log(addedItemData);


  const addItem=(item)=>{
dispatch(add_to_cart(item))
// dispatch(remove_from_cart(item?item.name:null))
}
const dispatcher = useDispatch();
  const addedWishlistItemData= useSelector((state)=>{
    return state.wishlist
  })
  console.log(addedWishlistItemData);

  const [wishlisted, setWishlisted] = useState(false)
  const addWishlistItem=(item)=>{
dispatcher(add_to_wishlist(item))
setWishlisted(true);
// dispatch(remove_from_cart(item?item.name:null))
}

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <Image source={require('../Images/BlissBoxCo/CoverPhoto(2).png')}
        style={{
          width: "100%",
          height: 200,
          alignSelf: "center",
        }} />
      {/* <ScrollView horizontal={true}>
          {Products.categories.map((item)=>
          <TouchableOpacity onPress={()=>console.warn("hello")}>
          <Text style={styles.categories}>{item.category}</Text>
          </TouchableOpacity>  
          )}
        </ScrollView> */}
        



      <View>
        <FlatList
          data={Products.categories}
          horizontal
          // style={{maxHeight:"100%"}}
          renderItem={({ item }) =>
            <View >
              <TouchableOpacity onPress={() => console.warn("hello000!!!")}>
                <Text style={styles.categories}>{item.category}s</Text>
              </TouchableOpacity>
            </View>
          }>
        </FlatList>
      </View>


      <View>
          
       {/* For Category Name Header */}
        {/* <FlatList 
          data={Products.categories}
          renderItem={({ item }) => */}
  {// For Category Name Header
            Products.categories.map((item)=>
              
            <View key={item.category}>
              <TouchableOpacity activeOpacity={1} onPress={() => console.warn("hello")}>
                <View>
                  <Text style={styles.productText}>{item.category}s</Text>

                  <FlatList //for products inside each category

                    data={Products.categories[i++].data}
                    horizontal
                    renderItem={({item}) =>{
                      return(
                      <View >
                        <TouchableOpacity activeOpacity={0.9} >
                          <ProductItem 
                          item={item} 
                          onPress={() => addItem(item)} 
                          onPressWishlist={()=>addWishlistItem(item)}
                          />
                          {/* <Text style={{color:"black"}}>name:{item.name}</Text> */}
                        </TouchableOpacity>
                      </View>)
                    }}
                />

                
                </View>

              </TouchableOpacity>
            </View>
    )}
        {/* //   }> */}
        {/* // </FlatList> */}

        
      </View>
    </ScrollView>


  )
}
const styles = StyleSheet.create({
  categories: {

    color: "white",
    backgroundColor: "#2c67a5",
    marginHorizontal: 6,
    padding: 10,
    margin: 20,
    borderRadius: 20,
    textAlign: "center"
  },
  productText:
  {
    color: "#2c67a5",
    fontWeight: "300",
    fontSize: 19,
    marginLeft: 18,
    marginVertical: 10
  }
})
export default Home