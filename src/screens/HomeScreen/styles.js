import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    StatusBar
  } from 'react-native';

  const HomeScreen = () => {
   <View style={styles.container}>
    <Text style={styles.homeText}>
        HOME
    </Text>
   </View>
  };

  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });

  export default HomeScreen;