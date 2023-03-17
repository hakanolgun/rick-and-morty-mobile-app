import {useEffect} from 'react';
import {getEpisodes} from '../api/api';
import useAxios from './useAxios';

export const useEpisodes = () => {
  const [res, loading, err, fetchData] = useAxios();

  useEffect(() => {
    let control = true;
    const getData = async () => {
      await fetchData(getEpisodes());
    };
    if (control) {
      getData();
    }

    return () => {
      control = false;
    };
  }, [fetchData]);

  return [res, loading, err];
};

export default useEpisodes;
