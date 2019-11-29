import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Authorization/Login';

export default function App() {
  return (
    <View style={styles.container}>
  
     <Login />
    </View>
  );
}

//  <Login />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
