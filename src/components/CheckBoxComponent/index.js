import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { ListItem, CheckBox, Body } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
import { GREEN } from '../../styles/colorConstants'; 
const CheckBoxComponent = ({ label,...props }) => { //1.12.2019 18:34

  const [checkBoxValue, toggleCheckBox] = useState(true);

  return (
    <View style={styles.container}> 
        <ListItem style={styles.listItem}>
           <CheckBox checked={checkBoxValue} onPress={()=>toggleCheckBox(!checkBoxValue)} color={GREEN}/>
            <Body style={styles.text}>
              <Text>{label}</Text>
            </Body>
       </ListItem>
     
    </View>
  );
};

CheckBoxComponent.propTypes = {
  label: PropTypes.string,
};

CheckBoxComponent.defaultProps = {
  label: "",
};

export default CheckBoxComponent;
