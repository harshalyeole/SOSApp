import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput, Button
} from 'react-native';
import Modal from 'react-native-modalbox';

import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: '',
           newNumber: ''
        };
    }
    showAddModal = () => {
       
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});        
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New food's information</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}           
                    onChangeText={(text) => this.setState({ newName: text })}
                    placeholder="Enter new food's name"
                    value={this.state.newName}                 
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}
                    
                    onChangeText={(text) => this.setState({newNumber: text })}
                    placeholder="Enter new food's description"
                    value={this.state.newFoodDescription}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                         if (this.state.newName.length == 0 || this.state.newNumber.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }       
                        const newKey = this.generateKey(24);
                        const newFood = {
                            key: newKey,
                            name: this.state.newName,
                            imageUrl: require('../../assests/telephone-final.png'),
                            PhoneNumber: this.state.newNumber
                        };    
                        flatListData.push(newFood);    
                        this.props.parentFlatList.refreshFlatList(newKey);                                
                        this.refs.myModal.close();                                                                       
                    }}
                    title="Press Me"
                    >
                    
                </Button>
            </Modal>
        );
    }
}