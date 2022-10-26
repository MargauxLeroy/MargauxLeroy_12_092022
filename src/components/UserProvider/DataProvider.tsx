import React, { useState, createContext, ReactNode } from "react";

type DataContextType = {
  isApi: boolean;
  setIsApi: (isApi: boolean) => void;
};

const DEFAULT_DATA_CONTEXT: DataContextType = {
  isApi: false,
  setIsApi: (isApi: boolean) => {},
};

export const DataContext = createContext(DEFAULT_DATA_CONTEXT);

function DataProvider({ children }: { children: ReactNode }) {
  const [isApi, setIsApi] = useState<boolean>(false);

  return (
    <DataContext.Provider value={{ isApi, setIsApi }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
