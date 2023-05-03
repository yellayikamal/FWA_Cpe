import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

export  function UserViewScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    setIsLoading(true);
  }
  return (

    <View style={styles.container}>
    <Text style ={styles.text}>HFCL</Text>
    <TouchableOpacity style={styles.handleButtonPress1}
        onPress={() => navigation.navigate('UserScreen')} >
         
        <Image
          source={require('../assets/user.png')}
          style={styles.logo}
        /> 
         <Text style={styles.text1}>User</Text>
      </TouchableOpacity> 
      
    

    
    <TouchableOpacity style={styles.handleButtonPress2}
        onPress={() => navigation.navigate('UserSettingScreen')} >
      
        <Image
        source={require('../assets/setting.png')}
        style={styles.logo1}
        />
       <Text style={styles.text2}>Settings</Text>
      
    </TouchableOpacity>
    
    
    <TouchableOpacity style={styles.handleButtonPress3}
        onPress={() => navigation.navigate('UserMenuScreen')} >
        <Image
        source={require('../assets/menu.png')}
        style={styles.logo3}
        />
      
    
    </TouchableOpacity>


    <TouchableOpacity style={styles.handleButtonPress4}
        onPress={() => navigation.navigate('UserConnectScreen')} >
        <Image
        source={require('../assets/connect.png')}
        style={styles.logo4}
        />
       <Text style={styles.text4}>Connect</Text>
      
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

                             /*user*/
  handleButtonPress1: {
    flexDirection: 'row',
    alignItems: 'stretch',
  
    justifyContent: 'center',
    borderRadius: 10,
    padding: 40,
    width:50,
    height:50,
    right:0,
    marginBottom:0,
    top:730,
    
  },
                       
  logo: {
    width: 50,
    height: 50,
    marginRight: 0,
   position: 'absolute',
  },
  
  text1: {
    color: '#333281',
    fontWeight: 'bold',
    width:65,
    height:50,
    fontSize: 16,
    padding: 10,
  },
  

                          /*setting*/
  handleButtonPress2: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    width:50,
    height:50,
    borderRadius: 20,
    padding: 40,
    marginBottom:10,
   top:648,
    left:300,
  },
  logo1: {
    width: 50,
    height: 50,
    marginRight: 10,
   position: 'absolute',
  },

  text2: {
    color: '#333281',
    fontWeight: 'bold',
    width:100,
    height:50,
    fontSize: 16,
        padding: 10,
  },
                                /*Menu*/
  
  handleButtonPress3: {
  flexDirection: 'row',
  alignItems: 'stretch',
  // justifyContent: 'center',
  borderRadius: 10,
  padding: 30,
  bottom:100,
  marginTop:0,
  left:0,
  
  },
                                                     
  logo3: {
  width: 50,
  height: 50,
  marginLeft:10,
  position:'absolute',
},
                            
  text3: {
  color: '#333281',
  fontWeight: 'bold',
  fontSize: 16,
 padding: 10,
},

                            /*Connect*/
  handleButtonPress4: {
  flexDirection: 'row',
  
  height:50,
  width:50,
  alignItems: 'stretch',
  justifyContent: 'center',
  borderRadius: 10,
  padding: 40,
  top:500,
  left:150,
},



  logo4: {
  width: 50,
  height: 50,
  marginLeft:10,
  position:'absolute',
},

text4: {
  color: '#333281',
  fontWeight: 'bold',
  height:50,
  width:100,
  fontSize: 16,
 padding: 10,
},

});
export default UserViewScreen;



// import React from 'react';
// import {View,
//   Text, 
//   StyleSheet, 
//   Button,
//   Image,
//   TouchableOpacity} from 'react-native';

// export  function UserHomeScreen({navigation}) { 
  
// return ( 
// <View style={styles.container}> 
// <Image style={styles.image} source={require("../assets/user.png")} />
//   <Text>UserHomeScreen</Text> 

//   </View> 
     
//   );
//   }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign:'center',
//     top:10,
//   },
//   imagehome: {
//     position:'relative',
//     left:20,
//     bottom:20,

//   }
// });

// export default UserHomeScreen;

