import { StyleSheet } from 'react-native';

import variables, { scale } from '../../../styles/variables';
import { BACKGROUND_COLOR, WHITE, GREY } from '../../../styles/colorConstants';

export default StyleSheet.create({ //2.12.2019 23:34

  container: {
    width: '100%',
  },

  text: {
    paddingLeft: scale(20),
    color: GREY
  },
  listItem: {
    borderColor: 'transparent'
  }
});
