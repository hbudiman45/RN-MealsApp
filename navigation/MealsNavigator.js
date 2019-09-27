import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import Color from "../constant/Color";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meals Categories"
      }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerTitle: "Meals App",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Color.primary : "white"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Color.primary
    }
  }
);

const FavNav = createStackNavigator(
  {
    Favorite: FavoriteScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerTitle: "Meals App",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Color.primary : "white"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Color.primary
    }
  }
);

const screenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      }
    }
  },
  Favorites: {
    screen: FavNav,
    navigationOptions: {
      tabBarLabel: "Favorites Meals",
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      }
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(screenConfig, {
        barStyle: { backgroundColor: Color.primary }
      })
    : createBottomTabNavigator(screenConfig, {
        tabBarOptions: {
          activeTintColor: Color.accent1
        }
      });

export default createAppContainer(MealsFavTabNavigator);
