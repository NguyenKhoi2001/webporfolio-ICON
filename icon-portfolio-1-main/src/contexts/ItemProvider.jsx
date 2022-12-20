import React, { useMemo, useState } from "react";

import { ItemContext } from "./ItemContext";

function ItemProvider({ children }) {
  const [items, setItems] = useState([]);

  const value = useMemo(
    () => ({
      items,
      setItems,
    }),
    [items]
  );

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}

export default ItemProvider;
