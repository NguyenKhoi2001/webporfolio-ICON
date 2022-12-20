import React from "react";
import Draggable from "react-draggable";
import { DefaultItemData, ItemTypes } from "../../constants";
import useItemContext from "../../contexts/ItemContext";
import usePropertyContext from "../../contexts/PropertyContext";

function Link({ width, height, onPage = false, itemIdx, position, properties, setItems_temp, layout_temp, selectedItem_temp, setSelectedItem_temp }) {
 const setItems = setItems_temp ? setItems_temp : useItemContext().setItems;
  const layout = layout_temp ? layout_temp : usePropertyContext().layout;
  const selectedItem = selectedItem_temp ? selectedItem_temp : usePropertyContext().selectedItem;
  const setSelectedItem = setSelectedItem_temp ? setSelectedItem_temp : usePropertyContext().setSelectedItem_temp;


  if (!width) width = layout.cellWidth * 4;
  if (!height) height = layout.cellHeight * 1;

  const style = {
    width,
    height,
    cursor: "pointer",
    ...{ ...DefaultItemData.Link, ...properties },
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

  const handleClick = (e) => {
    e.preventDefault();
    const newInput = {
      type: ItemTypes.Link,
      properties: { ...DefaultItemData.Link },
      position: { x: 0, y: 0 },
      size: { width: 4, height: 1 },
    };
    setItems((prev) => [...prev, newInput]);
  };

  const handleOnPageClick = (e) => {
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
      >
        <a href={properties.href}>{properties.text}</a>
      </div>
    </Draggable>
  ) : (
    <a href="google.com" style={style} onClick={handleClick}>
      This is a link
    </a>
  );
}

export default Link;
