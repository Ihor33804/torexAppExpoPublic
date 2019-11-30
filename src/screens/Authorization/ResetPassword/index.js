import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import InputComponent from '../../../components/InputComponent';
import ButtonComponent from '../../../components/ButtonComponent';

class ResetPassword extends Component { //29.11.2019 23:34
    render() {
        return (
            <View style={[styles.container]}>     
                <InputComponent placeholder="Enter yourEmail"/>
                <ButtonComponent titleButton="Get Code"/>
            </View>
        );
    }
}


export default ResetPassword;
