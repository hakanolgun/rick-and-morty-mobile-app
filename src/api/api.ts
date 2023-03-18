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

export const getCharacter = (id: string) => {
  return {
    method: 'GET',
    url: `character/${id}`,
  };
};
