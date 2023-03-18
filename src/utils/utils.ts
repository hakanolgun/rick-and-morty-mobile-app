export const createAvatarUrl = (url: string) => {
  const array = url.split('/');
  const charID = array[array.length - 1];
  return `https://rickandmortyapi.com/api/character/avatar/${charID}.jpeg`;
};

export const getCharID = (url: string) => {
  const array = url.split('/');
  const charID = array[array.length - 1];
  return charID;
};
