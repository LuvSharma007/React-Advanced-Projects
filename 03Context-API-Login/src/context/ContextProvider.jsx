import React, { useState } from "react";
import {UserContext} from "../context/UserContext"

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
