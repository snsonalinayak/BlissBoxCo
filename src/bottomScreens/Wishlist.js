import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { Products } from '../../Products'
import CartItem from '../common/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import WishlistItem from '../common/WishlistItem';

const Wishlist = () => {
  let i=0;

  const dispatch = useDispatch();
  const addedItemData= useSelector((state)=>{
    return state.wishlist
  })
  console.log(addedItemData[0]?.price);


  return (
    <View style={{flex:1,}}>
      
      {addedItemData.length?
    // <ScrollView style={{flex:1,}}>
        <FlatList 
        numColumns={2}
        // horizontal
          data={addedItemData}
          horizontal={false}
          renderItem={({ item }) =>
            <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
              <TouchableOpacity  activeOpacity={0.9} >
                <WishlistItem item={item}/>
              </TouchableOpacity>
            </View>
          }>
        </FlatList> 
      // </ScrollView>
      :
      <View style={{flex:1, justifyContent:"center", alignItems:"center",}}>
        <Image source={require('../../Images/ecomLogo.png')} style={styles.bag}/>
        <Text style={styles.emptyText}>No Items Wishlisted!</Text>
      <Text style={styles.emptyPara}>Add Items to be wishlisted..</Text>
      </View>
      }

       </View>

    
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
  },
  orderBtn:{
    color:"white",
    width:"95%",
    height:40,
    backgroundColor:"#2c67a5",
    // bottom:-10,
    borderRadius:3,
    alignSelf:"center",
    margin:8,
    textAlign:"center",
    padding:10,
    letterSpacing:1,
    fontWeight:"500"



  },
  orderSummary:{
    backgroundColor:"white", 
    height:74, 

  },
  itemText:{
    color:"#2c67a5",
    textAlign:"center",
    backgroundColor:"#e8f1f6", 
    width:"100%",
    paddingVertical:3,
    fontSize:13

  },



    bag:{
      height:200,
      width:200
      },
      emptyText:{
        color:"#2c67a5",
        fontWeight:"bold",
        margin:10,
        fontSize:25
      },
      emptyPara:{
        color:"#2c67a5"
      },
      priceDetails:{
        backgroundColor:"white",
        shadowColor:"black",
        elevation:1,
        margin:1.5,
        paddingVertical:7,
        paddingHorizontal:20,
        shadowOffset: { height: -20 } 
      
        // height:100, 
    
      },
      itemTextPrice:{
        fontSize:13  ,
        // color:"#2c67a5",  
        color:"black",  
        

      }
  
})
export default Wishlist