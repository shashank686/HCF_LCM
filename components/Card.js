import React from "react";

import { Text, View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      <Text>{props.onStart}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    elevation: 8,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Card;
