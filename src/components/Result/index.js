/** @format */

import React, {memo, useEffect, useState, useCallback} from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';

import {getAllCharacter, searchCharacter, getCharacter} from '../../Api';
import {formattedData} from '../../utils/formattedData';
import {ModalPopup} from '../../components';
import {PopUp} from '../../components/ModalPopup/PopUp';

import notMatch from '../../../assets/rick-y-morty-NM.jpeg';
import {styles} from './styles';

export const Result = memo(newText => {
  const [empty, setEmpty] = useState('fist');
  const [items, setItem] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllCharacter();
      const formatted = formattedData(response);
      setEmpty(formatted);
    }
    fetchData();
  }, []);

  const handleDefaut = useCallback(async () => {
    const response = await getAllCharacter();
    const formatted = formattedData(response);
    setEmpty(formatted);
  }, []);

  const handleNewText = useCallback(async () => {
    const response = await searchCharacter(newText.newText);
    if (response) {
      const formatted = formattedData(response);
      setEmpty(formatted);
    } else {
      setEmpty('');
    }
  }, [newText]);

  const handleOnPress = useCallback(async id => {
    const response = await getCharacter(id.toString());
    setItem(response);
    setIsVisible(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          handleOnPress(item.id);
        }}>
        <View id={`${item.id}-x1`} style={styles.flatListView}>
          <View style={styles.barIndicator} />
          <View style={styles.imageView}>
            <Image source={{uri: item.image}} style={styles.imageStyle} />
            <View style={styles.textView}>
              <Text style={styles.titleStyle}>{item.name}</Text>
              <Text style={styles.subTitleStyle}>{item.location}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (newText.newText !== '') {
    handleNewText(newText);
  }

  if (newText.newText === '') {
    handleDefaut();
  }

  return (
    <View style={styles.container}>
      {empty !== '' ? (
        <FlatList
          data={empty}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.viewEmpty}>
          <Image source={notMatch} style={styles.imageEmpty} />
          <Text style={styles.textEmpty}>No results</Text>
        </View>
      )}
      <ModalPopup onRequestClose={onCloseModal} isVisible={isVisible}>
        <PopUp item={items} />
      </ModalPopup>
    </View>
  );
});
