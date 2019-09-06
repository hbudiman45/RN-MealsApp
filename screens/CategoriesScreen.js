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
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGrid
        itemData={itemData}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryTitle: itemData.item.title
          });
        }}
      />
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
  }
});

export default CategoriesScreen;
