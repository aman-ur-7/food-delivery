import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataFromLogin, setDataFromLogin] = useState("");
  const [id, setId] = useState("");
  return (
    <DataContext.Provider
      value={{ dataFromLogin, setDataFromLogin, id, setId }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
