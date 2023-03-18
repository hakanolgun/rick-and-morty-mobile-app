import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import base from '../../styles/base';

interface IProps {
  name: string;
  date: string;
  no: string;
}
const EpisodeInfo = ({name, date, no}: IProps) => {
  return (
    <View style={ss.container}>
      <View>
        <Text style={base.label}>Name</Text>
        <Text style={base.label}>Date</Text>
        <Text style={base.label}>Episode</Text>
      </View>
      <View style={ss.dotView}>
        <Text style={base.label}>:</Text>
        <Text style={base.label}>:</Text>
        <Text style={base.label}>:</Text>
      </View>
      <View>
        <Text style={base.label}>{name}</Text>
        <Text style={base.label}>{date}</Text>
        <Text style={base.label}>{no}</Text>
      </View>
    </View>
  );
};

export default EpisodeInfo;
const ss = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.main,
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  dotView: {
    marginHorizontal: 10,
  },
});
