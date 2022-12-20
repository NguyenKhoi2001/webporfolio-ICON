import React from "react";
import Draggable from "react-draggable";
import { DefaultItemData, ItemTypes } from "../../constants";
import useItemContext from "../../contexts/ItemContext";
import usePropertyContext from "../../contexts/PropertyContext";

function Image({ width, height, onPage = false, itemIdx, position, properties, setItems_temp, layout_temp, selectedItem_temp, setSelectedItem_temp }) {
  const setItems = setItems_temp ? setItems_temp : useItemContext().setItems;
  const layout = layout_temp ? layout_temp : usePropertyContext().layout;
  const selectedItem = selectedItem_temp ? selectedItem_temp : usePropertyContext().selectedItem;
  const setSelectedItem = setSelectedItem_temp ? setSelectedItem_temp : usePropertyContext().setSelectedItem_temp;


  if (!width) width = layout.cellWidth * 2;
  if (!height) height = layout.cellHeight * 2;

  const style = {
    width,
    height,
    backgroundImage: `url(${properties?.source || DefaultItemData.Image.source})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const dragStyle = {
    ...style,
    cursor: "move",
    position: "absolute",
    top: position?.y * layout.cellHeight || 0,
    left: position?.x * layout.cellWidth || 0,
    borderRadius: properties?.borderRadius || DefaultItemData.Image.borderRadius,
  };

  const selectedStyle = {
    boxShadow: `0 0 15px green`,
  };

  const dragHandlers = {};

  const handleClick = () => {
    const newImage = {
      type: ItemTypes.Image,
      properties: { ...DefaultItemData.Image },
      position: { x: 0, y: 0 },
      size: { width: 2, height: 2 },
    };
    setItems((prev) => [...prev, newImage]);
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
        className="image"
        style={{ ...dragStyle, ...(itemIdx === selectedItem ? selectedStyle : {}) }}
        onClick={handleOnPageClick}
      />
    </Draggable>
  ) : (
    <img className="image" style={style} src={DefaultItemData.Image.source} onClick={handleClick} />
  );
}

export default Image;
