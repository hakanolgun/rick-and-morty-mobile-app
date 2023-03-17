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

  const handlePrev = async (prev: string) => {
    if (prev) {
      await fetchAgain(getEpisodes(prev.charAt(prev.length - 1)));
      setCurrentPage(p => p - 1);
    }
  };
  const handleNext = async (next: string) => {
    if (next) {
      await fetchAgain(getEpisodes(next.charAt(next.length - 1)));
      setCurrentPage(p => p + 1);
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
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </View>
  );
};

export default EpisodesScreen;
