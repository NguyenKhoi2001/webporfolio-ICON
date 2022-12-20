import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Color } from "../../constants";
import ItemsCol from "../items-col/ItemsCol";
import LayoutCol from "../layout-col/LayoutCol";
import PropertyCol from "../property-col/PropertyCol";
import usePropertyContext from "../../contexts/PropertyContext";

function Sidebar() {
  const { setSelectedItem } = usePropertyContext();

  const [tab, setTab] = useState(0);

  const tabNames = ["Items", "Properties", "Layout"];

  const sidebarStyle = {
    position: "sticky",
    top: 0,
    left: 0,
    height: "100vh",
    padding: 20,
  };

  const tabsStyle = {
    display: "flex",
  };

  const buttonStyle = {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    border: "none",
    outline: "none",
    flex: 1,
    padding: 10,
    backgroundColor: "transparent",
    cursor: "pointer",
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
  };

  const buttonActiveStyle = {
    backgroundColor: "#fff",
    color: Color[0],
  };

  const contentStyle = {
    width: 400,
    height: "calc(100vh - 77px)",
    backgroundColor: "#fff",
    overflow: "auto",
    padding: 20,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: tab === 0 ? 0 : 6,
    borderTopRightRadius: tab === 2 ? 0 : 6,
  };

  return (
    <div className="sidebar" style={sidebarStyle}>
      <div className="sidebar__tabs" style={tabsStyle}>
        {tabNames.map((name, i) => (
          <button
            key={uuidv4()}
            style={{ ...buttonStyle, ...(tab === i ? buttonActiveStyle : {}) }}
            type="button"
            onClick={() => {
              if (i !== 1) setSelectedItem(-1);
              setTab(i);
            }}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="sidebar__content" style={contentStyle}>
        {tab === 0 && <ItemsCol />}
        {tab === 1 && <PropertyCol />}
        {tab === 2 && <LayoutCol />}
      </div>
    </div>
  );
}

export default Sidebar;
