export const getEpisodes = (page: string) => {
  return {
    method: 'GET',
    url: `episode?page=${page}`,
  };
};

export const getEpisode = (id: number) => {
  return {
    method: 'GET',
    url: `episode/${id}`,
  };
};
