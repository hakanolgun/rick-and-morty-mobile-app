import {TouchableOpacity, StyleSheet, View, Modal, Text} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import colors from '../../styles/colors';
import {useAppDispatch} from '../../store/hookTypes';
import {deleteFav} from '../../store/slices/favoriteSlice';
import Btn from '../common/Btn';
import base from '../../styles/base';
import useCharacter from '../../hooks/useCharacter';

interface IProps {
  charID: string;
}

const DeleteFav = ({charID}: IProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [res] = useCharacter(charID);
  const dispatch = useAppDispatch();
  const handlePress = () => {
    setModalVisible(true);
  };
  const deleteItem = () => {
    dispatch(deleteFav(charID));
    setModalVisible(false);
  };
  return (
    <TouchableOpacity style={ss.btn} onPress={handlePress}>
      <View style={ss.view}>
        <Icon name="trash" color="whitesmoke" size={30} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={base.centeredView}>
          <View style={base.modalView}>
            <Text style={base.text}>
              Are you sure you want to remove {res?.name ?? 'this character'}{' '}
              from favorites?
            </Text>
            <View style={base.doubleBtnContainer}>
              <Btn w={90} title="Yes" press={deleteItem} />
              <Btn w={90} title="No" press={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
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
    backgroundColor: colors.text_gray,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 3,
    marginRight: 3,
  },
});
