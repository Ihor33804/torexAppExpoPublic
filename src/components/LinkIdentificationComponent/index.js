import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { PLACEHOLDER_COLOR } from '../../styles/colorConstants';
import styles from './styles';

const LinkIdentificationComponent = ({  ...props }) => { //28.11.2019 23:34
  return (
    <View style={styles.linkContainer}>
        <TouchableOpacity  style={styles.linkTitle}><Text> Forgot your password? </Text></TouchableOpacity >
    </View>
  );
};

LinkIdentificationComponent.propTypes = {
};

LinkIdentificationComponent.defaultProps = {

};

export default LinkIdentificationComponent;
