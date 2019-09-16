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
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styles.bgImg}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealDetail, ...styles.mealRow }}>
            <Text>{item.duration} m</Text>
            <Text>{item.complexity}</Text>
            <Text>{item.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: "#f5f5f5",
    margin: 5,
    width: "100%",
    height: 180,
    borderRadius: 10,
    overflow: "hidden"
  },
  mealRow: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  mealHeader: {
    height: "90%"
  },
  mealDetail: {
    paddingHorizontal: 10,
    alignItems: "center",
    height: "10%"
  },
  bgImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 8
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 12,
    color: "white",
    textAlign: "center"
  }
});

export default MealItem;
