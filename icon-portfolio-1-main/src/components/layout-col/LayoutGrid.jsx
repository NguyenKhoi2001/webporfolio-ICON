import React from "react";

import usePropertyContext from "../../contexts/PropertyContext";

function LayoutGrid() {
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
      <div className="layout-grid__width" style={style}>
        <label htmlFor="num-rows" style={labelStyle}>
          Number of rows:
        </label>
        <div>
          <input
            type="number"
            id="num-rows"
            name="numberOfRows"
            min={1}
            value={layout.numberOfRows}
            style={inputStyle}
            onInput={handleOnInput}
          />
        </div>
      </div>
      <div className="layout-grid__height" style={style}>
        <label htmlFor="num-cols" style={labelStyle}>
          Number of columns:
        </label>
        <input
          type="number"
          id="num-cols"
          name="numberOfColumns"
          min={1}
          value={layout.numberOfColumns}
          style={inputStyle}
          onInput={handleOnInput}
        />
      </div>
    </>
  );
}

export default LayoutGrid;
