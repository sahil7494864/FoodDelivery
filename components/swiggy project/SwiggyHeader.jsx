import { useNavigation } from "expo-router";
import React from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ImageScroll from "./ImageScroll";
const SwiggyHeader = () => {
  const navigation =useNavigation(); 
  return (
    <View style={{backgroundColor:'#eee',height:250 }}>
      <ImageScroll/>
      <View style={styles.headerdata}>
        <View style={{backgroundColor:'gree'}}>
          <TouchableOpacity style={styles.customerName}  onPress={()=>navigation.navigate('AddLocation')}>
            <Icon name="location-on" size={30} color="#f82" />
            <Text style={styles.main}>Ambala</Text>
            <Icon name="arrow-drop-down" size={30} color="#000"/>
          </TouchableOpacity>
         <TouchableOpacity onPress={()=>navigation.navigate('AddLocation')}><Text numberOfLines={1} style={styles.address}>#192 Ambala,Haryana,india,xyz..  </Text></TouchableOpacity> 
        </View>
        <TouchableOpacity style={styles.logo}  onPress={()=>navigation.navigate('Login/Sign up')}>
          <Icon name="person" size={30} color="#fff"/>
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="Search for Navratri Speacial" style={styles.searchbar}></TextInput>
        <TouchableOpacity>
          <Icon name="search" size={30} color="#999" style={styles.slogo} />
        </TouchableOpacity>
      </View>
    </View>
  )};
export default SwiggyHeader
const styles = StyleSheet.create({
  headerdata: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
     zIndex:30},
  main: {
    fontSize: 20,
    fontWeight: "bold"
  },
  customerName: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },
  address: {
    marginLeft: 10,
    width:"70%"
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "#555",
    marginRight: 20,
    marginTop: 10,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  searchbar: {
    flex: 11,
    padding: 10,
    height: 60
  },
  search: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    height: 60,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent:'center',
    marginTop:50
  },
  slogo: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRightColor: "#fff",
    borderBottomColor: "#fff",
    borderTopColor: "#fff",
    borderLeftColor: "#999",
    borderWidth: 2,
    paddingTop:14,
     borderTopRightRadius:10,
     borderBottomRightRadius:10
   
 
  },
});
