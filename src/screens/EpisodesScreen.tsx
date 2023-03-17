import {View, Text, FlatList} from 'react-native';
import React from 'react';
import base from '../styles/base';
import useEpisodes from '../hooks/useEpisodes';
import ShowMsg from '../components/common/ShowMsg';

const EpisodesScreen = () => {
  const [res, loading, error] = useEpisodes();
  React.useEffect(() => {
    console.log('res', res);
  }, [res]);

  const renderCards = ({item}) => <Text style={base.text}>{item.episode}</Text>;

  return (
    <View style={base.container}>
      {loading ? <ShowMsg full loading /> : null}
      {error ? <ShowMsg err msg={error} /> : null}
      <FlatList
        data={res?.results ?? []}
        keyExtractor={item => item.id}
        renderItem={renderCards}
      />
    </View>
  );
};

export default EpisodesScreen;
