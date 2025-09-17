import { useNavigation } from "expo-router";
import React, {useState} from "react";
import Checkbox from 'expo-checkbox';
import { View, Text,  StyleSheet, TouchableOpacity, Modal, Image} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Payment = () =>{
    
    const navigation = useNavigation();

    const [isNet, setNet] =useState(false);
    const [isCard, setCard] =useState(false);
    const [isGpay, setGpay] =useState(false);
    const [isPaytm, setPaytm] =useState(false);
    const [isPhone, setPhone] =useState(false);
    const [isCod, setCod] = useState(false);
    
    return(
        <View style={{backgroundColor:'#eee'}}>
            <Text style={style.textPay}>Pay using Net Banking</Text>
        <View>
                <TouchableOpacity style={style.pay}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Image source={require('../../assets/images/SwiggyImages/netBanking.png')} style={style.payimg} />
                    <Text>Net Banking/Yono SBI</Text>
                </View>
                <Checkbox
                style={{margin: 8, borderRadius:10}}
                value={isNet}
                onValueChange={setNet}
                color={isNet ? 'green' : undefined}
                />
                </TouchableOpacity>
                <Modal animationType="slide" transparent={true} visible={isNet} >
                    <TouchableOpacity style={style.payment}>
                        <Text style={style.option}>Pay using Net Banking</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.another} onPress={()=>setNet(!setNet)}>
                        <Text style={style.option}>Choose another option</Text>
                    </TouchableOpacity>
                </Modal>
            
        </View>   

            <Text style={style.textPay}>Pay with Card</Text>
        <View>
                <TouchableOpacity style={style.pay}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Image source={require('../../assets/images/SwiggyImages/card.jpg')} style={style.payimg} />
                    <Text>Pay with Credit/Debit card</Text>
                </View>
                <Checkbox
                style={{margin: 8,  borderRadius:10}}
                value={isCard}
                onValueChange={setCard}
                color={isCard ? 'green' : undefined}
                />
                </TouchableOpacity>
                <Modal  animationType="slide" transparent={true}  visible={isCard} >
                    <TouchableOpacity style={style.payment}>
                        <Text style={style.option}>Pay With Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.another} onPress={()=>setCard(!setCard)}>
                        <Text style={style.option}>Choose another option</Text>
                    </TouchableOpacity>
                </Modal>
        </View>    

            <Text style={style.textPay}>Pay with UPI</Text>
        <View>
            <TouchableOpacity style={style.gpay}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Image source={require('../../assets/images/SwiggyImages/gPay.jpg')} style={style.payimg} />
                    <Text>UPI google Pay</Text>
                </View>
                <Checkbox
                style={{margin: 8,  borderRadius:10}}
                value={isGpay}
                onValueChange={setGpay}
                color={isGpay ? 'green' : undefined}
                />
            </TouchableOpacity>

            <TouchableOpacity style={style.paytm}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Image source={require('../../assets/images/SwiggyImages/paytm.png')} style={style.payimg} />
                    <Text>UPI Paytm</Text>
                </View>
                <Checkbox
                style={{margin: 8, borderRadius:10}}
                value={isPaytm}
                onValueChange={setPaytm}
                color={isPaytm ? 'green' : undefined}
                />
            </TouchableOpacity>

            <TouchableOpacity style={style.phonepay}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Image source={require('../../assets/images/SwiggyImages/phonePay.jpg')} style={style.payimg} />
                    <Text>UPI Phone pay</Text>
                </View>
                <Checkbox
                style={{margin: 8, borderRadius:10}}
                value={isPhone}
                onValueChange={setPhone}
                color={isPhone ? 'green' : undefined}
                />
            </TouchableOpacity>
            <Modal  animationType="slide" transparent={true} visible={isGpay} >
                <TouchableOpacity style={style.payment}>
                    <Text style={style.option}>Pay with UPI Google Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.another} onPress={()=>setGpay(!setGpay)}>
                    <Text style={style.option}>Choose another option</Text>
                </TouchableOpacity>
            </Modal>
            <Modal animationType="slide"  transparent={true}  visible={isPaytm} >
                <TouchableOpacity style={style.payment}>
                    <Text style={style.option}>Pay with UPI Paytm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.another} onPress={()=>setPaytm(!setPaytm)}>
                    <Text style={style.option}>Choose another option</Text>
                </TouchableOpacity>
            </Modal>
            <Modal  animationType="slide"  transparent={true}  visible={isPhone} >
                <TouchableOpacity style={style.payment}>
                    <Text style={style.option}>Pay with UPI Phone Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.another} onPress={()=>setPhone(!setPhone)}>
                    <Text style={style.option}>Choose another option</Text>
                </TouchableOpacity>
            </Modal>
        </View>

            <Text style={style.textPay}>Cash On Delivery </Text>
        <View>
            <TouchableOpacity style={style.pay}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Image source={require('../../assets/images/SwiggyImages/cash.png')} style={style.payimg} />
                    <Text>Cash on Delivery</Text>
                </View>
                <Checkbox
                style={{margin: 8, borderRadius:10}}
                value={isCod}
                onValueChange={setCod}
                color={isCod ? 'green' : undefined}
                />
            </TouchableOpacity>
            <Modal animationType="slide"  transparent={true}   visible={isCod} >
                <TouchableOpacity style={style.payment}>
                    <Text style={style.option}>Pay on Delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.another} onPress={()=>setCod(!setCod)}>
                    <Text style={style.option}>Choose another option</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    </View>
    );
}
export default Payment;

const style=StyleSheet.create({
    pay:{
        marginLeft:'5%',
        width:'90%',
        borderColor:'#aaa',
        borderWidth:1,
        // height:'fit-content',
        borderRadius:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
    },
    gpay:{
        marginLeft:'5%',
        width:'90%',
        borderColor:'#aaa',
        borderWidth:1,
        height:50,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        paddingLeft:20,
        paddingRight:20,
    },
    phonepay:{
        marginLeft:'5%',
        width:'90%',
        borderColor:'#aaa',
        borderWidth:1,
        height:50,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        paddingLeft:20,
        paddingRight:20,
    },
    paytm:{
        marginLeft:'5%',
        width:'90%',
        borderColor:'#aaa',
        borderLeftWidth:1,
        borderRightWidth:1,
        height:50,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        paddingLeft:20,
        paddingRight:20,
    },
    option:{
        color:'white',
    },
    payment:{
        backgroundColor:'green',
        height:50,
        marginLeft:'20%',
        width:'60%',
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        top: 500,
    },
    another:{
        backgroundColor:'orange',
        height:50,
        marginLeft:'30%',
        marginTop:10,
        width:'40%',
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        top: 500
    },
    textPay:{
        margin:25,
        fontSize:18,
        fontWeight:'bold',
        color:'black'
    },
    payimg:{
        height:25,
        width:25,
        marginRight:20
    },
    topTxt:{
        fontSize:16, 
        fontWeight:'bold', 
        paddingTop:35, 
        paddingLeft:70,
        paddingBottom:20, 
        backgroundColor:'#fff',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    },
})