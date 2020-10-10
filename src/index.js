import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default (props) => {
  function handlePress(index) {
    const data = [...props.data];
    data[index].isActive = !data[index].isActive;
    props.onValueChange(data);
  };

  function handleStylesForActiveState(isActive) {
    return isActive ? [styles.activeSelect, props.activeStyle] : [styles.inactiveSelect, props.inactiveStyle];
  }

  return (
    <View style={styles.container}>
      {props.data.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            activeOpacity={0.9}
            style={[ handleStylesForActiveState(item.isActive), styles.select ]}
          >
            <Text style={handleStylesForActiveState(item.isActive)}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  select: {
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "transparent",
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
    marginRight: 8
  },
  activeSelect: {
    backgroundColor: "#2b49f0",
    color: "white",
    textTransform: "capitalize"
  },
  inactiveSelect: {
    backgroundColor: "#dcdee8",
    color: "black",
    textTransform: "capitalize"
  }
});
