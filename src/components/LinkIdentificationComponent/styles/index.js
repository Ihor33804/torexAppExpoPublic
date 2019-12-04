import { StyleSheet } from 'react-native';

 import variables, { scale } from '../../../styles/variables';
 import {GREEN} from '../../../styles/colorConstants';

 const { regular } = variables.fontSize;
// const { IBMPlexSans_SemiBold } = variables.fontFamily;

export default StyleSheet.create({ //28.11.2019 23:34

    linkContainer: {
       // marginTop: scale(5),
        marginBottom : scale(40),
        width: '100%',
       
    },

   
    linkTitle: {
      color: {GREEN},
      fontSize: regular,
      textAlign: 'center',
      textDecorationLine: 'underline',
    }
  
});
