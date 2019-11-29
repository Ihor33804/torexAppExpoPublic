import { StyleSheet } from 'react-native';

 import variables, { scale } from '../../../styles/variables';
// import {} from '../../../styles/constants';

 const { regular } = variables.fontSize;
// const { IBMPlexSans_SemiBold } = variables.fontFamily;

export default StyleSheet.create({ //28.11.2019 23:34

    inputContainer: {
        marginBottom: scale(16),
        width: '100%',
        height: scale(48),
    },
    input: {
        height: scale(48),
        borderRadius: scale(10),
        borderWidth: scale(1),
        borderColor: '#d2d2d7',
        backgroundColor: '#f1f2f3',
        maxWidth: scale(300),
        width: '100%',
        fontSize: regular,
        color: '#1a1d34',
        paddingLeft: scale(14),
        paddingRight: scale(14),
       
    }
  
});
