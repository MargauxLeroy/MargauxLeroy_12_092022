import React, { useState, createContext, ReactNode } from "react";

type _User = "12" | "18";

type UserContextType = {
  user: _User;
  setUser: (user: _User) => void;
};

const DEFAULT_USER_CONTEXT: UserContextType = {
  user: "18",
  setUser: (user: _User) => {},
};

export const UserContext = createContext(DEFAULT_USER_CONTEXT);

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<_User>("18");

  console.log(`user ${user}`);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
