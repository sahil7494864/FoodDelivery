import { useNavigation } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SwiggyFooter = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Icon name="home" size={30} color="#f82" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Order Record')}>
                <Icon name="shopping-cart" size={30} color="#f82" />
            </TouchableOpacity>
        </View>
    );
}
export default SwiggyFooter;

const styles = StyleSheet.create({
    footer:{
        height:50,
        width: '100%',
        backgroundColor : '#77',
        position: 'relative',
    
          bottom:0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
        
         
    },
})