import React from "react";
 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginSwiggy from "@/components/swiggy project/LoginSwiggy";
import Main_data1 from "@/components/swiggy project/Main_data1";
 
import Login from "@/components/loginProject/login";
import OrderSwiggy from "@/components/swiggy project/OrderSwigggy";
import Orderpage from "@/components/swiggy project/Orderpage";
import Railway from "@/components/swiggy project/Railway";
import AddLocation from "@/components/swiggy project/AddLocation";
import Tempfile from "@/components/swiggy project/Tempfile";
import Payment from "@/components/swiggy project/Payment";

import OfferPage from "@/components/swiggy project/Offerpage";
const Stack = createNativeStackNavigator();
export default function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      
      <Stack.Screen name="Home" component={Main_data1}/>
      <Stack.Screen name="AddLocation" component={AddLocation} options={{headerShown:true,title:'Enter your area or apartment name',headerTitleStyle:{fontSize:18,},}}/>
      <Stack.Screen name="Order Record" component={OrderSwiggy}/>
      <Stack.Screen name="Orderpage" component={Orderpage}/>
      <Stack.Screen name="Tempfile" component={Tempfile} options={{headerShown:true,title:'Order Summary',headerTitleStyle:{
      fontSize:18,fontWeight:'bold'},}}/>
      <Stack.Screen name="Payment" component={Payment} options={{headerShown:true,title:'Payment Options',headerTitleStyle:{
      fontSize:18,fontWeight:'bold'},}}/>
      <Stack.Screen name="offerpage" component={OfferPage}/>
      <Stack.Screen name="Railway" component={Railway}/>
      <Stack.Screen name="Login/Sign up" component={LoginSwiggy} />
      <Stack.Screen name='Registration'   component={Login}/>
       

       
    </Stack.Navigator>
  );} 