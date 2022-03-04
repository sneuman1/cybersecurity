import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';


export default function Login(props) 
{
  return(
    <View>
      <Text>This is the Login Screen</Text>
      <Button title="Log In" onPress={()=>props.setUserLoggedIn(true)}></Button>

    </View>
  );
}





const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


