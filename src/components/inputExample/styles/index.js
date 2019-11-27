import { StyleSheet } from 'react-native';

import variables, { scale } from '../../../styles/variables';
import {
    BORDER_INPUT_COLOR, LABEL_TEXT, ERROR_COLOR, BORDER_ERROR_COLOR
} from '../../../styles/constants';

const { regular } = variables.fontSize;
const { IBMPlexSans_SemiBold } = variables.fontFamily;

export default StyleSheet.create({
    linearGradient: {
        height: scale(1),
        width: '100%'
    },
    inputContainer: {
        marginBottom: scale(20)
    },
    input: {
        height: scale(40),
        borderTopLeftRadius: scale(2),
        borderTopRightRadius: scale(2),
        borderWidth: scale(1),
        borderBottomWidth: 0,
        borderColor: BORDER_INPUT_COLOR,
        paddingHorizontal: scale(10),
        width: '100%',
        fontSize: regular,
        fontFamily: IBMPlexSans_SemiBold,
    },
    topPlaceholder: {
        fontSize: regular,
        fontFamily: IBMPlexSans_SemiBold,
        color: LABEL_TEXT,
        position: 'absolute',
        top: scale(-20),
    },
    errorText: {
        fontSize: regular,
        fontFamily: IBMPlexSans_SemiBold,
        color: ERROR_COLOR,
        position: 'absolute',
        bottom: scale(-19),
    },
    errorView: {
        height: scale(1),
        backgroundColor: BORDER_ERROR_COLOR
    }
});
