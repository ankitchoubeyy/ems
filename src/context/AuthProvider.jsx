import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const { empData, adminData } = getLocalStorage();
    setData({
      empData,
      adminData,
    });
  }, []);

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
