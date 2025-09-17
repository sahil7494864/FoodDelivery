import { useNavigation } from 'expo-router';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Alert, Modal, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';
import ContactUs from '@/components/SwiggyClone/ContactUs';

const LoginSwiggy= () => {

    const [modalVisible, setModalVisible] = useState(false);

    const mail = async () =>{
        const url = 'mailto:royalmundasahil@gmail.com';

        const supported = await Linking.canOpenURL(url);

            if (supported) {
      // Open the URL
            await Linking.openURL(url);
            } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
            }
    };

    const navigation=useNavigation();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const Continue =() =>{
        if (email === 'sahil' & password === 'sahil@123')
        {
            navigation.navigate('UserProfile')
        }
        else{
            Alert.alert('email or password is incorrect!');
        }
        
    };
    return(
        <>
        <Image source={require('../../assets/images/SwiggyImages/loginswiggy.jpeg')}
            style={{height:'50%', width:'100%',}}/>
            <TouchableOpacity style={style.backIcon} onPress={()=>navigation.goBack()}>
                <Icon name='arrow-left' size={25} color="#fff" />
            </TouchableOpacity>

        <View style={style.mainArea}>
            
            <Text style={style.acc}>ACCOUNT</Text>
            <Text>Login/Create Account to manage Order</Text>

            <TouchableOpacity style={style.loginbtn}   onPress={() => setModalVisible(true)}> 
                <Text style={style.logintxt}>Login</Text>
            </TouchableOpacity>

            <Text numberOfLines={1}>By clicking, I accept the <Text style={{fontWeight:'bold'}}>Tearms & Condition</Text> and <Text style={{fontWeight:'bold'}}>Privacy Policies</Text></Text>

            <View style={{backgroundColor:'#000', height:3, marginTop:10, marginBottom:10}}></View>

            <TouchableOpacity style={style.boxes} onPress={() =>navigation.navigate("Offerpage")}>
                <Image source={require("../../assets/images/SwiggyImages/offer.jpeg")} style={{height:40, width:40,}}/>
                <Text style={{fontSize:18, marginLeft:10,}}>Offers</Text>
                <Icon name="arrow-right" size={30} color="#000" style={{position:'absolute', right:10}} />
            </TouchableOpacity>

            <TouchableOpacity style={style.boxes} onPress={mail}>
                <Image source={require("../../assets/images/SwiggyImages/feedback.png")} style={{height:40, width:40,}}/>
                <Text style={{fontSize:18, marginLeft:10}}>Send Feedback</Text>
                <Icon name="arrow-right" size={30} color="#000" style={{position:'absolute', right:10}} />
            </TouchableOpacity>

            <ContactUs />

            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible} >

                    <View style={style.bottom}>
                        <Text style={{marginLeft:10, marginTop:40, fontSize:22, fontWeight:'bold'}}>Login</Text>
                        <Text style={{color:'#777', margin:10, }}>Enter your phone number to proceed</Text>

                        <TextInput placeholder='Enter Your Email' value={email} onChangeText={setEmail} style={style.number}></TextInput>

                        <TextInput placeholder='Enter Your Password' value={password} onChangeText={setPassword} style={style.number}></TextInput>

                        <TouchableOpacity  style={style.continue} onPress={Continue}>
                            <Text style={{color:'#fff', fontWeight:'bold', fontSize:18}}>Continue</Text>
                        </TouchableOpacity>

                        <Text numberOfLines={1} style={{margin:10}}>By clicking, I accept the <Text style={{fontWeight:'bold'}}>Tearms & Condition</Text> and <Text style={{fontWeight:'bold'}}>Privacy Policies</Text></Text>
                        <TouchableOpacity style={{display:'flex', justifyContent:'center', alignItems:'center', height:50}} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{color:'#44f'}}>Stay Sign out</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

            </View>
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
        borderColor:'#777',
        borderWidth: 1,
        display: 'flex',
        alignItems:'center',
        flexDirection: 'row',
        padding: 5,
        height: 50,
        marginBottom: 10,
        backgroundColor:'white',
        borderRadius: 10,
    },
    backIcon:{
        height:30,
        width:30,
        borderRadius:30,
        backgroundColor: '#000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:30,
        left:20,
    },
    mainArea:{
        height:'60%', 
        width:'100%', 
        padding:10, 
        backgroundColor:'#efefef', 
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        position:'relative',
        bottom:30,
    },

    bottom:{
        height:400,
        width:'100%',
        backgroundColor:'#efefef',
        // position:'absolute',
        // top:'50%',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        position:'absolute',
        bottom:20,
        // borderWidth:2,
        // borderColor:'#000'
    },
    continue:{
        backgroundColor: '#fa3',
        margin:10,
        height:50,
        borderRadius:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    number:{
        height:50,
        margin:10,
        borderRadius:30,
        borderColor:'#777',
        borderWidth:1,
        paddingLeft:20,
        backgroundColor:'#fff'
    }
});
