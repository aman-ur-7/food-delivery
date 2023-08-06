import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataFromLogin, setDataFromLogin] = useState("");

  return (
    <DataContext.Provider value={{ dataFromLogin, setDataFromLogin }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
