import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer";

const AppContext = createContext();

const initialState = {
  history: [],
  search: "",
};

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContext.Provider");
  }
  return context;
};
