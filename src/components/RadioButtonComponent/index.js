import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { Radio, Right, Left, Content, ListItem } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
import { GREEN } from '../../styles/colorConstants';
const RadioButtonComponent = ({ label, ...props }) => {
  //2.12.2019 22:34
  const [radioValue, toggleRadio] = useState(true);

  return (
    <Content style={styles.container}>
      <ListItem selected={true} style={styles.listItem}>
     
           <Radio color={'#c8ccd4'} selectedColor={GREEN} onPress={() => toggleRadio(!radioValue)} selected={radioValue} />
       
     
         <Text style={styles.text}>{label}</Text>
       
      </ListItem>
    </Content>
  );
};

RadioButtonComponent.propTypes = {
  label: PropTypes.string,
};

RadioButtonComponent.defaultProps = {
  label: '',
};

export default RadioButtonComponent;
