import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import GeneralInputComponent from '../../components/GeneralInputComponent';
import SwitchButtonComponent from '../../components/SwitchButtonComponent';
import CancelButton  from '../../components/CancelButton';
import ButtonComponent  from '../../components/ButtonComponent';
class Settings extends Component {
  //03.12.2019 21:34
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={[styles.title]}>My profile</Text>
        <Text style={[styles.title]}>User settings:</Text>
        <View style={[styles.form]}>
          <GeneralInputComponent label="Email" />
          <GeneralInputComponent label="Full Name" />
          <GeneralInputComponent label="Old password" />
          <GeneralInputComponent label="New password" />
          <GeneralInputComponent label="Confirm new password" />
          <SwitchButtonComponent />
          <View style={styles.buttonsContent}>
           <CancelButton titleButton="Discard"/>
           <ButtonComponent titleButton="Save Changes"  />
          </View>
        </View>
      </View>
    );
  }
}

export default Settings;
