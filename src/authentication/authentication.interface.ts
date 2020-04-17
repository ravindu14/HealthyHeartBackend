export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  age: number;
  gender: string;
}

export interface TokenData {
  key: string;
  expiresIn: number;
}

export interface DataInToken {
  _id: string;
  username: string;
}
