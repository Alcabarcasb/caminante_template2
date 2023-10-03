import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import React, { useState } from 'react';


//const navigation = useNavigation();

class HomeScreen extends React.Component {
  render() {
    return (
            <View style={styles.container}>
              <Text>Bienvenido</Text>
            </View>
            );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;