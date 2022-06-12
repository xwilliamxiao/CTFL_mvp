import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import HomeScreen from './HomeScreen';
import AthleteScreen from "./AthleteScreen";
import LeaderboardScreen from "./LeaderboardScreen";
import PackageScreen from "./PackageScreen";
import { HomeScreen } from "./HomeScreen";
//import { AthleteScreen } from './AthleteScreen';
//import { LeaderboardScreen } from './LeaderboardScreen';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getHeaderTitle } from "@react-navigation/elements";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#121212",
        inactiveTintColor: "darkgrey",
        labelStyle: { fontSize: 10 },
        style: { padding: 10, height: 70 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size /*40 */}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Packages"
        component={PackageScreen}
        options={{
          tabBarLabel: "Packages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="package-variant-closed"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Draft"
        component={AthleteScreen}
        options={{
          tabBarLabel: "Draft",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document-edit"
              color={color}
              size={size /*40*/}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          tabBarLabel: "Leaderboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-text"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#ccc",
  },
});
