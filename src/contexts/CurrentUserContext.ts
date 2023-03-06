import React from 'react';
import { IUser } from '../types';
type TCurrentUserContext = {
  currentUser?: IUser;
  loggedIn?: boolean;
  isUserChecking?: boolean;
};

export const CurrentUserContext = React.createContext<TCurrentUserContext>({});
