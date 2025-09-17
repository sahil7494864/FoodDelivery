// src/Login.js
import React, {useState} from 'react';
import {View, TextInput,TouchableOpacity, Text, Alert, ImageBackground} from 'react-native';
import {styles} from './loginstyle'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'expo-router';
 
const Login = ( ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Please fill in both fields.');
    } else {
      Alert.alert(`Logged in with: ${email}`);
      setEmail('');
      setPassword('');
    }
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Iconback} onPress={()=>navigation.navigate('Login/Sign up')}>
          <Icon name="arrow-left" size={40} color="black" />
        </TouchableOpacity>
      <Text style={styles.title}>Log in or Registration</Text>
      <Text style={styles.email}> Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
          placeholderTextColor='black'
      />
      <Text style={styles.email}> Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
         placeholderTextColor='black'
        secureTextEntry
      />
      <Text style={styles.pass}> Forget Password?</Text>
      <TouchableOpacity >
        <Text onPress={handleLogin} style={{color:'black', backgroundColor:'#fa3',  
          height:40,fontSize:18,borderRadius:7,textAlign:'center',paddingTop:8.5
        }}  >Login</Text>
      </TouchableOpacity>
      {/* <Button title='Login'  onPress={handleLogin}    />  */}
      <View style={styles.orline}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.applebox}>
        <View style={styles.appleimg}>
            <ImageBackground
            source={require('../../assets/images/loginProjectImg/apple1.png')}
            style={{width:30,height:30,marginTop:5,marginLeft:5}}
            resizeMode='cover'>
            </ImageBackground>
        </View>
        <Text style={styles.atext}>Continue with Apple</Text>
      </View>
      <View style={styles.applebox}>
        <View style={styles.googleimg}>
        <ImageBackground
            source={require('../../assets/images/loginProjectImg/gimg.jpg')}
            style={{width:40,height:40,}}
            resizeMode='stretch'></ImageBackground>
        </View>
        <Text style={styles.atext}>Continue with Google</Text>
      </View>
      <Text style={styles.footertext}>
        Scale uses Cookies for analytics personalized content and ods.By using
        Scales services you agree to this use of cookies.
      </Text>
    </View>);}; 
export default Login;
