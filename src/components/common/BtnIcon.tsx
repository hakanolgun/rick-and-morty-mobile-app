import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  name: string;
  press: any;
  size?: number;
  color?: string;
  bg?: string;
  pos?: 'absolute' | 'relative' | undefined;
  top?: number;
  right?: number;
}

const BtnIcon = ({
  name,
  press,
  size = 34,
  color = 'white',
  bg = 'transparent',
  pos,
  top,
  right,
}: IProps) => {
  const ss = StyleSheet.create({
    btn: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      width: size,
      height: size,
      backgroundColor: bg,
      position: pos ? pos : undefined,
      top: top || 0,
      right: right || 0,
    },
  });

  return (
    <TouchableOpacity onPress={() => press()} style={ss.btn}>
      <Icon name={name} color={color} size={size - 4} />
    </TouchableOpacity>
  );
};

export default BtnIcon;
