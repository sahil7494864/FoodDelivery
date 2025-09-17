import { useNavigation } from 'expo-router';
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dishvarity} from './Data'
import Orderpage from './Orderpage';




const OfferPage =() =>{
    const navigation =useNavigation();
     
    const myfun = ({item}) => (
        <View>
            <TouchableOpacity>
                <Image source={item.offerImg} style={style.offerImage}/>
                <Text style={{marginLeft:10, width:90, fontSize:16, fontWeight:'bold'}} numberOfLines={2}>{item.resturants}</Text>
                <Text style={{marginLeft:10, width:90,}}>{item.rating}</Text>
                <Text style={style.off}>{item.offer}</Text>
            </TouchableOpacity>
        </View>
      );

    return(
        <>
        <ScrollView style={{backgroundColor:'#fff', paddingBottom:500}}>
        
            <Image source={require('../../assets/images/SwiggyImages/totaloffer.jpg')} style={{height:300, width:'100%', backgroundColor:'#eee'}}/>
            <TouchableOpacity style={style.backIcon} onPress={()=>navigation.goBack()}>
                <Icon name='arrow-left' size={25} color="#000" />
            </TouchableOpacity>
            <View style={{display:'flex', flexDirection:'row'}}>
                <Text style={style.circleLine}></Text>
                <Text style={style.circleLine}></Text>
                <Text style={style.circleLine}></Text>
                <Text style={style.circleLine}></Text>
                <Text style={style.circleLine}></Text>
                <Text style={style.circleLine}></Text>
                <Text style={style.circleLine}></Text>
                <Text style={style.circleLine}></Text>
                <Text style={style.circleLine}></Text>
            </View>
            {/* style={style.boxlist2} */}
            <View >   
                <Text style={{ fontSize: 22, margin:10,  fontWeight: "bold" , position:'relative', bottom:40 }}> Top Offers for you </Text>
                <FlatList
                data={dishvarity}
                renderItem={myfun}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{position:'relative', bottom:40}}
                />
            </View>

            <Text style={{fontSize:22, fontWeight: "bold", margin:10 }}>Deal Of he Day</Text>
            <Image source={require('../../assets/images/SwiggyImages/dealofday.jpg')} style={style.dealofday}/>
            <Text style={style.dealburger}>Burger Starting at 79 rupee</Text>

            <TouchableOpacity style={style.orderburger} >
                <Text style={{fontWeight:'bold'}} onPress={()=>navigation.goBack()}>Order Now</Text>
            </TouchableOpacity>
            <Icon name="arrow-right" size={20} color='#fff' style={style.arrow}/>
            
            <View style={{display:'flex', alignItems:'center', justifyContent:'center', position:'relative', top:-20}}>
            <Text style={{backgroundColor:'lightgrey', height:1, width:'80%'}}> </Text>
             <Text style={{color:'green', margin:10, fontSize:18, fontWeight:'bold'}}>Suggested Nearest Resturant</Text>
           
            </View>
            
            <Orderpage/> 
        </ScrollView>
         
        
         </>

    );
}
export default OfferPage;

const style= StyleSheet.create({
    circleLine:{
        height:40,
        width:40,
        borderRadius:40,
        backgroundColor:'#fff',
        position:'static',
        bottom:10,
        left:-2,
    },
    off:{
        color:'#000',
        fontSize:20,
        fontWeight:'bold',
        position:'absolute',
        top:100,
        left:20,
        // color:'#fff',
    },
    offerImage:{
        height:120,
        width:100,
        margin:10,
        borderRadius:20,
    },
    dealofday:{
        height:200,
        width:'90%',
        marginLeft:'5%',
        borderRadius:20,
    },
    dealburger:{
        position:'relative',
        fontSize:22,
        color:'#fff',
        fontWeight:'bold',
        bottom:190,
        left:30,
        zIndex:1,
    },
    orderburger:{
        backgroundColor:'#fff',
        position:'relative',
        bottom:90,
        left:220,
        height:30,
        width:80,
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    arrow:{
        position:'relative',
        bottom:115,
        left:190,
    },
    backIcon:{
        height:30,
        width:30,
        borderRadius:30,
        backgroundColor: '#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:30,
        left:20,
    },

})