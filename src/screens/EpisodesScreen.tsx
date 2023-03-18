import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import base from '../styles/base';
import useEpisodes from '../hooks/useEpisodes';
import ShowMsg from '../components/common/ShowMsg';
import {IEpisode} from '../interface/episode';
import EpisodeCard from '../components/episode/EpisodeCard';
import Pagination from '../components/common/Pagination';
import {getEpisodes} from '../api/api';

const EpisodesScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [res, loading, error, fetchAgain] = useEpisodes('1');

  const renderCards = ({item}: {item: IEpisode}) => (
    <EpisodeCard episode={item} />
  );

  const handlePageChange = async (url: string) => {
    if (url) {
      const newPage = url.charAt(url.length - 1);
      await fetchAgain(getEpisodes(newPage));
      setCurrentPage(Number(newPage));
    }
  };

  if (loading || !res) {
    return <ShowMsg full loading />;
  }
  if (error) {
    return <ShowMsg err msg={error} />;
  }
  return (
    <View style={base.container}>
      <FlatList
        data={res.results ?? []}
        keyExtractor={item => String(item.id)}
        renderItem={renderCards}
        showsVerticalScrollIndicator={false}
      />
      <Pagination
        currentPage={currentPage}
        info={res.info}
        changePage={handlePageChange}
      />
    </View>
  );
};

export default EpisodesScreen;
