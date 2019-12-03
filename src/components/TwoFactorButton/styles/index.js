import { StyleSheet } from 'react-native';

 import variables, { scale } from '../../../styles/variables';
 import {BACKGROUND_COLOR, GREY} from '../../../styles/colorConstants';

 const { regular } = variables.fontSize;
// const { IBMPlexSans_SemiBold } = variables.fontFamily;

export default StyleSheet.create({ //1.12.2019 23:34

    buttonContainer: {
        marginTop: scale(40),
        width: '100%',
       
    },

    button: {
      //border: 1px solid #a5a5a5;
      //color: #fffbf9;
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: scale(10),      
        alignItems: 'center',
        borderWidth: scale(1),
        borderColor: {GREY},
        justifyContent: 'center',
        height: scale(60),
    
    },
    buttonTitle: {
      color: '#fffbf9',
      fontSize: regular,
      justifyContent: 'center',
      alignItems: 'center',
    }
  
});
