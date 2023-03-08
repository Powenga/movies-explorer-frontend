export interface ILink {
  title: string;
  link: string;
}

export interface IUser {
  userName: string;
  userEmail: string;
  userId: string;
}

export interface ICardData {
  title: string;
  owner: string;
  trailer: string;
  image: string;
  nameRU: string;
  nameEN: string;
  duration: number;
  movieId: string;
  _id: string;
}

type THeaders = 'Content-Type';

export interface IApiProps {
  baseUrl: string;
  headers: Record<THeaders, string>;
}
