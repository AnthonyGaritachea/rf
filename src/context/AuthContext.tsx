import React from 'react';
import { useState, createContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../firebase';

type Props = {
    children: React.ReactNode;
};

export const AuthContext = createContext<string | null>(null);

const AuthContextProvider = ({ children }: Props) => {
    const [loaded, setLoaded] = useState(false);
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setUser(user.uid);
            if (!loaded) setLoaded(true);
        });
    }, []);

    return loaded ? <AuthContext.Provider value={user}>{children}</AuthContext.Provider> : null;
};

export default AuthContextProvider;
