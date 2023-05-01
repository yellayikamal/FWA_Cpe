import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

export  function AdminLoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
    <Text style ={styles.text}>HFCL</Text>
      <Image style={styles.image} source={require("../assets/Admin.png")} />
      <Text style ={styles.text2}>Admin Login</Text> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}
      onPress={() => navigation.navigate('AdminHome')}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.user}
  onPress={() => navigation.navigate('User')} >
  <Text style={styles.userText}>User Login</Text>
  </TouchableOpacity>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: "#333281",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    color:'white',
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#333281",
  },
  user: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#333281",
  },
  loginText: {
     color:'white',
  },
  userText: {
    color:'white'
  },

   /* HFCL Text*/
   text: {
    color:'#333281',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 40,
    width: '100%',
   },
   text2: {
    color:'#333281',
    fontSize: 20,
    fontWeight: 'bold', 
    textAlign: 'center',
    position: 'relative',
    top: -20,
    width: '100%',
   }
});

export default AdminLoginScreen;