import React from 'react';
import {View, Text, StyleSheet, Button,Image} from 'react-native';

export  function AdminhomeScreen({navigation}) { 
  
return ( 
<View style={styles.container}> 
<Image style={styles.image} source={require("../assets/Admin.png")} />
  <Text>AdminHomeScreen</Text> 
  </View> 
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    top:10,
  },
});

export default AdminhomeScreen;