import React from "react";
import Block from "../items/Block";
import Image from "../items/Image";
import Link from "../items/Link";
import Text from "../items/Text";
import InputBlock from "../items/InputBlock";
import Divider from "../items/Divider";

function ItemsCol() {
  const itemsColStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  };

  const guideStyle = {
    fontStyle: "italic",
    color: "#aaa",
  };

  return (
    <div className="items-col" style={itemsColStyle}>
      <span className="item-col_guide" style={guideStyle}>
        *Click to add
      </span>
      <Block />
      <Image />
      <InputBlock />
      <Link />
      <Text />
      <Divider />
    </div>
  );
}

export default ItemsCol;
