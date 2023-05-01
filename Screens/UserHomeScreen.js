import React from 'react';
import {View, Text, StyleSheet, Button,Image} from 'react-native';

export  function UserHomeScreen({navigation}) { 
  
return ( 
<View style={styles.container}> 
<Image style={styles.image} source={require("../assets/user.png")} />
  <Text>UserHomeScreen</Text> 
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
  imagehome: {
    position:'relative',
    left:20,
    bottom:20,

  }
});

export default UserHomeScreen;