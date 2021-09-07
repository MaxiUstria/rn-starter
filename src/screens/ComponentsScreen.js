import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Maxi";
  return (
    <View>
      <Text style={styles.text}>Getting started with React Navite</Text>
      <Text style={styles.nameText}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  nameText: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
