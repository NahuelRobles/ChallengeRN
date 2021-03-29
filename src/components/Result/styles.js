/** @format */

import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 15,
    height: Dimensions.get('screen').height - 200,
  },
  flatListView: {
    flexDirection: 'row',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  barIndicator: {
    width: 5,
    backgroundColor: 'rgb(90, 170, 180)',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: 1,
  },
  imageView: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    width: '100%',
    borderRightWidth: 1.5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: 'rgba(61, 66, 77, 0.2)',
  },
  imageStyle: {
    width: 75,
    height: 75,
    borderRadius: 2,
  },
  textView: {
    width: '71%',
    justifyContent: 'center',
  },
  titleStyle: {
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: '600',
  },
  subTitleStyle: {
    marginLeft: 10,
    textAlign: 'left',
  },
  viewEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height - 600,
    width: Dimensions.get('screen').width - 30,
  },
  imageEmpty: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  textEmpty: {
    fontSize: 18,
    fontWeight: '600',
  },
});
