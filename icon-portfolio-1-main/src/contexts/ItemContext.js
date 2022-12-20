import { createContext, useContext } from "react";

export const ItemContext = createContext();

function useItemContext() {
  return useContext(ItemContext);
}

export default useItemContext;
