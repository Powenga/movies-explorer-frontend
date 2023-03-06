import React from 'react';

type TErrorsContext = Record<string, string | null>;

export const ErrorsContext = React.createContext<TErrorsContext>({});
