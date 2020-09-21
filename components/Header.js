import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>LCM HCF</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#8470ff",
    height: 90,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    textAlign: "center",
    fontSize: 22,
    //fontFamily: "Cochin",
  },
});
export default Header;
