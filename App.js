import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";


import { StyleSheet, Text, View,Image,TouchableOpacity ,TextInput, Button,U} from 'react-native';

export default function App() {
  const user=[{username:"Thang",password:"123"},{username:"Duc",password:"1234"}];
  const [test,settest] = useState()
  const [username,setuser] = useState();
  const [password,setpass] =useState();
  const onpress =()=>{
    for(var i = 0 ; i < user.length;i++){
      if(user[i].username==username&&user[i].password==password)
      {
        settest("Login thành công");
        break;
      }
      settest("username hoặc password ko đúng")
    }
  }
  
  
  return (
    <View style={styles.container}>
      <View style={{flex:1}}></View>
      <View style={{flex:4}}>
        <View style={{paddingLeft:10,flexDirection:'row',justifyContent:'space-between', alignItems:'center',paddingRight:50}}>
          <Text style={styles.text}>User name :</Text>
          <TextInput style={styles.input}  placeholder='User name' onChangeText={(val) => setuser(val)}>
          </TextInput>
        </View>
        <Text></Text>
        <View style={{paddingLeft:10,flexDirection:'row',justifyContent:'space-between', alignItems:'center',paddingRight:50}}>
          <Text style={styles.text}>Password:  :</Text>
          <TextInput style={styles.input}  placeholder='Password' onChangeText={(val) => setpass(val)}>
          </TextInput>
        </View >
        <View style={{alignItems:'center'}}><Text style={{fontSize:20,color:'red'}}>{test}</Text></View>
        <Button title='Login' onPress={onpress}></Button>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor:'yellow'
  },
  input:{
    borderWidth:0.8,
    justifyContent:'center',
    alignItems:'center',
    width:250,
    height:35,
    paddingLeft:30,
    fontSize:18
  },
  text:{
    fontSize:18,
    fontWeight:'bold'
  }
  

});
