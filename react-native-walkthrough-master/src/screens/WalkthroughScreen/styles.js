import { StyleSheet, ImageBackground, TextInput } from 'react-native';


const dynamicStyles = (appStyles, colorScheme) => {
  return StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 3,
      color: 'black',
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      color: 'black',
      paddingLeft: 10,
      paddingRight: 10,
    },
    image: {
      flex: 2,
      width: 200,
      height: 400,
      resizeMode: 'contain',
      marginBottom: 60,
      paddingTop: 20,
      borderRadius: 20
      //tintColor: 'white',
    },
    
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      //backgroundColor: appStyles.colorSet[colorScheme].mainThemeForegroundColor,
      //backgroundColor: '#CB38B7'
      },
    button: {
      fontSize: 18,
      color: 'white',
      marginTop: 10,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    }
  });
};
export default dynamicStyles;
