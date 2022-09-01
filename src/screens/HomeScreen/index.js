import React from 'react';
import { StyleSheet,Text,View, Dimensions, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../components/context';

const ContactsScreen = ({navigation}) => {

    const { signOut } = React.useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>

      <View style={styles.contentContainer}>
      <View style={styles.imgContainer}>
        
        <Image
            source={require('../../assests/AlertImg.png')}
            style={styles.logo}
            resizeMode='stretch'
            />
        
        </View>
        <View style={styles.textView}>
         <Text style={{color: '#7868E6', fontSize: 18, fontWeight: 'bold'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</Text>
         <Text style={{color: '#7868E6', fontSize: 16, fontWeight: 'bold'}}>Lorem ipsum dolor sit amet, </Text>
        </View>

        
        <TouchableOpacity
        onPress={() => navigation.navigate('contactsScreen')}
        style={styles.signIn}
        >
          <LinearGradient
          colors={['#C3AED6' , '#B088F9']}
          style={styles.signIn}
          >
          <Text style={styles.textSign}>
            Add Emergency Contacts
          </Text>
          </LinearGradient>
        </TouchableOpacity>
       

        
        <TouchableOpacity
        onPress={() => {signOut()}}
        style={styles.btnView}
        >
          <LinearGradient
          colors={['#C3AED6' , '#B088F9']}
          style={styles.signIn}
          >

        
          <Text style={styles.textSign}>
            SignOut
          </Text>
          </LinearGradient>
        </TouchableOpacity>
        
        </View>
        
    </View>
  );
}

export default ContactsScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    height: '100%', 
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo: {
      width: '90%',
      height: height_logo,
      alignSelf: 'center'
  },
  title: {
      color: '#fff',
      fontSize: 26,
      fontWeight: 'bold',
      alignSelf: 'center',
      paddingTop: 10,
  },
  text: {
      color: '#fff',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: '80%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },

  imgContainer: {
   height: '40%',
   width: '90%',
   marginVertical: 15,
   marginTop: 40,
  },

  textView: {
   
    height: '25%',
   width: '70%',
   marginVertical: 10,
   
  
  },

  contactsBtn: {
    
    backgroundColor: 'blue',
    color: '#fff',
    width: '80%',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    
  },

  btnView: {
   alignSelf: 'flex-end',
   color: '#fff',
   width: '30%',
   height: 40,
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: 50,
   borderRadius: 20,
  }
});