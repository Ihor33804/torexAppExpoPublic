import { StyleSheet } from 'react-native';

import variables, { scale } from '../../../styles/variables';
import { GREEN, BLACK_COLOR } from '../../../styles/colorConstants';


const { regular } = variables.fontSize;


export default StyleSheet.create({
  header: {
    backgroundColor: BLACK_COLOR,
    height: scale(70),
    width: '100%',

  },
    logoItem: {
      backgroundColor: GREEN,    
      width: scale(70)  
    }
});
