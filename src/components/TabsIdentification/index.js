import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { Container, Header, Tabs, Tab, TabHeading } from 'native-base';
import PropTypes from 'prop-types';
import { PLACEHOLDER_COLOR } from '../../styles/colorConstants';
import styles from './styles';
import Login from '../../screens/Authorization/Login';
import Register from '../../screens/Authorization/Register';

const TabsIdentification = ({ ...props }) => {
  //29.11.2019 23:34
  return (
    <Container>
      <Header hasTabs style={styles.heading} />
      <Tabs tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}>
        <Tab
          heading="Log in"
          activeTextStyle={styles.activeTabText}
          textStyle={styles.tabText}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}>
          <Login /> 
        </Tab>
        <Tab
          heading="Register"
          activeTextStyle={styles.activeTabText}
          textStyle={styles.tabText}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}>
          <Register />
        </Tab>
      </Tabs>

     
    </Container>
  );
};

TabsIdentification.propTypes = {};

TabsIdentification.defaultProps = {};

export default TabsIdentification;
