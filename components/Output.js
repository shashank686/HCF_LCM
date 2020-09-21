import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImagePropTypes,
  BackHandler,
} from "react-native";
import Card from "./Card";

const Output = (props) => {
  let onStart = `${props.pressed} is `;

  BackHandler.addEventListener("hardwareBackPress", function () {
    props.onBack();
    return true;
  });

  return (
    <Card onStart={onStart} style={{ height: "30%" }}>
      <Text>{props.children}</Text>
    </Card>
  );
};

export default Output;
