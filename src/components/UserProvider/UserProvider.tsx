import React, { useState, createContext, ReactNode } from "react";

type _User = "12" | "18";
// type _Conf = "mock" | "api";)

type UserContextType = {
  user: _User;
  setUser: (user: _User) => void;
  //   conf: _Conf;
  //   setConf: (conf: _Conf) => void;
};

const DEFAULT_USER_CONTEXT: UserContextType = {
  user: "18",
  setUser: (user: _User) => {},
  //   conf: "mock",
  //   setConf: (conf: _Conf) => {},
};

export const UserContext = createContext(DEFAULT_USER_CONTEXT);

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<_User>("18");
  //   const [conf, setConf] = useState<_Conf>("mock");

  console.log(`user ${user}`);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
