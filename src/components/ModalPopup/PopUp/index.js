/** @format */

import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';

export const PopUp = memo(item => {
  return (
    <View style={styles.container}>
      <View style={styles.playBtn}>
        <Icon name="play-circle" size={50} />
      </View>
      <Image source={{uri: item.item.image}} style={styles.imageStyle} />
      <Text style={styles.textStyle}> {item.item.name} </Text>
    </View>
  );
});
