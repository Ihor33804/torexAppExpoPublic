import React, {useState, useLayoutEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Input} from 'native-base'
import PropTypes from 'prop-types';
import {PLACEHOLDER_COLOR} from '../../styles/colorConstants';
import styles from './styles';

const InputComponent = ({ //28.11.2019 23:34
                        placeholderText,
                         ...props
                     }) => {


    return (
        <View style={[styles.inputContainer]}>
            <Input
              style={styles.input}
              placeholder={placeholderText}
              placeholderTextColor={PLACEHOLDER_COLOR}
            />
        
        </View>
    );
};

InputComponent.propTypes = {
 placeholderText: PropTypes.string,
};

InputComponent.defaultProps = {
 placeholderText: '',
};

export default InputComponent;
