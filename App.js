import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './navigation/RootNavigator';
import { AuthenticatedUserProvider } from './providers';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './screens/BottomTab';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';

import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator/>
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
    
  );
};
// const App = () => {
//   return (
//     <AuthenticatedUserProvider>
//       <SafeAreaProvider>
//         {/*} <RootNavigator/>*/}
//         <NavigationContainer>
//         <BottomTab/>
//         </NavigationContainer>
       
//       </SafeAreaProvider>
//     </AuthenticatedUserProvider>
    
//   );
// };

export default App;
