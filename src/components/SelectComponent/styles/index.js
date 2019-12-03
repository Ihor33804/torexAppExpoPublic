import { StyleSheet } from 'react-native';

 import variables, { scale } from '../../../styles/variables';
 import {GREEN, WHITE, BACKGROUND_TRANSPARENT_COLOR, GREY} from '../../../styles/colorConstants';

 const { regular } = variables.fontSize;
// const { IBMPlexSans_SemiBold } = variables.fontFamily;

export default StyleSheet.create({ //1.12.2019 23:34

    container: {
    },
    iconStyle: {
      color: GREEN
    },
    text: {
      color: WHITE
    },
    textList: {
      color: WHITE
    },
    itemStyle: {
       backgroundColor: BACKGROUND_TRANSPARENT_COLOR,
       marginLeft: 0,
       paddingLeft: 10,
       borderColor: '#515365',  
      
    },
    listStyle: {
       backgroundColor: BACKGROUND_TRANSPARENT_COLOR,  
       color: WHITE, 
       borderRadius: scale(5),
          borderColor: '#515365',  
       height: scale(40),
       width: scale(300) //for android
    },
});
