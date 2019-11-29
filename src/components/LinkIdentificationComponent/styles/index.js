import { StyleSheet } from 'react-native';

 import variables, { scale } from '../../../styles/variables';
// import {} from '../../../styles/constants';

 const { regular } = variables.fontSize;
// const { IBMPlexSans_SemiBold } = variables.fontFamily;

export default StyleSheet.create({ //28.11.2019 23:34

    linkContainer: {
        marginTop: scale(5),
        marginBottom : scale(35),
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },

   
    linkTitle: {
      color: '#2cc981',
      fontSize: regular,
       flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textDecorationLine: 'underline',
    }
  
});
