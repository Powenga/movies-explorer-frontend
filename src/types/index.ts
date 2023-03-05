export interface ILink {
  title: string;
  link: string;
}

export interface IUser {
  useName: string;
  userEmail: string;
  userId: string;
}

export interface ICardData {
  title: string;
  owner: IUser;
}
