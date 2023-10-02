import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalkthroughScreen from "./src/screens/WalkthroughScreen/WalkthroughScreen";
import WalkthroughAppConfig from "./src/WalkthroughAppConfig";
import DynamicAppStyles from "./src/DynamicAppStyles";
import LoginScreen from "./src/screens/WalkthroughScreen/Login"; // Import your login screen

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="El Caminante">
          {() => (
            <WalkthroughScreen
              appConfig={WalkthroughAppConfig}
              appStyles={DynamicAppStyles}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
