import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity,  } from "react-native";
import { Input } from "native-base";
import PropTypes from "prop-types";

import styles from "./styles";

const GeneralInputComponent = ({
  label,
  value,
  onChange,
  passportInput,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <View >
      <TextInput  style={styles.input} value={value} onChangeText={onChange} />
      </View>
    </View>
  );
};

GeneralInputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  passportInput: PropTypes.bool
};

GeneralInputComponent.defaultProps = {
  label: "",
  value: "",
  onChange: () => {},
  passportInput: false
};

export default GeneralInputComponent;
