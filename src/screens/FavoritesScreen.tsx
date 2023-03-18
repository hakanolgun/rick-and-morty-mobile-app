import {View, FlatList, RefreshControl} from 'react-native';
import React from 'react';
import base from '../styles/base';
import {useFavs} from '../store/slices/favoriteSlice';
import useCharacter from '../hooks/useCharacter';
import ShowMsg from '../components/common/ShowMsg';
import CharacterCard from '../components/character/CharacterCard';
import DeleteFav from '../components/character/DeleteFav';
import {getCharID} from '../utils/utils';
const message = "You don't have any favorite character";

const FavoritesScreen = () => {
  const favs = useFavs();
  const [res, loading, error, fetchAgain] = useCharacter(favs.toString());

  const onRefresh = React.useCallback(async () => {
    await fetchAgain(favs.toString());
  }, [favs, fetchAgain]);

  const renderCards = ({item}: any) => {
    return (
      <CharacterCard url={item.url}>
        <DeleteFav charID={getCharID(item.url)} />
      </CharacterCard>
    );
  };

  const result = res ? (res.length ? res : [res].flat()) : [];
  if (loading) {
    return <ShowMsg full loading />;
  }
  if (error) {
    return <ShowMsg err full msg={error} />;
  }
  return (
    <View style={base.con}>
      {favs.length < 1 ? (
        <ShowMsg full msg={message} />
      ) : (
        <FlatList
          data={result}
          keyExtractor={item => item.id}
          renderItem={renderCards}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default FavoritesScreen;
