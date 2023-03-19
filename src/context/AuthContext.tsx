import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

type Props = {
    children: React.ReactNode;
};

export const AuthContext = createContext<string | null>(null);

const AuthContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<string | null>(null);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
