import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ShowMsg from '../components/common/ShowMsg';
import base from '../styles/base';
import useEpisode from '../hooks/useEpisode';

const EpisodeScreen = ({route, navigation}) => {
  const [res, loading, error] = useEpisode(route.params.id);

  const renderCharacters = () => <Text>Character</Text>;

  if (loading || !res) {
    return <ShowMsg full loading />;
  }
  if (error) {
    return <ShowMsg full err msg={error} />;
  }
  return (
    <View style={base.container}>
      <View>
        <Text>{res.name}</Text>
        <Text>{res.air_date}</Text>
        <Text>{res.episode}</Text>
      </View>
      <FlatList
        data={res.characters}
        keyExtractor={item => item}
        renderItem={renderCharacters}
      />
    </View>
  );
};

export default EpisodeScreen;
