import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Text,Button ,Alert} from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  
  return (
    <SafeAreaView>
      <Text>Username :</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>Password :</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        // placeholder="Password"
      />
      <Button title="Login" 
      onPress={() => alert('Simple Button pressed')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;
