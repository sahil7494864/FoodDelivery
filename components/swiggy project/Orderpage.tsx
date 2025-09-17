import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { dishvarity2 } from "./swiggyData";
import SwiggyFooter from "./SwiggyFooter";
import Addbutton from "./Addbutton";
import {   useNavigation, useRouter } from "expo-router";

// const params=useLocalSearchParams()
 

function Orderpage() {
    const navigation= useNavigation();
    const router =useRouter();
  const [totalItems, setTotalItems] = useState(0);  

  const updateTotalItems = (change) => {
    setTotalItems((prevCount) => Math.max(0, prevCount + change)); 
  };
 
  
  const orderitems = ({ item }) => (
    <>
      <View style={styles.listconta}> 
      <View style={{gap:8}}>
        <Text numberOfLines={2} style={{width:155,fontSize:22,fontWeight:'bold'}}>{item.resturants}</Text>
        <Text
          style={{
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            width: 45,
          }}
        >
          {item.price}
        </Text>
        <Text><Icon name="star" size={12} color="#DAA520" />{item.rating}</Text>
        <Text numberOfLines={2} style={{width:150,fontSize:15}}>{item.menu}</Text>
      </View>
       
      <Image
            source={item.Image}
            style={{
              height: 150,
              width: 150,
             borderRadius:20,
              backgroundColor: "black",
              position:'absolute',
              right:15,
              top:15
               
            }}
            resizeMode="stretch"
            
          />  
          <Addbutton updateTotalItems={updateTotalItems}/>    
          
      </View>
    </>
  );
   
  return (
    <>
    <ScrollView> 
      <View style={styles.container}>
        <View style={styles.firstitembox}>
          <View
            style={{
              backgroundColor: "white",
              marginTop: 50,
              borderRadius: 20,
              width: "90%",
              height: "65%",
              paddingLeft: 15,
              paddingTop: 40,
            }}
          >
            <View
              style={{
                backgroundColor: "green",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: 40,
                borderRadius: 4,
                position: "absolute",
                right: 20,
                top: 20,
                paddingLeft: 3,
              }}
            >
              <Icon name="star" size={13} color="white" />

              <Text style={{ color: "white", fontWeight: "bold" }}>5.0</Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "black" }}
              >
                Item name
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "black" }}
              >
                30-35 mins . 1.3km . Ambala Locality
              </Text>
              <Text style={{ fontSize: 13, fontWeight: "bold", color: "grey" }}>
                Items,location
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList data={dishvarity2}
         keyExtractor={(item) => item.id}
         renderItem={orderitems} 
          
         />
      </View>
     
      </ScrollView>
      {totalItems > 0 && (
        <View  style={styles.nowbox }>
         <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center'}}> 
          <Text style={styles.now }>
             {totalItems} item added
                </Text><Icon name="shopping-cart" size={19} color="white" style={{marginLeft:2}}/></TouchableOpacity> 
          <TouchableOpacity onPress={()=>navigation.navigate('Tempfile')} ><Text style={styles.now2 }>Order Now</Text></TouchableOpacity> 
        </View>
      )}

      <SwiggyFooter/>
    </>
  );
}

export default Orderpage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  firstitembox: {
    backgroundColor: "lightgrey",
    display: "flex",
    alignItems: "center",
    height: 200,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  listconta: {
    backgroundColor: "white",
    borderBottomColor: "lightgrey",
    borderBottomWidth:0.8,

    display:'flex',
    flexDirection:'row',
    height:220,
    paddingLeft:20,
    paddingTop:20
  },

  now:{
    fontWeight:'bold',
    fontSize:18,
    color:'#fff',
  },
  now2:{
    fontWeight:'bold',
    fontSize:18,
    color:'#fff',
  },
  nowbox:{
    // backgroundColor:'#2f9',
    backgroundColor:'green',
    height:60,
    width:'95%',
    margin:10,
    borderRadius:15,
    position:'absolute',
    bottom:0,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:20,
    paddingLeft:20,
    zIndex:2
    
     
 

  },




 
  orderCountContainer: {
    marginBottom: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    position:'absolute',
    bottom:0,
    width:'100%',
    marginLeft:19
  },
  orderCountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
