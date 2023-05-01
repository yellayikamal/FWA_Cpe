import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Text,Image} from 'react-native';
import  { Component } from 'react-native'

const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 7000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace('Login');
    }
  }, [authLoaded, props.navigation]);

  return (
    <View style={styles.root}>
      <Text style ={styles.text}>HFCL</Text>
      <Image 
  source={require('../assets/5G.png')} 
  style={{ width: 150, height: 150, justifyContent:'center',alignItems:'center' }}
/>
<Text style={styles.text2}>Z-CONNECT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  /* Z-Connect*/
  text2:{
    color:'#333281',
    fontSize:30,
    fontWeight:'bold',
    position:'relative',
    top: 40,
  },

});

export default SplashScreen;
