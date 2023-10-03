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
      paddingBottom: 150,
    },
    image: {
      flex: 2,
      width: 200,
      height: 300,
      resizeMode: 'contain',
      marginBottom: 60,
      paddingTop: 20,
      borderRadius: 20,
      //tintColor: 'blue',
    },
    
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: appStyles.colorSet[colorScheme].mainThemeForegroundColor,
      backgroundColor: '#f1f1f1',
      },

   textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },
    containerFondo: {
      width:"100%",
      height:"100%",
      //backgroundColor: '#FF0080',
    },
  });
};
export default dynamicStyles;
