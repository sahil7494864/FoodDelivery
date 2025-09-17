import { useNavigation } from 'expo-router';
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwiggyFooter from './SwiggyFooter';

const LoginSwiggy= () => {
    const navigation = useNavigation();
    return(
        <>
        <View style={{height:'100%'}}> 
        <Image source={require('../../assets/images/swiggy-maindata1/loginswiggy.jpeg')}
            style={{height:'50%', width:'100%',}}/>
            <TouchableOpacity style={style.Iconback} onPress={()=>navigation.navigate('Home')}>
          <Icon name="arrow-left" size={25} color="black" />
        </TouchableOpacity>
        <View style={{padding:10, backgroundColor:'#eee',height:'45%'}}>
            
            <Text style={style.acc}>ACCOUNT</Text>
            <Text>Login/Create Account to manage Order</Text>

            <TouchableOpacity style={style.loginbtn} onPress={()=>navigation.navigate('Registration')}>
                <Text style={style.logintxt}>Login</Text>
            </TouchableOpacity>

            <Text numberOfLines={1}>By clicking, I accept the <Text style={{fontWeight:'bold'}}>Tearms & Condition</Text> and <Text style={{fontWeight:'bold'}}>Privacy Policies</Text></Text>

            <View style={{backgroundColor:'#000', height:3, marginTop:10, marginBottom:10}}></View>

            <TouchableOpacity style={style.boxes}>
                {/* <Icon name="rocket" size={30} color="#000" /> */}
                <Image source={require("../../assets/images/swiggy-maindata1/offer.jpeg")} style={{height:40, width:40,}}/>
                <Text style={{fontSize:18, marginLeft:10,}}>Offers</Text>
                <Icon name="arrow-right" size={30} color="#000" style={{position:'absolute', right:10}} />
            </TouchableOpacity>

            <TouchableOpacity style={style.boxes}>
                {/* <Icon name="comment" size={30} color="#000"  /> */}
                <Image source={require("../../assets/images/swiggy-maindata1/feedback.png")} style={{height:40, width:40,}}/>
                <Text style={{fontSize:18, marginLeft:10}}>Send Feedback</Text>
                <Icon name="arrow-right" size={30} color="#000" style={{position:'absolute', right:10}} />
            </TouchableOpacity>
        </View> 
        <SwiggyFooter/>  
        </View>     
         
        </>
    )
}
export default LoginSwiggy;

const style=StyleSheet.create({
    acc:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop:20,
    },
    loginbtn:{
        height:50,
        // borderWidth:1,
        // borderColor: '#000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginBottom:10,
        backgroundColor:'#fa3',
        borderRadius:10,
    },
    logintxt:{
        fontSize:18,
        fontWeight:'bold',
    },
    boxes:{
        borderColor:'#000',
        borderWidth: 1,
        display: 'flex',
        alignItems:'center',
        flexDirection: 'row',
        padding: 5,
        height: 50,
        marginBottom: 10,
        backgroundColor:'white',
    },
    Iconback:{
        position: 'absolute',
        top: 10,
        backgroundColor:'white',
        width:30,
        height:30,
        borderRadius:100,
        left:10,
         display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:2


    }
});
