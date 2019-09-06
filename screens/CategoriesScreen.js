import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Platform
} from "react-native";
import Color from "../constant/Color";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryTitle: itemData.item.title
          });
        }}
        style={styles.gridItem}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
    // <View style={styles.screen}>
    //   <Text>Categories Screen</Text>
    //   {/* <Button
    //     title="Go to Meal"
    //     onPress={() => {
    //       props.navigation.navigate({ routeName: "CategoryMeals" });
    //     }}
    //   /> */}
    //   <Button
    //     title="Go to Meal Screen"
    //     onPress={() => {
    //       props.navigation.navigate("CategoryMeals");
    //     }}
    //     color="blue"
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 100
  }
});

export default CategoriesScreen;
