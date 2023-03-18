import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import colors from '../../styles/colors';
import {addFav, deleteFav, useFavs} from '../../store/slices/favoriteSlice';
import {useAppDispatch} from '../../store/hookTypes';

interface IProps {
  charID: string;
}

const FavoriteBtn = ({charID}: IProps) => {
  const dispatch = useAppDispatch();
  const favs = useFavs();
  const faved = favs.some(item => item === charID);

  const handlePress = async () => {
    if (faved) {
      dispatch(deleteFav(charID));
    } else {
      dispatch(addFav(charID));
    }
  };

  return (
    <TouchableOpacity style={ss.btn} onPress={handlePress}>
      <View style={ss.view}>
        <Icon name="heart" color={faved ? 'red' : 'white'} size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteBtn;
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
    paddingTop: 3,
  },
});
