import { StyleSheet } from 'react-native';

 import variables, { scale } from '../../../styles/variables';
// import {} from '../../../styles/constants';

 const { regular } = variables.fontSize;
// const { IBMPlexSans_SemiBold } = variables.fontFamily;

export default StyleSheet.create({ //28.11.2019 23:34

    buttonContainer: {
        marginTop: scale(40),
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    
    },

    button: {
        backgroundColor: '#2cc981',
        borderRadius: scale(50),      
        alignItems: 'center',
        borderWidth: scale(1),
        borderColor: '#2cc981',
        justifyContent: 'center',
        height: scale(60),
    },
    buttonTitle: {
      color: '#fff',
      fontSize: regular,
      justifyContent: 'center',
      alignItems: 'center',
    }
  
});
