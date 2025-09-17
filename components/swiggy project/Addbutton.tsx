import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
function Addbutton({ updateTotalItems}) {
  const [num, setNum] = useState(0);
  const [addShown, setAddShown] = useState(true);
const navigation = useNavigation();
  const Add = () => {
    if(num>=1){ 
    setNum(num + 1);
    updateTotalItems(1);}
  };
  const Mins = () => {
    if(num>1){ 
    setNum(num - 1);
    updateTotalItems(-1);   
  }
  
    else{
      setNum(0);
      setAddShown(true);
      updateTotalItems(-1);  
    }
  };
  const addhide = () => {
    setNum(1);
    setAddShown(false);
    updateTotalItems(1);  
  };
  return (
    <>
      {  addShown && num === 0   ? (
        <TouchableOpacity onPress={()=>addhide()}  style={styles.addbtn1}>
          <Text
        style={{textAlign: "center", color: "white",display: "flex",alignItems:"center",justifyContent: "center",marginTop: 6,fontSize: 20,}}>ADD</Text>
        </TouchableOpacity>
      ) : (<>
        <View style={styles.itemaddbtn}>
          <Text style={{ fontSize: 20,color: "white",height: 40,flex: 1,textAlignVertical: "center",textAlign: "center"}}onPress={Mins}>-</Text>
          <Text style={{textAlign: "center",color: "white",display: "flex",alignItems: "center",justifyContent: "center",fontSize: 20,flex: 1,}}>{num}</Text>
          <Text style={{fontSize: 20,color: "white",height: 40,flex: 1, textAlignVertical: "center",textAlign: "center", }}onPress={Add}>+</Text>
        </View>
       </>
      )}</>);}

export default Addbutton;
const styles = StyleSheet.create({
  addbtn1: {
    backgroundColor: "green",
    width: 100,
    height: 40,
    borderRadius: 10,
    position: "absolute",
    bottom: 35,
    right: 40,
  },
  itemaddbtn: {
    position: "absolute",
    bottom: 35,
    right: 40,
    display: "flex",
    flexDirection: "row",
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
     
    justifyContent: "space-around",
    backgroundColor: "green",
    flex: 1,
  },
  
});
