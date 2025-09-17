import { useNavigation } from 'expo-router';
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwiggyFooter from './SwiggyFooter';

const Railway = () =>{

 const navigation = useNavigation();

    return( <>
        <View style={{backgroundColor:"#eee"}}>
            
        <ScrollView>
            <View style={{display:'flex', justifyContent:'center', alignItems:'center', }}>
                <Text style={style.indTrain}>INDIAN RAILWAYS</Text>
                <Text style={style.indTrain2}>Food Service</Text>
            </View>

            <Image source={require("../../assets/images/SwiggyImages/railway.jpg")}
            style={{height:250, width:'100%', borderBottomLeftRadius:40, borderBottomRightRadius:40, opacity:0.7}}/>
            <TouchableOpacity style={style.backIcon} onPress={()=>navigation.navigate('Home')}  >
                <Icon name='arrow-left' size={25} color="black" />
            </TouchableOpacity>

          

            <View style={style.raildata}>
               <View style={style.txtline}>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>Jounrey details </Text>
                    <Text style={{fontSize:12}}><Icon name="train" size={14} color="#000" /> <Text style={{fontWeight:'bold'}}>IRCTC</Text>  Partner</Text>
               </View>
               
               <TextInput placeholder='Enter PNR Number' placeholderTextColor={'#000'} style={style.pnr}/>
               <Text style={style.pnrtxt}> PNR is needed to deliver to your seat</Text>
            </View>

            <Text style={{fontSize:20, color:'#777', marginLeft:20}}>Meals, Thalis, Biryani & more</Text>
            <Text style={{fontSize:30, fontWeight:'bold', marginLeft:20}}>Delivery to your seat! </Text>
             
             <View style={style.railLists}>
                <Image source={require('../../assets/images/SwiggyImages/delivery.jpg')} style={style.listimg}/>
                <Text style={style.listdata}>Guaranteed delivery, or fulll refund!</Text>
             </View>

             <View style={style.railLists}>
                <Image source={require('../../assets/images/SwiggyImages/tracktrain.jpg')} style={style.listimg}/>
                <Text style={style.listdata}>We track your train, to insure food is sereved hot & on time.</Text>
             </View>

             <View style={style.railLists}>
                <Image source={require('../../assets/images/SwiggyImages/changecoin.jpg')} style={style.listimg}/>
                <Text style={style.listdata}>Change in plans? Free order cancellation</Text>
             </View>
             

             <View style={style.railLists}>
                <Image source={require('../../assets/images/SwiggyImages/topbrand.jpg')} style={style.listimg}/>
                <Text style={style.listdata}>Enjoy food from top rands around the station</Text>
             </View>
             </ScrollView>
        
            
             
        </View>
    
       
        </>
    );
}
export default Railway;

const style = StyleSheet.create({
    backIcon:{
        height:30,
        width:30,
        borderRadius:30,
        // backgroundColor: '#000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:10,
        left:10,
    },
    txtline:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        margin:10,
    },
    pnr:{
        borderWidth:2,
        borderColor:'#aaa',
        backgroundColor:'#fff',
        height:60,
        margin:10,
        marginBottom:0,
        borderRadius:20,
        padding:10,
        zIndex:1,
    },
    pnrtxt:{
        margin:10,
        marginTop:0,
        backgroundColor:'#ddd',
        height:50,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20, 
        paddingTop:25,
        paddingLeft:10,
        zIndex:0,
        position:'relative',
        bottom:20,
    },
    raildata:{
        borderColor:'#ddd',
        borderWidth:1,
        margin:10,
        borderRadius:20,
        padding:10,
        position:'relative',
        bottom:30,
        backgroundColor:'#fff',
    },
    indTrain:{
        zIndex:1,
        position:'absolute',
        top:90,
        color:'#fff',
        fontSize:30,
        fontWeight:'bold',
 
    },
    indTrain2:{
        zIndex:1,
        position:'absolute',
        top:120,
        color:'#fff',
        fontSize:30,
        fontWeight:'bold',
      
    },
    listimg:{
        height:70,
        width:70,
        borderRadius:70,
    },
    railLists:{
        display:'flex',
        flexDirection:'row',
        margin:20,
        alignItems:'center',
    },
    listdata:{
        marginLeft:20,
        marginRight:100,
        fontWeight:'bold',
        fontSize:16
    }
});