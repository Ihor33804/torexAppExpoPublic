import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import Slider from "react-native-slider";
import PropTypes from 'prop-types';
import styles from './styles';
import { GREEN } from '../../styles/colorConstants';
const HorizontalSliderComponent = ({  ...props }) => { //2.12.2019 22:34

  const [value, setValue] = useState(0.2);

  return (
    <View style={styles.container}>
      <Slider
          value={value}
          onValueChange={value => setValue(value)}
          minimumTrackTintColor="#c9ccd4"
          maximumTrackTintColor="#c9ccd4"
          style={styles.sizeSlider}
          thumbTintColor={GREEN}
      />
  

    </View>
  );
};

HorizontalSliderComponent.propTypes = {

};

HorizontalSliderComponent.defaultProps = {

};

export default HorizontalSliderComponent;
