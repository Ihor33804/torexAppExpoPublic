import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { PLACEHOLDER_COLOR } from '../../styles/colorConstants';
import styles from './styles';

const ButtonComponent = ({ titleButton, ...props }) => { //28.11.2019 23:34
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}> {titleButton} </Text>
      </TouchableOpacity>
    </View>
  );
};

ButtonComponent.propTypes = {
  titleButton: PropTypes.string,
};

ButtonComponent.defaultProps = {
  titleButton: 'Submit',
};

export default ButtonComponent;
