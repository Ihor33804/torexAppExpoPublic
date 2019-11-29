import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Container, Header } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

const HeaderComponent = ({ ...props }) => {

  return (
    <Container style={{width: '100%',}}>
      <Header style={styles.header}>
      <View style={{width: '100%'}}>
          <View style={styles.logoItem}>
          
          </View>  
        <Text>header1</Text>
        </View>
      </Header>
    </Container>
  );
};

HeaderComponent.propTypes = {};

HeaderComponent.defaultProps = {};

export default HeaderComponent;
