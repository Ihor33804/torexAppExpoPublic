import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { Icon,Form, Picker,  Content } from 'native-base';
import PropTypes from 'prop-types';
import { PLACEHOLDER_COLOR } from '../../styles/colorConstants';
import styles from './styles';
 import variables, { scale } from '../../styles/variables';
const SelectComponent = ({ ...props }) => {
  //2.12.2019 22:34


   const [selected, setSelected] = useState(undefined);

  return (
  
     <Content>
      <Form>
        <Picker
          mode="dropdown"
          placeholder="Select your SIM"
          iosIcon={<Icon name="arrow-down" style={styles.iconStyle} />}
          androidIcon={<Icon name="arrow-down" style={styles.iconStyle} />}
          placeHolder="Select your SIM"
          textStyle={styles.text}
          itemStyle={styles.itemStyle}
          itemTextStyle={styles.textList}
          style={styles.listStyle}
          selectedValue={selected}
          onValueChange={setSelected}>
          <Picker.Item label="Wallet" value="key0" />
          <Picker.Item label="ATM Card" value="key1" />
          <Picker.Item label="Debit Card" value="key2" />
          <Picker.Item label="Credit Card" value="key3" />
          <Picker.Item label="Net Banking" value="key4" />
        </Picker>
      </Form>
       </Content>

  );
};

SelectComponent.propTypes = {};

SelectComponent.defaultProps = {};

export default SelectComponent;
