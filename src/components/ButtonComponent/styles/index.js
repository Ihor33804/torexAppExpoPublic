import { StyleSheet } from 'react-native';

 import variables, { scale } from '../../../styles/variables';
 import {GREEN, WHITE} from '../../../styles/colorConstants';

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
        backgroundColor: GREEN,
        borderRadius: scale(50),      
        alignItems: 'center',
        borderWidth: scale(1),
        borderColor: GREEN,
        justifyContent: 'center',
        height: scale(60),
    },
    buttonTitle: {
      color: WHITE,
      fontSize: regular,
      justifyContent: 'center',
      alignItems: 'center',
    }
  
});
