import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Button,
  Keyboard,
  BackHandler,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import Card from "./Card";
import Output from "./Output";
import Input from "./Input";

const hcfCalculator = (first, second) => {
  first = Math.abs(first);
  second = Math.abs(second);

  while (first > 0) {
    const temp = second % first;
    second = first;
    first = temp;
  }
  return second;
};

const StartScreen = () => {
  const [value1, setFirstValue] = useState("");
  const [value2, setSecondValue] = useState("");
  const [answer, setAnswer] = useState();
  const [confirmed, isConfirmed] = useState(false);
  const [userPressed, setUserPressed] = useState("");

  let place = "Enter Value";
  let onStart = "Enter the Numbers";

  const onBack = () => {
    isConfirmed(false);
  };

  const firstHandler = (data) => {
    setFirstValue(data.replace(/[^0-9]/g, ""));
  };

  const secondHandler = (data) => {
    setSecondValue(data.replace(/[^0-9]/g, ""));
  };

  const hcfhandler = (data) => {
    Keyboard.dismiss();
    if (!value1 || !value2) {
      Alert.alert("Invalid Entry", "Both Inputs should be filled", [
        {
          style: "cancel",
          title: "okay",
          onPress: setSecondValue(""),
          onPress: setFirstValue(""),
        },
      ]);
      return;
    }

    if (data === "lcm") {
      const value = hcfCalculator(value1, value2);
      const ans = (value1 * value2) / value;
      setUserPressed("LCM");
      setAnswer(ans);
      isConfirmed(true);
    } else {
      const ans = hcfCalculator(value1, value2);
      setUserPressed("HCF");
      setAnswer(ans);
      isConfirmed(true);
    }

    setFirstValue("");
    setSecondValue("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
        {confirmed === false ? (
          <Card style={{ height: "80%" }} onStart={onStart}>
            <View style={styles.start}>
              <Input
                place={place}
                blurOnSubmit
                autoCorrect={false}
                keyboardType="numeric"
                autoCapitalize="none"
                onChangeText={firstHandler}
                value={value1}
              />
              <Input
                place={place}
                blurOnSubmit
                autoCorrect={false}
                keyboardType="numeric"
                autoCapitalize="none"
                onChangeText={secondHandler}
                value={value2}
              />
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.butt}>
                <Button
                  title="HCF"
                  color="green"
                  onPress={() => hcfhandler("hcf")}
                />
              </View>
              <View style={styles.butt}>
                <Button
                  title="LCM"
                  color="red"
                  onPress={() => hcfhandler("lcm")}
                />
              </View>
            </View>
          </Card>
        ) : (
          <Output pressed={userPressed} onBack={onBack}>
            {answer}
          </Output>
        )}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  start: {
    width: "100%",
    flexDirection: "row",
    padding: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttonContainer: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    justifyContent: "space-around",
  },

  butt: {
    width: "30%",
  },
});

export default StartScreen;
