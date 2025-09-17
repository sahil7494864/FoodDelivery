import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
      flex: 1,
      // justifyContent: 'center',
      padding: 20,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 35,
      color: 'black',
      marginTop: 60,
    },
    input: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 2,
      // marginTop: 30,
      paddingHorizontal: 10,
      borderRadius: 7,
      backgroundColor: 'white',
      color:'black',
     
    },
    pass: {
      fontSize: 17,
      color: '#3388ff',
      marginTop: 20,
      marginBottom: 20,
    },
    email: {
      color: 'black',
      marginTop: 50,
      marginBottom: 9,
      fontSize: 15,
    },
    orline: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: 'grey', // Line color
      marginHorizontal: 10,
    },
    orText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'grey', // Text color
    },
    applebox: {
      display: 'flex',
      flexDirection: 'row',
      height: 50,
      // backgroundColor:'white',
      // justifyContent:'center',
      marginTop: 30,
      alignItems: 'center',
      borderColor: 'grey',
      borderWidth: 2,
      borderRadius: 7,
    },
    appleimg: {
      height: 40,
      width: 40,
       
      marginLeft: 25,
    },
    atext: {
      fontSize: 15,
      color: 'black',
      marginLeft: 60,
    },
    googleimg: {
      height: 40,
      width: 40,
      marginLeft: 25,
      backgroundColor: 'white',
    },
    footertext: {
      color: 'grey',
      lineHeight: 25,
      marginTop: 50,
      width: 300,
      textAlign: 'center',
      marginLeft: 35,
    },
    Iconback:{
      position: 'absolute',
      top: 30,
      
    }
  });