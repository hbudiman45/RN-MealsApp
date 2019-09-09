import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const MealItem = ({ item, onSelectMeal }) => {
  return (
    <TouchableOpacity onPress={onSelectMeal} style={styles.mealItem}>
      <View>
        <View style={{ ...styles.mealHeader }}></View>
        <View style={{ ...styles.mealDetail }}>
          <Text>{item.duration} m</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: "#ddd",
    margin: 5,
    width: "100%",
    height: 100
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "70%"
  },
  mealDetail: {
    paddingHorizontal: 10
  }
});

export default MealItem;
