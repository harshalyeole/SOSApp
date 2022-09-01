import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import PropTypes from 'prop-types';
  
  
  export default function CustomTextInput(props) {
    CustomTextInput.propTypes = {
      value: PropTypes.string,
      style: PropTypes.object,
      editable: PropTypes.bool,
      multiline: PropTypes.bool,
      onChangeText: PropTypes.func,
      placeholder: PropTypes.string,
      onEndEditing: PropTypes.func,
    };
  
    CustomTextInput.defaultProps = {
      value: '',
      onChangeText: () => {},
      style: {
        flex: 1,
        color: 'black',
        marginLeft: 30,
        paddingBottom: 20,
      },
      multiline: false,
      editable: true,
      placeholder: '',
      onEndEditing: () => {},
    };
  
    return (
      <View style={inputTextBoxStyles.emailContainer}>
        <View style={{flex: 0.2, borderWidth: 0, alignItems: 'flex-end'}}>
          <Image style={{width: 30, height: 27}} source={props.iconName} />
        </View>
        <TextInput
          style={inputTextBoxStyles.inputField}
          placeholder={props.placeholder}
          value={props.value}
          placeholderTextColor={props.placeholderTextColor}
          keyboardType="default"
          onChangeText={props.onChangeText}
          onEndEditing={props.onEndEditing}
          secureTextEntry={props.secureTextEntry}
          icon={props.icon}
          iconPosition={props.iconPosition}
        />
       
      </View>
    );
  }




 const inputTextBoxStyles = StyleSheet.create({
    emailContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#E5E5E5',
      height: 60,
      borderRadius: 40,
      width: '85%',
      alignSelf: 'center',
    
      marginBottom: 20,
      
      
    },
    inputField: {
      flex: 1,
      color: 'black',
      marginLeft: 30,
     
    },
    imgContainer: {
        flex: 0.2, borderWidth: 0, alignItems: 'flex-end'
    },
    eyeIconContainer: {
        position: 'absolute', right: 17, marginVertical: 'auto'
    }
  });
  
  