import React, { useState, createContext } from "react";

import "./App.scss";

import { Home } from "./pages/Home";

type User = "12" | "18";

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

const DEFAULT_USER_CONTEXT: UserContextType = {
  user: "18",
  setUser: (user: User) => {},
};

export const UserContext = createContext(DEFAULT_USER_CONTEXT);

function App() {
  const [user, setUser] = useState<User>("18");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
