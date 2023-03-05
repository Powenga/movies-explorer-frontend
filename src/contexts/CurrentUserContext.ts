import React from 'react';
type TCurrentUserContext = {
  currentUser?: { useName: string; userEmail: string; userId: string };
  loggedIn?: boolean;
  isUserChecking?: boolean;
};

export const CurrentUserContext = React.createContext<TCurrentUserContext>({});
