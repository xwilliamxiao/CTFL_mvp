import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../config";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab";
import { Logo } from "../components";
import { Images } from "../config";

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
    console.log("Presed");
  };
  return (
    <View style={styles.container}>
      <Logo uri={Images.logo} />
      <Text style={styles.textBorder}>CTFL Fantasy Draft</Text>
      <Text style={styles.description}>
        Welcome to the Canadian Track and Field League's Fantasy Draft!
      </Text>
      <Text style={styles.description}>
        To begin you can view the available packages under the Packages tab.
        Then you can go to the Draft tab, to select the packages for the meet
      </Text>
      <Button title="Sign Out" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "grey",
    width: "100%",
    height: 600,
    padding: 16,
    paddingTop: 25,
  },
  textBorder: {
    marginTop: 20,
    fontWeight: "800",
    fontSize: 20,
  },
  card: {
    padding: 20,
    backgroundColor: "white",
  },
  description: {
    overflow: "hidden",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
    fontSize: 16,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 8,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    margin: 10,
  },
});
