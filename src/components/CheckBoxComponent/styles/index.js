import { StyleSheet } from 'react-native';

import variables, { scale } from '../../../styles/variables';
import { BACKGROUND_COLOR, WHITE, GREY } from '../../../styles/colorConstants'; 

export default StyleSheet.create({ //1.12.2019 23:34

    container: {
        marginTop: scale(40),
        width: '100%',
       
        
    },

   text: {
     paddingLeft: scale(20),  
     color: WHITE
   },
   listItem: {
     borderColor: 'transparent'
   }
});
