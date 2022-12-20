import React from "react";
import LayoutCell from "./LayoutCell";
import LayoutGrid from "./LayoutGrid";
import PublishButton from "./PublishButton";

function LayoutCol() {
  const layoutColStyle = {
    position: "relative",
    height: "calc(100% - 10px)",
  };

  return (
    <div className="layout-col" style={layoutColStyle}>
      <LayoutCell />
      <LayoutGrid />
      <PublishButton />
    </div>
  );
}

export default LayoutCol;
