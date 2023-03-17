export const getEpisodes = () => {
  return {
    method: 'GET',
    url: 'episode',
  };
};

export const getEpisode = (id: number) => {
  return {
    method: 'GET',
    url: `episode/${id}`,
  };
};
