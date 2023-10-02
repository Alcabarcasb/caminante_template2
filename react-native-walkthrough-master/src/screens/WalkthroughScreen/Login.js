import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'test' && password === 'test') {
      Alert.alert('Inicio de sesión exitoso');
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrecta');
    }
  };

  return (
    <View>
      <TextInput placeholder="Usuario" onChangeText={setUsername} />
      <TextInput placeholder="Contraseña" secureTextEntry onChangeText={setPassword} />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;