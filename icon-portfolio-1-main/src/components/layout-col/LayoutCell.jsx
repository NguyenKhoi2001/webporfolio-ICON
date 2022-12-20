import React from "react";

import usePropertyContext from "../../contexts/PropertyContext";

function LayoutCell() {
  const { layout, setLayout } = usePropertyContext();

  const style = {
    margin: "10px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const labelStyle = {
    marginRight: 8,
  };

  const inputStyle = {
    width: 100,
    margin: "0px 4px",
    padding: "4px 8px",
  };

  const handleOnInput = (e) => {
    const data = {
      [e.target.name]: +e.target.value,
    };
    setLayout((prev) => ({ ...prev, ...data }));
  };

  return (
    <>
      <div className="layout-cell__width" style={style}>
        <label htmlFor="cell-width" style={labelStyle}>
          Cell width:
        </label>
        <input
          type="number"
          id="cell-width"
          name="cellWidth"
          min={1}
          value={layout.cellWidth}
          style={inputStyle}
          onInput={handleOnInput}
        />
      </div>
      <div className="layout-cell_height" style={style}>
        <label htmlFor="cell-height" style={labelStyle}>
          Cell height:
        </label>
        <input
          type="number"
          id="cell-height"
          name="cellHeight"
          min={1}
          value={layout.cellHeight}
          style={inputStyle}
          onInput={handleOnInput}
        />
      </div>
    </>
  );
}

export default LayoutCell;
