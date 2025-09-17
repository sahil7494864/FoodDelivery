import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const OrderSwiggy = () => {
  const navigation =useNavigation();
  return (
    <>
      <View style={style.re_order}>
        <Text style={{ fontSize:22, fontWeight:'bold',marginTop:5}}>REORDER</Text>
      </View>

      <TouchableOpacity style={style.Iconback} onPress={()=>navigation.navigate('Home')}>
          <Icon name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>

      <View style={style.page}>
        <Image source={require("../../assets/images/swiggy-maindata1/utensile.jpg")} style={style.pic}/>
        <Text style={{fontSize:16, fontWeight:'bold', marginBottom:10}}>Uh Oh! You don't have any food orders</Text>
        <Text>Order now to avail great discounts!</Text>
        <TouchableOpacity style={style.orderbtn} onPress={()=>navigation.navigate('Home')}>
           <Text style={{fontWeight:'bold', color:'#fff'}}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default OrderSwiggy;

const style = StyleSheet.create({
  re_order: {
    backgroundColor: "#fff",
    height: 50,
     
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  page:{
    backgroundColor:'#ccc',
    paddingTop:160,
     height:'100%',
    display:'flex',
    // flexDirection:"column",
    // justifyContent:'center',
    alignItems:'center',
  },
  pic:{
    height:200,
    width:200,
    borderRadius:200,
    marginBottom:30,
  },
  orderbtn:{
    height:50,
    width: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius:10,
    marginTop:10,
  },
  Iconback:{
    position: 'absolute',
    top:10.5
     
  }
});
