import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import base from '../styles/base';
import useEpisodes from '../hooks/useEpisodes';
import ShowMsg from '../components/common/ShowMsg';
import {IEpisode} from '../interface/episode';
import EpisodeCard from '../components/episode/EpisodeCard';
import Pagination from '../components/common/Pagination';
import EpisodeSearch from '../components/episode/EpisodeSearch';
import {getSearchParamFromURL} from '../utils/utils';

const EpisodesScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [res, loading, error, fetchAgain] = useEpisodes('1', '');
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (res) {
      setEpisodes(res.results);
    }
  }, [res]);

  const handleSearchResults = async (value: string) => {
    await fetchAgain('1', value);
  };

  const renderCards = ({item}: {item: IEpisode}) => (
    <EpisodeCard episode={item} />
  );

  const handlePageChange = async (url: string) => {
    if (url) {
      const newPage = getSearchParamFromURL(url, 'page');
      await fetchAgain(newPage, searchValue);
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
      <EpisodeSearch
        handleSearch={handleSearchResults}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <FlatList
        data={episodes}
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
