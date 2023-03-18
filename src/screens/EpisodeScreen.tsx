import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ShowMsg from '../components/common/ShowMsg';
import base from '../styles/base';
import useEpisode from '../hooks/useEpisode';
import EpisodeInfo from '../components/episode/EpisodeInfo';
import CharacterCard from '../components/character/CharacterCard';
import FavoriteBtn from '../components/character/FavoriteBtn';
import {getCharID} from '../utils/utils';

const EpisodeScreen = ({route}: any) => {
  const [res, loading, error] = useEpisode(route.params.id);

  const renderCharacters = ({item}: {item: string}) => (
    <CharacterCard url={item}>
      <FavoriteBtn charID={getCharID(item)} />
    </CharacterCard>
  );

  if (loading || !res) {
    return <ShowMsg full loading />;
  }
  if (error) {
    return <ShowMsg full err msg={error} />;
  }
  return (
    <View style={base.con}>
      <EpisodeInfo name={res.name} date={res.air_date} no={res.episode} />
      <Text style={base.title}>Characters In This Episode</Text>
      <FlatList
        data={res.characters}
        keyExtractor={item => item}
        renderItem={renderCharacters}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
      />
    </View>
  );
};

export default EpisodeScreen;
