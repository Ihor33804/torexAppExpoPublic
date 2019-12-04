import { StyleSheet } from 'react-native';

import variables, { scale } from '../../../styles/variables';

import { BACKGROUND_SETTINGS, WHITE } from '../../../styles/colorConstants';

export default StyleSheet.create({//03.12.2019 21:34

  container: { 
    flex: 1,
    flexDirection:'column', 
    justifyContent: "center",  
    backgroundColor: BACKGROUND_SETTINGS,
    padding: scale(5),
    
  },
  title: { 
    color: WHITE
  },
  form: {
    padding: scale(16),
    backgroundColor: '#1a1d34',
    
  },
  titleInput: {
    color: '#98a0aa', 
  },
  buttonsContent: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between',
  }
    
});
