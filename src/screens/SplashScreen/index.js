import React from 'react';
import { StyleSheet,Text,View, Dimensions, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
            source={require('../../assests/AlertImg.png')}
            style={styles.logo}
            resizeMode='stretch'
            />
            <Text>Header</Text>
        </View>
        <Animatable.View 
        style={styles.footer}
        animation='fadeInUpBig'
        >
            <Text style={styles.title}>This App will make you feel safe at all time!</Text>
            <Text style={styles.text}>Lets get started</Text>

            <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
                <LinearGradient
                colors={['#C3AED6' , '#B088F9']}
                style={styles.signIn}
                >
                    <Text style={styles.textSign}>Click Here</Text>
                </LinearGradient>

            </TouchableOpacity>
            </View>
        </Animatable.View>
        
    </View>
  );
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#7868E6',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#fff',
      fontSize: 26,
      fontWeight: 'bold'
  },
  text: {
      color: '#fff',
      lineHeight: 50,
      marginTop:5,
      fontSize: 16,
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});