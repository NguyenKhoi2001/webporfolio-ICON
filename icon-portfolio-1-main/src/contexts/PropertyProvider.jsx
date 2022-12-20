import React, { useMemo, useState } from "react";

import { CELL_HEIGHT, CELL_WIDTH, NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../constants";
import { PropertyContext } from "./PropertyContext";

function PropertyProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [layout, setLayout] = useState({
    numberOfRows: NUMBER_OF_ROWS,
    numberOfColumns: NUMBER_OF_COLUMNS,
    cellWidth: CELL_WIDTH,
    cellHeight: CELL_HEIGHT,
  });

  const value = useMemo(
    () => ({
      selectedItem,
      setSelectedItem,
      layout,
      setLayout,
    }),
    [selectedItem, layout]
  );

  return <PropertyContext.Provider value={value}>{children}</PropertyContext.Provider>;
}

export default PropertyProvider;
