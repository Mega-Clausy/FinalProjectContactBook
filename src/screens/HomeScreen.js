import React from 'react';
import CustomAppbar from '../components/CustomAppbar';
import {Button, PaperProvider} from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Home Screen!</Text>
      </View>
    );
  };


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      color: 'black'
    },
  });

export default HomeScreen;