import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { PLACEHOLDER_COLOR } from '../../styles/colorConstants';
import styles from './styles';

const TwoFactorButton  = ({ titleButton, ...props }) => { //1.12.2019 18:34
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}> {titleButton} </Text>
      </TouchableOpacity>
    </View>
  );
};

TwoFactorButton.propTypes = {
  titleButton: PropTypes.string,
};

TwoFactorButton.defaultProps = {
  titleButton: 'Submit',
};

export default TwoFactorButton ;
