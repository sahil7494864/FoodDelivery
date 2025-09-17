import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
const MoreSwiggy = () => {
  const navigation =useNavigation();
  return (
    
    <View style={styles.moredata}>
      <Text style={styles.moretxt}>More on Swiggy</Text>
      <View style={styles.moreBox}>
        <TouchableOpacity style={styles.more} onPress={()=>navigation.navigate('offerpage')}>
          <Text style={styles.moretext}>OFFER ZONE</Text>
          <Image source={require('../../assets/images/swiggy-maindata1/offer.jpeg')} style={styles.image}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Railway')}style={styles.more}
        >
          <Text style={styles.moretext}>FOOD ON TRAIN</Text>
          <Image source={require('../../assets/images/swiggy-maindata1/train.jpg')} style={styles.image}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MoreSwiggy;

const styles = StyleSheet.create({
  more: {
    // marginLeft: 30,
    height: 70,
    width: "40%",
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",








    
    alignItems: "center",
  },
  moreBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  moretext: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    paddingLeft: 5,
    width: "50%",
  },
  moredata: {
    backgroundColor: "#fff",
    padding: 10,
  },
  moretxt: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  image:{
    height:'95%',
    width:'50%',
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
  }
});
