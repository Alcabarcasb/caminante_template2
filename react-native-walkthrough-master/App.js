import React, { useEffect, useState } from "react";
import { ImageBackground, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Appearance from 'react-native'
// import { AppearanceProvider, Appearance } from "react-native-appearance";
import WalkthroughScreen from "./src/screens/WalkthroughScreen/WalkthroughScreen";
import WalkthroughAppConfig from "./src/WalkthroughAppConfig";
import DynamicAppStyles from "./src/DynamicAppStyles";
import LoginScreen from "./src/screens/WalkthroughScreen/Login";



const Stack = createStackNavigator();

export default function App() {
  // const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  // useEffect(() => {
  //   Appearance.addChangeListener(({ colorScheme }) => {
  //     setColorScheme(colorScheme);
  //   });
  // })
  return (  
      <WalkthroughScreen
          appConfig={WalkthroughAppConfig}
          appStyles={DynamicAppStyles} />        
    );
}

