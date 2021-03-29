/** @format */

import React, {memo, useCallback, useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';

export const Search = memo(({onTextChange = () => {}}) => {
  const [text, setText] = useState('');
  const input = useRef();

  const handleClearText = useCallback(() => {
    onTextChange('');
    setText('');
  }, [onTextChange]);

  const handleSearch = useCallback(
    // eslint-disable-next-line no-shadow
    text => {
      onTextChange(text);
      setText(text);
    },
    [onTextChange],
  );

  const handleFocus = useCallback(() => {
    if (input?.current) {
      input.current.focus();
    }
  }, [input]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {!!text && (
          <TouchableOpacity style={styles.button} onPress={handleClearText}>
            <Icon size={24} color="#6C727E" name="close" />
          </TouchableOpacity>
        )}
        {!text && (
          <TouchableOpacity style={styles.button} onPress={handleFocus}>
            <Icon size={24} color="#6C727E" name="search" />
          </TouchableOpacity>
        )}

        <TextInput
          autoCapitalize="none"
          onChangeText={handleSearch}
          placeholder="Search..."
          placeholderTextColor="#6C727E"
          ref={input}
          style={styles.input}
          value={text}
        />
      </View>
    </View>
  );
});
