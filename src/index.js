import React, {memo, useCallback, useState} from 'react';

import {View, SafeAreaView} from 'react-native';

import {ToolBar, Search, Result} from '../src/components';

export const App = memo(() => {
  const [text, setText] = useState('');

  const handleSearchChange = useCallback(input => {
    setText(input);
  }, []);

  return (
    <SafeAreaView>
      <ToolBar title="Rick And Morty" />
      <View>
        <Search onTextChange={handleSearchChange} />
        <Result newText={text} />
      </View>
    </SafeAreaView>
  );
});
