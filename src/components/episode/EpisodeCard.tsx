import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import base from '../../styles/base';
import {IEpisode} from '../../interface/episode';
import {useNavigation} from '@react-navigation/native';

interface IEpisodeCard {
  episode: IEpisode;
}
const EpisodeCard = ({episode}: IEpisodeCard) => {
  const nav = useNavigation();
  const handlePress = () => {
    nav.navigate('EpisodeScreen' as never, {id: episode.id} as never);
  };
  return (
    <TouchableOpacity style={ss.cardContainer} onPress={handlePress}>
      <Text style={base.label}>{episode.name}</Text>
      <View style={base.flexRowBetween}>
        <Text style={base.text}>{episode.air_date}</Text>
        <Text style={base.text}>{episode.episode}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeCard;

const ss = StyleSheet.create({
  cardContainer: {
    ...base.cardContainer,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 6,
  },
});
