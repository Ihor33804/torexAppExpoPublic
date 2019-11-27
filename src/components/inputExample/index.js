import React, {useState, useLayoutEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CustomInput = ({
                         text,
                         placeholderText,
                         showError,
                         errorText,
                         onChangeText,
                         password,
                         inputContainer,
                         ...props
                     }) => {
    const [showPlaceholderTop, setShowPlaceholderTop] = useState(false);

    useLayoutEffect(() => {
        if (text && !showPlaceholderTop) {
            setShowPlaceholderTop(true);
        } else if (!text && showPlaceholderTop) {
            setShowPlaceholderTop(false);
        }
    });

    return (
        <View style={[styles.inputContainer, inputContainer]}>
            {showPlaceholderTop && (
                <Text style={styles.topPlaceholder}>{placeholderText}</Text>
            )}
            <TextInput
                style={styles.input}
                value={text}
                placeholder={placeholderText}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
            {showError && (
                <View style={styles.errorView}/>
            )}
            {showError && <Text style={styles.errorText}>{errorText}</Text>}
        </View>
    );
};

CustomInput.propTypes = {
    text: PropTypes.string,
    placeholderText: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    inputContainer: PropTypes.object,
    password: PropTypes.bool,
    showError: PropTypes.bool,
    errorText: PropTypes.string,
};

CustomInput.defaultProps = {
    inputContainer: {},
    text: '',
    placeholderText: '',
    onChangeText: () => {
    },
    password: false,
    showError: false,
    errorText: '',
};

export default CustomInput;
