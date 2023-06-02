import *  as React from 'react';
import { useState } from 'react';
import { StyleSheet,Button,TextInput, Text, View } from 'react-native';


export const Login = (props) => {
    const [name, setName] = useState("Ali");
       return(
      <View style={{alignContent: 'center', alignItems: 'center',margin : 80}}> 
      <Text style={{fontSize: 30,fontWeight:'bold',marginBottom:50 }}>User Login Form</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter User Name'
          onChangeText={(text)=>{setName(text)}}
        //   value={name}
        />
        <TextInput
          style={styles.input}
          placeholder='Enter User Password'
        />
        <View style={{margin:34,}}>
          <Button title='Login' onPress={()=>{props.navigation.navigate("Profile",{name})}} color={'orange'}/>
          <Text style={{textAlign: 'center',marginTop:10,marginBottom:10}}>OR</Text>
          <Button title='SignUp' onPress={()=>{props.navigation.navigate("Signup")}} color={'orange'}/>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize : 30,
      fontWeight : 'bold'
    },
    input: {
      height: 40,
      width : 500,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius : 20,
    },
  });

