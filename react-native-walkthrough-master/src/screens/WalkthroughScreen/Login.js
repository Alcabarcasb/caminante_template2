import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Alert, ImageBackground, Image, Button} from 'react-native';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../../components/MyButton';
import homeScreen from './HomeScreen';


const Separator = () => <View style={styles.separator} />;

const LoginScreen = ({}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
  
      const data = await response.json();
      const idToken = data.id_token;
      const role = data.role
      Alert.alert(`Inicio de sesión exitoso como ${role}`)

    } catch (error) {
      Alert.alert('Error', error.message);
    }
    navigation.navigate('HomeScreen')
  };
   
  return (
    <ImageBackground source={require('../../../assets/carrusel-8.png')}
      style={styles.container}>
        <View style={styles.container}>
            <View style={styles.form}>              
                   <Image
                    source={require('../../../assets/carrusel-5.png')}
                    style={styles.logo}
                    />
                  <TextInput 
                    style={styles.input} 
                    placeholder="Usuario" 
                    onChangeText={setUsername} />

                  <TextInput 
                    style={styles.input} 
                    placeholder="Contraseña" 
                    secureTextEntry 
                    onChangeText={setPassword} />

                  <MyButton
                        // onPress={() => navigation.navigate(homeScreen)} 
                        onPress={() =>handleLogin()} 
                        type={"primary"} 
                        size={"large"} 
                        label={"Ingresar"}
                      />
                  <Separator/>
                  <StatusBar style='auto'/>               
            </View>
        </View>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
   separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    backgroundColor:'#f1f1f1'
  },

  logo: {
      flex: 1,
      width: 150,
      height: 180,
      resizeMode: 'contain',
      paddingTop: 200,
      paddingLeft: 190,
      paddingBottom: 130,
      borderRadius: 10,
      marginStart: '25%',
      // backgroundColor:'#690E73',
      shadowOffset: {
        width: 0,
        height: 2,},
     },
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingHorizontal: 20,
    width: '100%',
    height: '100%',
  },
  containerTransparent: {
    opacity:0.5,
    width: '100%',
    height: '100%'
  },
  form: {
    backgroundColor: "transparent",
    padding: 40,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset:{ width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  }, 
  label: {
    fontSize: 50,
    marginBottom: 5,
    fontWeight: "bold", 
    textAlign: 'center' 
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',    
  },

  fixToTextCenter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',    
  },

});

export default LoginScreen;