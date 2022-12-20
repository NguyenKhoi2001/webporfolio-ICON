import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ItemTypes } from "../../constants";
import useItemContext from "../../contexts/ItemContext";
import usePropertyContext from "../../contexts/PropertyContext";
import Block from "../items/Block";
import Image from "../items/Image";
import InputBlock from "../items/InputBlock";
import Link from "../items/Link";
import Text from "../items/Text";
import Divider from "../items/Divider";

function getItemComponent(itemType, itemIdx, properties, size, position, layout, setItems_temp, selectedItem_temp, setSelectedItem_temp, layout_temp) {
  const props = {
    itemIdx,
    onPage: true,
    properties,
    width: size?.width * layout.cellWidth,
    height: size?.height * layout.cellHeight,
    position,
    setItems_temp,
    layout_temp,
    setSelectedItem_temp,
    selectedItem_temp
  };

  switch (itemType) {
    case ItemTypes.Image:
      return <Image key={uuidv4()} {...props} />;
    case ItemTypes.Input:
      return <InputBlock key={uuidv4()} {...props} />;
    case ItemTypes.Link:
      return <Link key={uuidv4()} {...props} />;
    case ItemTypes.Text:
      return <Text key={uuidv4()} {...props} />;
    case ItemTypes.Divider:
      props.height /= layout.cellHeight;
      console.log(props);
      return <Divider key={uuidv4()} {...props} />;
    default:
      return <Block key={uuidv4()} {...props} />;
  }
}

function Page({item_temp, layout_temp, setItems_temp, selectedItem_temp, setSelectedItem_temp}) {
  
  const items = item_temp ? JSON.parse(JSON.stringify(item_temp)) : useItemContext().items;
  const layout = layout_temp ? JSON.parse(JSON.stringify(layout_temp)) : usePropertyContext().layout;
  const selectedItem = selectedItem_temp ? JSON.parse(JSON.stringify(selectedItem_temp)) : usePropertyContext().selectedItem;
  const setSelectedItem = setSelectedItem_temp ? setSelectedItem_temp : usePropertyContext().setSelectedItem;

  const width = layout.numberOfColumns * layout.cellWidth;
  const height = layout.numberOfRows * layout.cellHeight;
  const pageStyle = {
    position: "relative",
    overflow: "auto",
    padding: 0,
    margin: "20px auto",
  };

  const containerStyle = {
    height,
    width,
    backgroundColor: "#fff",
  };

  const itemsToRender = items.map((item, i) => {
    return getItemComponent(item.type, i, item.properties, item.size, item.position, layout, setItems_temp, selectedItem_temp = selectedItem, setSelectedItem_temp = setSelectedItem, layout_temp = layout);
  });

  return (
    <div className="page" style={pageStyle}>
      <div className="page__container" style={containerStyle}>
        {itemsToRender}
      </div>
    </div>
  );
}

export default Page;
