import React from "react";
import Draggable from "react-draggable";
import { DefaultItemData, ItemTypes } from "../../constants";
import useItemContext from "../../contexts/ItemContext";
import usePropertyContext from "../../contexts/PropertyContext";

function Divider({ width, height, onPage = false, itemIdx, position, properties, setItems_temp, layout_temp, selectedItem_temp, setSelectedItem_temp }) {
  const setItems = setItems_temp ? setItems_temp : useItemContext().setItems;
  const layout = layout_temp ? layout_temp : usePropertyContext().layout;
  const selectedItem = selectedItem_temp ? selectedItem_temp : usePropertyContext().selectedItem;
  const setSelectedItem = setSelectedItem_temp ? setSelectedItem_temp : usePropertyContext().setSelectedItem_temp;


  if (!width) width = layout.cellWidth * 4;
  if (!height) height = DefaultItemData.Divider.thick;
  else height = properties?.thick;

  const style = {
    width,
    height,
    cursor: "pointer",
    backgroundColor: properties?.color || DefaultItemData.Divider.color,
  };

  const dragStyle = {
    ...style,
    cursor: "move",
    position: "absolute",
    top: position?.y * layout.cellHeight || 0,
    left: position?.x * layout.cellWidth || 0,
  };

  const selectedStyle = {
    boxShadow: `0 0 15px green`,
  };

  const dragHandlers = {};

  const handleClick = () => {
    const newText = {
      type: ItemTypes.Divider,
      properties: { ...DefaultItemData.Divider },
      position: { x: 0, y: 0 },
      size: { width: 4, height },
    };
    setItems((prev) => [...prev, newText]);
  };

  const handleOnPageClick = () => {
    setSelectedItem(itemIdx);
  };

  const handleDrag = (e, ui) => {
    setItems((prev) => {
      prev[itemIdx].position = {
        x: position.x + ui.x / layout.cellWidth,
        y: position.y + ui.y / layout.cellHeight,
      };
      return prev;
    });
  };

  return onPage ? (
    <Draggable
      bounds="parent"
      grid={[layout.cellWidth, layout.cellHeight]}
      {...dragHandlers}
      onDrag={handleDrag}
    >
      <div
        style={{ ...dragStyle, ...(itemIdx === selectedItem ? selectedStyle : {}) }}
        onClick={handleOnPageClick}
      />
    </Draggable>
  ) : (
    <div style={style} onClick={handleClick} />
  );
}

export default Divider;
