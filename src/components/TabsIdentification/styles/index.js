import { StyleSheet } from 'react-native';

import variables, { scale } from '../../../styles/variables';
// import {} from '../../../styles/constants';

const { xx_large } = variables.fontSize;
// const { IBMPlexSans_SemiBold } = variables.fontFamily;

export default StyleSheet.create({
  //28.11.2019 23:34
  heading: {
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  tabStyle: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    
  },

  tabText: {
    color: '#c3c8d2',
    fontSize: xx_large,
  },
  activeTabText: {
    color: '#333c4e',
    fontSize: xx_large,
  },
  activeTabStyle: {
    borderBottomWidth: scale(3),
    borderBottomColor: '#2cc981',
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
});
