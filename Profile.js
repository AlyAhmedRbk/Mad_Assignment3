import *  as React from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';

export const Profile = (props) => {
    const { name } = props.route.params;
    return (
        <View>
            <View style={{ alignContent: 'center', alignItems: 'center', margin: 80 }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', margin: 30 }}>Welcome To My App!</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Hello : {name}</Text>
            </View>
        </View>
    )
}


