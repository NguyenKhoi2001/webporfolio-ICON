import React from "react";
import useItemContext from "../../contexts/ItemContext";
import usePropertyContext from "../../contexts/PropertyContext";

function RemoveButton() {
  const { selectedItem } = usePropertyContext();
  const { setItems } = useItemContext();

  const trashStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 20,
    backgroundColor: "red",
    width: "100%",
    borderRadius: 6,
    color: "#fff",
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    cursor: "pointer",
  };

  const handleClick = () => {
    setItems((prev) => JSON.parse(JSON.stringify(prev.filter((item, i) => i !== selectedItem))));
  };

  return (
    <div className="trash" style={trashStyle} onClick={handleClick}>
      Remove
    </div>
  );
}

export default RemoveButton;
