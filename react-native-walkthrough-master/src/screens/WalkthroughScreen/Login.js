import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { Styles } from '@expo/config-plugins/build/android';
//import Homescreen from './HomeScreen';

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
        throw new Error('Usuario y clave incorrecto');
      }
  
      const data = await response.json();
      const idToken = data.id_token;
  
      // Obtain role from ID token
      const roleResponse = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDm7RVoLr71IqKiKP4_Z06XGU_SxBNMQSo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idToken: idToken,
        }),
      });
  
      if (!roleResponse.ok) {
        throw new Error('Error al obtener el rol solicitado');
      }
  
      const roleData = await roleResponse.json();
      const role = roleData.users[0].customClaims.role;
  
      // If role is 'client' navigate to 'Home', otherwise show an error
      if (role === 'admin') {
        Alert.alert('Inicio de sesión exitoso como admin');
        navigation.navigate('Home');
      } else {
        throw new Error('Invalid role');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };
  

  return (
    <View>
      <TextInput placeholder="Usuario" onChangeText={setUsername} />
      <TextInput placeholder="Contraseña" secureTextEntry onChangeText={setPassword} />
      <Button title="Iniciar sesión" onPress={() => this.props.navigation.navigate('App')} />
    </View>
  );
};

export default LoginScreen;