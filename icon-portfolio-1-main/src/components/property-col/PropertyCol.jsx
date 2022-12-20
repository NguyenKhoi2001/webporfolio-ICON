import React from "react";

import Others from "./Others";
import Position from "./Position";
import Size from "./Size";
import RemoveButton from "./RemoveButton";

function PropertyCol() {
  const propertyColStyle = {
    position: "relative",
    height: "calc(100% - 10px)",
  };

  return (
    <div className="property-col" style={propertyColStyle}>
      <Size />
      <Position />
      <Others />
      <RemoveButton />
    </div>
  );
}

export default PropertyCol;
