import React from "react";
import { StyleSheet, Text, View, Image, Alert,   } from 'react-native';
import UselessTextInput from "./UselessTextInput";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function Setting() {
    return(
      <View>
      <Button
      title="Log In"
      onPress={() => Alert.alert('Enter Phone Number')}
    />
      </View>

      
    )
  }
  import React from "react";
  import { SafeAreaView, StyleSheet, TextInput } from "react-native";
  
  const UselessTextInput = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
  export default Setting;