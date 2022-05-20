import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../config';
import { NavigationContainer } from "@react-navigation/native"
import BottomTab from './BottomTab';
import { Logo } from '../components';
import { Images} from '../config';


export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
    console.log("Presed");
  };
  return (
    <View style={styles.container}>
      <Logo uri={Images.logo}/>
      <Text style={styles.textBorder}>Welcome to the CTFL Fantasy App</Text>
      <Button title='Sign Out' onPress={handleLogout} />
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBorder: {
    paddingTop: 50,
  }
});
