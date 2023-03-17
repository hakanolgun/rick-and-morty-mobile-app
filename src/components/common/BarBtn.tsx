import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import base from '../../styles/base';

const BarBtn = ({title, press}: any) => {
  return (
    <TouchableOpacity style={styles.barButton} onPress={press}>
      <Text style={base.text}>{title}</Text>
      <Text style={styles.icon}>{'>'}</Text>
    </TouchableOpacity>
  );
};

export default BarBtn;

const styles = StyleSheet.create({
  barButton: {
    backgroundColor: 'transparent',
    padding: 12,
    marginBottom: 16,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.main,
    borderWidth: 2,
  },
  icon: {
    color: colors.white,
    fontSize: 22,
  },
});
