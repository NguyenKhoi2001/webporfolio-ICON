import { createContext, useContext } from "react";

export const PropertyContext = createContext();

function usePropertyContext() {
  return useContext(PropertyContext);
}

export default usePropertyContext;
