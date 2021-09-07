import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend#1", age: "20" },
    { name: "Friend#2", age: "46" },
    { name: "Friend#3", age: "65" },
    { name: "Friend#4", age: "34" },
    { name: "Friend#5", age: "28" },
    { name: "Friend#6", age: "25" },
    { name: "Friend#7", age: "15" },
    { name: "Friend#8", age: "30" },
    { name: "Friend#9", age: "40" },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.text}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    >
      Proyecto Conde
    </FlatList>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
  },
});

export default ListScreen;
