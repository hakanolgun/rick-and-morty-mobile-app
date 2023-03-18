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

export const generateBeginAndEndNumbers = (input: number) => {
  const firstNumber = (input - 1) * 2;
  const secondNumber = firstNumber + 2;
  return [firstNumber, secondNumber];
};

export const getSearchParamFromURL = (url: string, param: string) => {
  const include = url.includes(param);

  if (!include) {
    return null;
  }

  const params = url.split(/([&,?,=])/);
  const index = params.indexOf(param);
  const value = params[index + 2];
  return value;
};
