import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList
} from "react-native";
import CATEGORIES, { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");
  // const categoryTitle = props.navigation.getParam("categoryTitle");
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = itemData => {
    return <MealItem item={itemData.item} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "90%" }}
      />
      {/* <Button
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
      /> */}
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
