export interface IHomeCard {
  _id: string;
  name: string;
  nameTR: string;
  linkTo?: string;
  img?: any;
}

export interface ICountry {
  _id: string;
  name: string;
  nameTR: string;
  phone: string;
  code: string;
}

export interface IResponse {
  success: boolean;
  data?: any;
  msg?: any;
}

export interface IShowMsg {
  msg?: string;
  btnTxt?: string;
  btnFunc?: Function;
  icon?: boolean;
  iconName?: string;
  iconSize?: number;
  iconClr?: string;
  bg?: string;
  full?: boolean;
  loading?: boolean;
  err?: boolean;
  form?: boolean;
  mv?: number;
  h?: number | string;
  fs?: number;
}
export interface INameAndValue {
  name: string;
  value: string;
}
