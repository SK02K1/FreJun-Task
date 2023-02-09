import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

AuthContext.displayName = 'AuthProvider';

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem('isLoggedIn')) ?? false
  );

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const value = useContext(AuthContext);
  if (value !== null) {
    return value;
  }
  throw new Error(`useAuth must be used within AuthProvider`);
};

export { AuthProvider, useAuth };
