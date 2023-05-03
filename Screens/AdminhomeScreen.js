import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

export  function AdminViewScreen({navigation}) {
  return (

    <View style={styles.container}>
    <Text style ={styles.text}>HFCL</Text>
    <TouchableOpacity style={styles.handleButtonPress1}
        onPress={() => navigation.navigate('AdminScreen')} >
         
        <Image
          source={require('../assets/user.png')}
          style={styles.logo}
        /> 
         <Text style={styles.text1}>Admin</Text>
      </TouchableOpacity> 
      
    

    
    <TouchableOpacity style={styles.handleButtonPress2}
        onPress={() => navigation.navigate('AdminSettingsScreen')} >
      
        <Image
        source={require('../assets/setting.png')}
        style={styles.logo1}
        />
       <Text style={styles.text2}>Settings</Text>
      
    </TouchableOpacity>
    
    
    <TouchableOpacity style={styles.handleButtonPress3}
        onPress={() => navigation.navigate('AdminMenuScreen')} >
        <Image
        source={require('../assets/menu.png')}
        style={styles.logo3}
        />
      
    
    </TouchableOpacity>


    <TouchableOpacity style={styles.handleButtonPress4}
        onPress={() => navigation.navigate('AdminConnectScreen')} >
        <Image
        source={require('../assets/connect.png')}
        style={styles.logo4}
        />
       <Text style={styles.text4}>Connection</Text>
      
      </TouchableOpacity>


      <TouchableOpacity style={styles.handleButtonPress5}
        onPress={() => navigation.navigate('AdminNetworkScreen')} >
        <Image
        source={require('../assets/signal.png')}
        style={styles.logo5}
        />
       <Text style={styles.text5}>Network</Text>
      
      </TouchableOpacity>


      <TouchableOpacity style={styles.handleButtonPress6}
        onPress={() => navigation.navigate('AdminStatisticScreen')} >
        <Image
        source={require('../assets/flash.png')}
        style={styles.logo6}
        />
       <Text style={styles.text6}>Statistic</Text>
      
      </TouchableOpacity>
  </View>
);
};


                          
const styles = StyleSheet.create({

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

                             /*Admin*/
  handleButtonPress1: {
    flexDirection: 'row',
    alignItems: 'stretch',
  
    justifyContent: 'center',
    borderRadius: 10,
    padding: 30,
    width:40,
    height:40,
    left:20,
    marginBottom:0,
    top:755,
    
  },
                       
  logo: {
    width: 35,
    height: 35,
    marginRight: 0,
    left:0,
   position: 'absolute',
  },
  
  text1: {
    color: '#333281',
    fontWeight: 'bold',
    width:80,
    height:50,
    fontSize: 12,
    padding: 0,
    left:3,
  },
  

                          /*setting*/
  handleButtonPress2: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    width:50,
    height:50,
    borderRadius: 20,
    padding: 30,
    marginBottom:10,
   top:695,
    left:325,
  },
  logo1: {
    width: 35,
    height: 35,
    marginRight: 10,
   position: 'absolute',
   left:1,
  },

  text2: {
    color: '#333281',
    fontWeight: 'bold',
    width:70,
    height:50,
    fontSize: 12,
        padding: 0,
        right:6,
  },
                                /*Menu*/
  
  handleButtonPress3: {
  flexDirection: 'row',
  alignItems: 'stretch',
  borderRadius: 10,
  padding: 30,
  bottom:65,
  marginTop:0,
  left:0,
  
  },
                                                     
  logo3: {
  width: 35,
  height: 35,
  marginLeft:10,
  position:'absolute',
},
            

                            /*Connection*/
  handleButtonPress4: {
  flexDirection: 'row',
  
  height:50,
  width:50,
  alignItems: 'stretch',
  justifyContent: 'center',
  borderRadius: 10,
  padding: 20,
  top:565,
  left:163,
},



  logo4: {
  width: 35,
  height: 35,
  marginLeft:10,
  position:'absolute',
},

text4: {
  color: '#333281',
  fontWeight: 'bold',
  height:50,
  width:110,
  fontSize: 12,
 padding: 10,
 left:8,
},


                          /*Network*/
  handleButtonPress5: {
  flexDirection: 'row',                       
  height:50,
  width:50,
  alignItems: 'stretch',
  justifyContent: 'center',
  borderRadius: 10,
  padding: 20,
  top:515,
  left:80,
},
                          
                          
                          
  logo5: {
  width: 35,
  height: 35,
  marginLeft:10,
  position:'absolute',
},
                     
  text5: {
  color: '#333281',
  fontWeight: 'bold',
  height:50,
  width:100,
  fontSize: 12,
  padding: 10,
  left:12,
},
                          /*Statistics*/
handleButtonPress6: {
  flexDirection: 'row',                       
  height:50,
  width:50,
  alignItems: 'stretch',
  justifyContent: 'center',
  borderRadius: 10,
  padding: 20,
  top:465,
  left:250,
},
                          
                          
                          
  logo6: {
  width: 35,
  height: 35,
  marginLeft:10,
  position:'absolute',
},
                     
  text6: {
  color: '#333281',
  fontWeight: 'bold',
  height:50,
  width:100,
  fontSize: 12,
  padding: 10,
  left:10,
},
                          
});
export default AdminViewScreen;




