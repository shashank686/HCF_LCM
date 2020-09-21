import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...props}
        style={{ textAlign: "center" }}
        placeholder={props.place}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "40%",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: "red",
  },
});

export default Input;
