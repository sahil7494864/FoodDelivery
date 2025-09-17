import { useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
import { View, Text,  StyleSheet, TouchableOpacity, Image, ScrollView, TextInputComponent} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
 
const Tempfile =()=>{
 
 
    const navigation = useNavigation();
    return(
    <View style={{backgroundColor:'#eee' ,}}>
        <ScrollView>
        <View style={style.b1}>
            <View style={style.t1}>
                <Text>Cheese Burger</Text>
                <Text>₹255</Text>
            </View>
            <View style={style.t1}>
                <Text>Add  More Item</Text>
                <TouchableOpacity style={style.addinfo}>
                <Text  style={{  height:20,
        width:20,borderRadius:20,marginLeft:5,}}> + </Text>
                </TouchableOpacity>
            </View>
            <View style={style.t3}>
                <Text>Type cooking request</Text>
                <TouchableOpacity style={style.addinfo}>
                    <Text style={{height:20,
        width:20,borderRadius:20,marginLeft:5,}}> + </Text>
                </TouchableOpacity>
            </View>
         </View>

         <Text style={{margin:20, fontWeight:'bold', fontSize:16}}>Say thanks With a Tip!</Text>

         <View style={style.b2}>
            <View style={style.t4}>
                <Text style={{width:'75%'}}>Day & night, our delivery partners bring your favourite meals. Thank them with a Tip.</Text>
                <Image source={require('../../assets/images/SwiggyImages/delivery.jpg')} style={style.tipPic}/>
            </View>
            <View style={style.t4}>
                <TouchableOpacity style={style.t5}>
                    <Text>₹20</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.t5}>
                    <Text>₹30</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.t5}>
                    <Text>₹50</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.t5}>
                    <Text>₹100</Text>
                </TouchableOpacity>
            </View>
         </View>

         <Text style={{margin:20, fontWeight:'bold', fontSize:16}}>Bill Details</Text>

         <View style={style.b3}>
            <View style={style.t2}>
                <View style={style.t6}>
                    <Text>Item Total</Text>
                    <Text>₹259</Text>
                </View>
                <View style={style.t6}>
                    <Text>Delivery partner fee</Text>
                    <Text>₹51.00</Text>
                </View>
                <Text style={{color:'#999', marginLeft:10}}>Enjoy Discounted Delivery!</Text>
            </View>

            <View style={style.t2}>
                <View style={style.t6}>
                    <Text>Delivery Tip</Text>
                    <Text style={{color:'#f70'}}> Add tip</Text>
                </View>
                <View style={style.t6}>
                 <Text>Plateform fee</Text>
                 <Text>₹33.00</Text>
                </View>
                <View style={style.t6}>
                    <Text>GST and Restaurant Charges</Text>
                    <Text>₹7.00</Text>
                </View>
            </View>

            <View style={style.t7}>
                <Text style={{fontWeight:'bold'}}>To Pay</Text>
                <Text style={{fontWeight:'bold', color:'green'}}>₹300</Text>
            </View>
         </View>
         

          
         </ScrollView>
         <View style={{backgroundColor:'white',position:'absolute',bottom:0,height:100,width:"100%",borderTopRightRadius:10,borderTopLeftRadius:10}}> 
         <TouchableOpacity style={style.orderbtn}  onPress={() =>navigation.navigate("Payment")}>
            <Text style={{color:'#fff', fontSize:16}}>Place Order</Text>
         </TouchableOpacity>
         </View>
    </View>
        
    );
}
export default Tempfile;

const style=StyleSheet.create({
    t1:{
        height:60,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    },
    t3:{
        height:60,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    b1:{
        backgroundColor:'#fff',
        marginLeft:20,
        marginRight:20,
        borderRadius:20,
        paddingLeft:20,
        paddingRight:20,
        marginTop:40,
        marginBottom:10,
    },
    b2:{
        backgroundColor:'#fff',
        marginLeft:20,
        marginRight:20,
        borderRadius:20,
        padding:10,
        marginBottom:10
    },
    b3:{
        backgroundColor:'#fff',
        marginLeft:20,
        marginRight:20,
        borderRadius:20,
        padding:10,
        marginBottom:150
    },
    addinfo:{
        height:20,
        width:20,
        borderRadius:20,
        borderColor:'#000',
        borderWidth:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    },
    tipPic:{
        height:50,
        width:50,
        borderRadius:10,
    },
    t4:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:10
    },
    t5:{
        height:30,
        width:50,
        borderRadius:5,
        borderColor:'#ccc',
        borderWidth:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    t6:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingTop:10,
        marginLeft:10,
        marginRight:10,
    },
    t7:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        margin:10
    },
    t2:{
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        paddingBottom:10,
    },
    orderbtn:{
        marginLeft:20,
        marginRight:20,
        height:50,
        width:'90%',
        backgroundColor:'green',
        borderRadius:50,
        margin:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
         
    }
})