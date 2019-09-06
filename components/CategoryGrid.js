import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CategoryGrid = ({ itemData, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{ ...styles.gridItem, backgroundColor: itemData.item.color }}
    >
      <View>
        <Text style={styles.title}>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15,
    borderRadius: 10
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 10
  }
});

export default CategoryGrid;
