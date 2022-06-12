import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens";

// my stuff I imported
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "../screens/BottomTab";

// new stuff I added
import { AthleteScreen, FirstMeet } from "../screens";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer independent={true}>
      <BottomTab />
    </NavigationContainer>
  );
};
