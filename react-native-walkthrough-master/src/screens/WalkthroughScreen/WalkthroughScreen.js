import React from "react";
import { View, Image, Text, useColorScheme } from "react-native";
import PropTypes from "prop-types";
import AppIntroSlider from "react-native-app-intro-slider";
import dynamicStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
//import LoginScreen from './Login';
//import Homescreen from './src/screens/WalkthroughScreen/HomeScreen';

const WalkthroughScreen = (props) => {
  const appConfig = props.appConfig;
  const appStyles = props.appStyles;
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);
  const navigation = useNavigation();

  const slides = appConfig.onboardingConfig.walkthroughScreens.map(
    (screenSpec, index) => {
      return {
        key: `${index}`,
        text: screenSpec.description,
        title: screenSpec.title,
        image: screenSpec.icon,
      };
    }
  );

  const _renderItem = ({ item, dimensions }) => (
    <View style={[styles.container, dimensions]}>
       <Image
        style={styles.image}
        source={item.image}
        size={100}
        color="blue"
      />
     <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>      
    </View>

    
  );
  return (
    <AppIntroSlider
      data={slides}
      slides={slides}
      renderItem={_renderItem}
      //Manejador para el evento 'done' en la última diapositiva.
      showSkipButton={true}
      showDoneButton={true}
      showNextButton={true}
      onDone={() => navigation.navigate('Login')}
      />
   );
};
WalkthroughScreen.propTypes = {
  appStyles: PropTypes.object,
  appConfig: PropTypes.object,
};

export default WalkthroughScreen;
