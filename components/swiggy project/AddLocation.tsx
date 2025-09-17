import { StyleSheet, Text, TextInput, View,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons";
import { Linking } from 'react-native';
 

const AddLocation = () => {
  const location = async () =>{
    const url = 'https://www.google.com/maps/place/Swiggy+Onboarding+Centre+-+Ludhiana/@30.9014488,73.5216386,8z/data=!3m1!5s0x391a83c794c159df:0x9f2642d469f1cbde!4m10!1m2!2m1!1sSwiggy+Office!3m6!1s0x391a83c797c5dde7:0x47ed9916fa945984!8m2!3d30.9014488!4d75.8287675!15sCg1Td2lnZ3kgT2ZmaWNlIgOIAQGSAQtiYWNrX29mZmljZeABAA!16s%2Fg%2F11t2vlg4xb?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D';

    const supported = await Linking.canOpenURL(url);

        if (supported) {
  // Open the URL
        await Linking.openURL(url);
        } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
        }
};
  return (
    <View style={styles.contianer}>
       
        
       <View style={styles.search}>
       <TouchableOpacity>
          <Icon name="search" size={25} color="#999"   />
        </TouchableOpacity>
        <TextInput
          placeholder="Try JP Nagar,Siri Gardenia,etc." style={styles.searchbar}></TextInput>
      </View>
       

      <View style={{borderBottomColor:'lightgrey',
        borderBottomWidth:0.6,
        marginTop:10,display:'flex',alignItems:'center'}} >
      <TouchableOpacity style={styles.secondbox}> 
      <Icon name="near-me" size={20} color="#f82"/>
      <Text style={{color:"#f82",marginLeft:5,fontSize:17,fontWeight:'bold' }}>Use my current location</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{position:'absolute',right:0 ,marginTop:10}}> 
      <Icon name="arrow-forward" size={22} color="grey" style={{fontWeight:'bold', }}  />
      </TouchableOpacity>
      
      </View>
       
      
      <View  style={{borderBottomColor:'lightgrey',
        borderBottomWidth:0.6,
        marginTop:10,display:'flex',alignItems:'center'}}>
      <TouchableOpacity  onPress={location} style={styles.secondbox}>
      <Icon name="add" size={22} color="#f82" style={{fontWeight:'bold'}}  /> 
    <Text style={{color:"#f82",marginLeft:5,fontSize:17,fontWeight:'bold' }}>Add new address</Text>
    </TouchableOpacity>
      </View>
     
       
   
    </View>
  )
}

export default AddLocation

const styles = StyleSheet.create({
    contianer:{
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:'white',
        height:'100%',
        paddingTop:10,
    },
    search:{
        display:'flex',
        flexDirection:'row',
        borderColor:'grey',
        borderWidth:1,
        borderRadius:10,
        height:45,
        alignItems:'center',
        paddingLeft:10
    },
    searchbar:{
        marginLeft:10,
        fontSize:17
    },
    secondbox:{
        display:'flex',
        flexDirection:'row',
        height:45,
        alignItems:'center',
    
        width:370
    },
    secondbox2:{
        display:'flex',
        flexDirection:'row',
        height:45,
        alignItems:'center',
        borderBottomColor:'lightgrey',
        borderBottomWidth:0.6,
    
    }
})