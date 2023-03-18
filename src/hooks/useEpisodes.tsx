import {useEffect} from 'react';
import {getEpisodes} from '../api/api';
import useAxios from './useAxios';

export const useEpisodes = (page: string) => {
  const [res, loading, err, fetchData] = useAxios();

  useEffect(() => {
    let control = true;
    const getData = async () => {
      await fetchData(getEpisodes(page));
    };
    if (control) {
      getData();
    }

    return () => {
      control = false;
    };
  }, [fetchData, page]);
  return [res, loading, err, fetchData];
};

export default useEpisodes;
