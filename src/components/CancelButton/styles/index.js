import { StyleSheet } from 'react-native';

 import variables, { scale } from '../../../styles/variables';
// import {} from '../../../styles/constants';

 const { regular } = variables.fontSize;
 import { BACKGROUND_COLOR, WHITE, GREY ,  INPUT_BORDER_COLOR,} from '../../../styles/colorConstants'; 
// const { IBMPlexSans_SemiBold } = variables.fontFamily;

export default StyleSheet.create({ //1.12.2019 23:34

    buttonContainer: {
        marginTop: scale(40),
       width: '50%',
       
    },

    button: {
     
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: scale(50),      
        alignItems: 'center',
        borderWidth: scale(1),
        borderColor: {INPUT_BORDER_COLOR},
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
