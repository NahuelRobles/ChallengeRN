/** @format */

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 48,
    justifyContent: 'flex-start',
    marginLeft: 16,
    marginRight: 8,
    marginTop: 10,
  },
  content: {
    borderColor: 'rgba(61, 66, 77, 0.2)',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    height: 48,
    justifyContent: 'flex-start',
    marginRight: 8,
  },
  button: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  filters: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  title: {
    fontSize: 14,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 8,
  },
});
