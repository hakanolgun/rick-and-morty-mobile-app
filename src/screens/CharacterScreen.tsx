import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import base from '../styles/base';
import useCharacter from '../hooks/useCharacter';
import ShowMsg from '../components/common/ShowMsg';

const CharacterScreen = ({route}: any) => {
  const [res, loading, error] = useCharacter(route.params.charID);
  if (loading || !res) {
    return <ShowMsg full loading />;
  }
  if (error) {
    return <ShowMsg full err msg={error} />;
  }
  return (
    <View style={base.con}>
      <Image style={ss.img} source={{uri: res.image}} />
      <Text>{res.status}</Text>
      <Text>{res.species}</Text>
      <Text>{res.gender}</Text>
      <Text>{res.origin.name}</Text>
      <Text>{res.location.name}</Text>
    </View>
  );
};

export default CharacterScreen;
const ss = StyleSheet.create({
  img: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginVertical: 10,
  },
});
