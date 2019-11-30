import { StyleSheet } from 'react-native';

import variables, { scale } from '../../../../styles/variables';



export default StyleSheet.create({ //30.11.2019 23:34

  container: { 
    flexDirection:'column', 
    justifyContent: "center",  
    alignItems: 'center', 
    width: scale(300),
    marginHorizontal: scale(25),
    marginVertical: scale(40),
    
  }
    
});
