import React from 'react';
import { View, Image, StatusBar } from 'react-native';

const CustomStatusBar = ({ backgroundColor, imageSource }) => (
  <View>
    <StatusBar backgroundColor={backgroundColor} translucent />
    <Image source={require('../assets/logo.jpg')} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 50 }} />
  </View>
);

export default CustomStatusBar;
