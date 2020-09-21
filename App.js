import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <StartScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
