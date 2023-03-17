import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import base from '../../styles/base';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  txt: string;
  my?: number;
  mx?: number;
  clr?: string;
}

const InfoBox = (props: IProps) => {
  const containerX = {
    ...ss.container,
    marginVertical: props.my || 0,
    marginHorizontal: props.mx || 0,
  };
  const text = {
    ...base.text,
    flexGrow: 1,
    color: props.clr || colors.white,
    paddingRight: 20,
  };

  return (
    <View style={containerX}>
      <Icon
        name="information-outline"
        size={26}
        color={colors.white}
        style={ss.icon}
      />
      <Text style={text}>{props.txt}</Text>
    </View>
  );
};

export default InfoBox;

const ss = StyleSheet.create({
  container: {
    backgroundColor: colors.bg_dark,
    borderRadius: 8,
    padding: 10,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 26,
    height: 26,
    marginTop: 2,
    marginRight: 6,
    alignSelf: 'center',
  },
});
