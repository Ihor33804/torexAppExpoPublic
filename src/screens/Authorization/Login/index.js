import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import InputComponent from '../../../components/InputComponent';
import ButtonComponent from '../../../components/ButtonComponent';
import LinkIdentificationComponent from '../../../components/LinkIdentificationComponent';
import ResetPassword from '../../../screens/Authorization/ResetPassword';

class Login extends Component { //28.11.2019 23:34
    render() {
        return (
            <View style={[styles.container]}>
              
                <InputComponent placeholder="Email"/>
                <InputComponent placeholder="Password"/>
                
                <LinkIdentificationComponent/>
                <ButtonComponent titleButton="Log in"/>
            </View>
        );
    }
}


export default Login;
