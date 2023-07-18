import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { Products } from '../../Products'
import CartItem from '../common/CartItem';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  let i=0;

  const dispatch = useDispatch();
  const addedItemData= useSelector((state)=>{
    return state.cart
  })
  console.log(addedItemData[0]?.price);

  const totalPrice=()=>{
    let tp=0;
    addedItemData.map((item)=>
    // console.log(item.price)
    tp= tp +item.price 
    )
    tp>=1000? tp:tp+100
      
    
    console.log("end")
    // return console.log(tp)
    return tp
  }

  return (
    <View style={{flex:1,}}>
      
      {addedItemData.length?
    
        <FlatList
          data={addedItemData}
          // horizontal
          // style={{maxHeight:"100%"}}
          renderItem={({ item }) =>
            <View >
              <TouchableOpacity activeOpacity={0.9} onPress={()=>totalPrice()}>
                {/* <Text style={styles.categories}>{item.name}s</Text> */}
                <CartItem item={item}/>
              </TouchableOpacity>
            </View>
          }>
        </FlatList>
        
      :
      <View style={{flex:1, justifyContent:"center", alignItems:"center",}}>
        <Image source={require('../../Images/ecomLogo.png')} style={styles.bag}/>
        <Text style={styles.emptyText}>Your Cart feels empty!</Text>
      <Text style={styles.emptyPara}>There's nothing in your bag. Let's add some Items..</Text>

      </View>
      }

{/* Price Details */}
{addedItemData.length? 
// null
      <View 
      style={ styles.priceDetails}
      >
        <Text style={{color:"black", fontWeight:"600", marginBottom:10,}}>Price Details ({addedItemData.length} Items) : </Text>
        <View style={{height:1, width:"100%", backgroundColor:"#DCDCDC"}}></View>

        
        {/* <Text style={styles.itemTextPrice}>{addedItemData.length} Items </Text> */}
        <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:10,}}>
        <Text style={styles.itemTextPrice}>Price</Text>
        <Text style={[styles.itemTextPrice,{alignSelf:"flex-end"}]}>₹{totalPrice()}</Text>
        </View>

        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={styles.itemTextPrice}>Delivery Charges</Text>
        {
          totalPrice()>=1000  
          ?<Text style={[styles.itemTextPrice, {color:"green"}]}>Free Delivery</Text>
          :<Text style={styles.itemTextPrice}>₹100</Text>


        }
        {/* <Text style={styles.itemTextPrice}>₹100</Text> */}
        </View>

        <View style={{height:1, width:"100%", backgroundColor:"#DCDCDC", marginVertical:10}}></View>

        <View style={{flexDirection:"row", justifyContent:"space-between",marginBottom:10}}>
        <Text style={[styles.itemTextPrice,{fontWeight:"600"}]}>Total Amount</Text>
        <Text style={[styles.itemTextPrice,{fontWeight:"600"}]}>₹{totalPrice()}</Text>
        </View>



      </View> 
      :null}

      {/* Place Order */}
{addedItemData.length?
      <View style={ styles.orderSummary}>
        
        <Text style={styles.itemText}>{addedItemData.length} Items selected for Order</Text>
      <TouchableOpacity >
          <Text style={styles.orderBtn}>PLACE ORDER</Text>
      </TouchableOpacity>
      </View> 
      :null}
      
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
export default Cart