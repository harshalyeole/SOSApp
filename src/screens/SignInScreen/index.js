import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Dimensions,
  Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';

import {AuthContext} from '../../components/context';

import Users from '../../model/Users';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {colors} = useTheme();

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(foundUser);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.header}>
        <View style={{alignSelf: 'flex-end'}}>
        <Image
          source={require('../../assests/Notify.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
        </View>
        <Text style={{color: '#7868E6', fontWeight: 'bold', fontSize: 24}}>
          Welcome!
        </Text>
        <Text style={styles.text_header}>Lorem ipsum dolor sit amet!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#fff" size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#C3AED6"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="#fff" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}
        <View style={{marginTop: 40}}>
          <Text style={styles.text_footer}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#fff" size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#C3AED6"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="#fff" size={20} />
              ) : (
                <Feather name="eye" color="#fff" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}>
            <LinearGradient
              colors={['#C3AED6', '#B088F9']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Sign In
              </Text>
              <View style={{marginLeft: 30}}>
                <Feather name="arrow-right-circle" color="#fff" size={20} />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* <TouchableOpacity
            onPress={() => navigation.navigate('SignupScreen')}
            style={[
              styles.signIn,
              {
                borderColor: '#C3AED6',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#C3AED6',
                },
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity> */}
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: 70,
  },
  footer: {
    flex: 2,
    backgroundColor: '#7868E6',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#7868E6',
    fontWeight: 'bold',
    fontSize: 18,
  },
  text_footer: {
    color: '#fff',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#fff',
  },
  errorMsg: {
    color: '#C3AED6',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 80,
    width: '60%',
    alignSelf: 'flex-end',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: height_logo,
    height: height_logo
},
});
