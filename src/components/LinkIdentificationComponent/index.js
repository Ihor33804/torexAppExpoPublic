import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { PLACEHOLDER_COLOR } from '../../styles/colorConstants';
import styles from './styles';

const LinkIdentificationComponent
 = ({ titleButton, ...props }) => { //28.11.2019 23:34
  return (
    <View style={styles.linkContainer}>
        <Text style={styles.linkTitle}> Forgot your password? </Text>
    </View>
  );
};

LinkIdentificationComponent.propTypes = {
  titleButton: PropTypes.string,
};

LinkIdentificationComponent.defaultProps = {
  titleButton: 'Submit',
};

export default LinkIdentificationComponent
;
