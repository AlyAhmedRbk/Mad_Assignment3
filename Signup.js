import *  as React from 'react';
import { StyleSheet,Button,TextInput, Text, View } from 'react-native';


export const Signup = (props) => {
    return(
      <View style={{alignContent: 'center', alignItems: 'center',margin : 80}}> 
      <Text style={{fontSize: 30,fontWeight:'bold',marginBottom:50 }}>User Signup Form</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter User FirstName'
        />
        <TextInput
          style={styles.input}
          placeholder='Enter User LastName'
        />
        <TextInput
          style={styles.input}
          placeholder='Enter User Age'
        />
        <TextInput
          style={styles.input}
          placeholder='Enter User Gender'
        />
        <TextInput
          style={styles.input}
          placeholder='Enter User Password'
        />
        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
        />
        <View style={{margin:34,}}>
          <Button title='Submit' onPress={()=>{props.navigation.navigate("Login")}} color={'orange'}/>
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