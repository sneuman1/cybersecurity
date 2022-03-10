import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';


export default function Login(props) 
{
  return(

    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={phone}
        placeholder="Phone Number"
        clearButtonMode={'while-editing'}
        enablesReturnKeyAutomatically={true}
        keyboardType="numeric"
      />
      <View style={styles.container}>
        <Button style={styles.loginButton}
        title="Send OTP"
        onPress={getOTP}
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={OTP}
        placeholder="One Time Password"
        keyboardType="numeric"
        clearButtonMode={'while-editing'}
        enablesReturnKeyAutomatically={true}
        autoComplete={'sms-otp'}
      />
      <View style={styles.container}>
        <Button style={styles.loginButton}
        title="Login"
        onPress={() => login()}
        />
      </View>
    </SafeAreaView>

  );
}

page: {
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 10,
},
title: {
  justifyContent: 'center',
  paddingHorizontal: 10,
  alignItems: 'center',
  fontSize: 25
},
input: {
height: 40,
margin: 15,
borderWidth: 1,
padding: 10,
width: '75%',
alignSelf: 'center'
},
loginButton: {
height:40,
width: 120,
textAlign: 'center'
},
container: {
  justifyContent: 'center',
  paddingHorizontal: 10,
  alignItems: 'center'
}









 



const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


