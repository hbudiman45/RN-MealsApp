import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CATEGORIES from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const categoryTitle = props.navigation.getParam("categoryTitle");
  console.log(categoryTitle);
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen for {categoryTitle}</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
          // props.navigation.goBack();
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryTitle = navigationData.navigation.getParam("categoryTitle");
  return {
    headerTitle: categoryTitle
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
