import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { PLACEHOLDER_COLOR } from '../../styles/colorConstants';
import styles from './styles';

const LinkIdentificationComponent = ({ linkText, ...props }) => { //28.11.2019 23:34
  return (
    <View style={styles.linkContainer}>
<TouchableOpacity><Text style={styles.linkTitle}>{linkText}</Text></TouchableOpacity >
    </View>
  );
};

LinkIdentificationComponent.propTypes = {
  linkText: PropTypes.string.isRequired,
};

LinkIdentificationComponent.defaultProps = {
  linkText: '',
};

export default LinkIdentificationComponent;
