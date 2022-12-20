import React from "react";

import useItemContext from "../../contexts/ItemContext";
import usePropertyContext from "../../contexts/PropertyContext";

function Size() {
  const { selectedItem } = usePropertyContext();
  const { items, setItems } = useItemContext();

  const width = items[selectedItem]?.size.width ?? -1;
  const height = items[selectedItem]?.size.height ?? -1;

  const sizeStyle = {
    margin: "10px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const labelStyle = {
    marginRight: 8,
  };

  const inputStyle = {
    width: 60,
    margin: "0px 4px",
    padding: "4px 8px",
  };

  const handleOnRowInput = (e) => {
    const rowVal = e.target.value;
    items[selectedItem].size.width = +rowVal;
    setItems(JSON.parse(JSON.stringify(items)));
  };

  const handleOnColInput = (e) => {
    const colVal = e.target.value;
    items[selectedItem].size.height = +colVal;
    setItems(JSON.parse(JSON.stringify(items)));
  };

  return (
    <div style={sizeStyle}>
      <label htmlFor="size-row" style={labelStyle}>
        Size:
      </label>
      <div>
        <input
          type="number"
          id="size-row"
          name="size-row"
          value={width}
          style={inputStyle}
          min="1"
          onInput={handleOnRowInput}
        />
        <input
          type="number"
          id="size-col"
          name="size-col"
          value={height}
          style={inputStyle}
          min="1"
          onInput={handleOnColInput}
        />
      </div>
    </div>
  );
}

export default Size;
