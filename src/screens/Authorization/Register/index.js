import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import InputComponent from '../../../components/InputComponent';
import ButtonComponent from '../../../components/ButtonComponent';

class Register extends Component { //29.11.2019 23:34
    render() {
        return (
            <View style={[styles.container]}>     
                <InputComponent placeholder="Full Name"/>
                <InputComponent placeholder="Email"/>
                <InputComponent placeholder="Password"/>
                <InputComponent placeholder="Confirm password"/>
                <ButtonComponent titleButton="Register"/>
            </View>
        );
    }
}


export default Register;
