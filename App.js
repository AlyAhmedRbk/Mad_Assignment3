// import { StatusBar } from 'expo-status-bar';
import *  as React from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from "./components/Login";
import { Profile } from './components/Profile';
import { Signup } from './components/Signup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator

          screenOptions={{
            headerRight: (props) => { return (<Button title='Right' color={'green'} />) },
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 25,
            }
          }}
        >

          <Stack.Screen name="Login" component={Login}

          // options={{
          //   // headerTitle :(props) => {return(<Button title='left'/>)} ,
          //   // headerRight : (props) =>{return (<Button title='Right'/>)},
          //   title : "User Login",
          //   headerStyle : {
          //     backgroundColor : 'orange'
          //   },
          //   headerTintColor: "blue",
          //   headerTitleStyle : {
          //     fontSize : 45,
          //   }
          // }}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Signup" component={Signup} />

        </Stack.Navigator>
      </NavigationContainer>


      <View>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="User Login" component={userLogin} />
            <Tab.Screen name="Admin Login" component={adminLogin} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const userLogin = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User Login</Text>
    </View>
  )
}
const adminLogin = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Admin Login</Text>
    </View>
  )
}



