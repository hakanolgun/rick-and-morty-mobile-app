import {TouchableOpacity, StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import colors from '../../styles/colors';
import {useAppDispatch} from '../../store/hookTypes';
import {deleteFav} from '../../store/slices/favoriteSlice';

interface IProps {
  charID: string;
}

const DeleteFav = ({charID}: IProps) => {
  const dispatch = useAppDispatch();
  const handlePress = () => {
    dispatch(deleteFav(charID));
  };
  return (
    <TouchableOpacity style={ss.btn} onPress={handlePress}>
      <View style={ss.view}>
        <Icon name="trash" color="whitesmoke" size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default DeleteFav;
const ss = StyleSheet.create({
  btn: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  view: {
    width: 50,
    height: 50,
    backgroundColor: colors.bg_light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 3,
    marginRight: 3,
  },
});
