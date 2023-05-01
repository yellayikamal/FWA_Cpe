import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export  function LoginScreen({navigation}) { 
  
return ( 
<View style={styles.container}> 
  <Text>LoginScreen</Text>
  <Button style = {styles.Button2}
  onPress={() => navigation.navigate('User')} 
  title = 'Login/Signup'
  /> 
  </View> 
  );
  }


const styles = StyleSheet.create({
  container: {
    color:'#333281',
    fontSize:30,
    fontWeight:'bold',
    position:'relative',
    top: 40,
  },
  Button2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    top:10,
  },
 
});

export default LoginScreen;