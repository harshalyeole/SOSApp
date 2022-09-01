import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Touchable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Communications from 'react-native-communications';
import LinearGradient from 'react-native-linear-gradient';
const COLORS = {primary: '#1f145c', white: '#fff'};

const ContactScreen = () => {
  const [contactList, setcontactList] = React.useState([]);
  const [textInput, setTextInput] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  React.useEffect(() => {
    getcontactListFromUserDevice();
  }, []);

  React.useEffect(() => {
    saveContactsToUserDevice(contactList);
  }, [contactList]);

  const addTodo = () => {
    if (textInput == '' && phoneNumber == '') {
      Alert.alert('Error', 'Please Add a new Contact');
    } else {
      const newContact = {
        id: Math.random(),
        task: textInput,
        Contact: phoneNumber,
        completed: false,
      };
      setcontactList([...contactList, newContact]);
      setTextInput('');
      setPhoneNumber('');
    }
  };

  const saveContactsToUserDevice = async contactList => {
    try {
      const stringifycontactList = JSON.stringify(contactList);
      await AsyncStorage.setItem('contactList', stringifycontactList);
    } catch (error) {
      console.log(error);
    }
  };

  const getcontactListFromUserDevice = async () => {
    try {
      const contactList = await AsyncStorage.getItem('contactList');
      if (contactList != null) {
        setcontactList(JSON.parse(contactList));
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  const deleteTodo = todoId => {
    const newcontactListItem = contactList.filter(item => item.id != todoId);
    setcontactList(newcontactListItem);
  };

  const clearAllcontactList = () => {
    Alert.alert('Confirm', 'Clear Contact List?', [
      {
        text: 'Yes',
        onPress: () => setcontactList([]),
      },
      {
        text: 'No',
      },
    ]);
  };

  const ListItem = ({todo}) => {
    return (
      <View style={styles.listItem}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo?.task}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo?.Contact}
          </Text>
        </View>
        
        
        <TouchableOpacity onPress={() =>
           Communications.phonecall(
            todo.Contact,
            true
           )
           }>
            <View style={styles.actionIcon}>
              <Icon name="phone" size={26} color="#7868E6" />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() =>
           Communications.textWithoutEncoding(
            todo.Contact,
            'This an emergency'
           )
           }>
            <View style={styles.actionIcon}>
              <Icon name="message" size={26} color="#7868E6" />
            </View>
          </TouchableOpacity>
        
        <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
          <View style={styles.actionIcon}>
            <Icon name="delete" size={26} color="#7868E6" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#B088F9',
          }}>
          Add Contacts!
        </Text>
        
        <TouchableOpacity style={{width: '30%', height: 40, backgroundColor: '#7868E6', justifyContent: 'center', alignItems: 'center',
      borderRadius: 20
      }}
      onPress={clearAllcontactList}
      >
        <LinearGradient
              colors={['#C3AED6', '#B088F9']}
              style={styles.signIn}>
              <Text
                style={
                   { color: '#fff', fontSize: 14}
                
                }>
                Delete List
              </Text>
              </LinearGradient>
        </TouchableOpacity>
        
       
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={contactList}
        renderItem={({item}) => <ListItem todo={item} />}
      />

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 14, marginTop: 10, flex: 1}}>
            Name</Text>
          <TextInput
          style={{borderWidth: 1, borderColor: '#B088F9', flex: 3, borderRadius: 20, paddingLeft: 15}}
            value={textInput}
            placeholder="Add Todo"
            onChangeText={text => setTextInput(text)}
            placeholderTextColor="#C3AED6"
          />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 14, marginTop: 10, flex: 1}}>
            Contact</Text>
          <TextInput
          style={{borderWidth: 1, borderColor: '#B088F9', flex: 3, borderRadius: 20, paddingLeft: 15}}
          value={phoneNumber}
          placeholder="Add Todo"
          onChangeText={text => setPhoneNumber(text)}
          placeholderTextColor="#C3AED6"
           />
          </View>
          
        
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
            <Icon name="add" color="white" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    color: 'black'
  },
  inputContainer: {
    height: '80%',
    paddingHorizontal: 15,
    elevation: 40,
    backgroundColor: '#7868E6',
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    color: 'black',
    
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listItem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ContactScreen;