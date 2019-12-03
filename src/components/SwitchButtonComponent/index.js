import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Switch } from 'react-native';
import PropTypes from 'prop-types';
import { GREEN, RED, WHITE } from '../../styles/colorConstants'; 
import styles from './styles';

const SwitchButtonComponent = ({ ...props }) => {
  //01.12.2019 18:
  //Initial state false for the switch. You can change it to true just to see.
  const [switchValue, toggleSwitch] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        thumbTintColor={WHITE}
        onTintColor={GREEN}
        tintColor={RED}
        ios_backgroundColor={RED}
        style={{ marginTop: 30 }} //backgroundColor: '#2cc981'
        onValueChange={() => toggleSwitch(!switchValue)}
        value={switchValue}
      /> 
    </View>
  );
};


export default SwitchButtonComponent;