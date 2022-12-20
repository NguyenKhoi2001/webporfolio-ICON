import React, { useContext } from "react";
import { Color } from "../../constants";
import useItemContext from "../../contexts/ItemContext";
import usePropertyContext from "../../contexts/PropertyContext";
import Page from "../page/Page";
import * as ReactDOMServer from 'react-dom/server'

function PublishButton() {
  const { items } = useItemContext()
  const { layout, selectedItem, setSelectedItem } = usePropertyContext();
  const { setItems } = useItemContext()

  const publishButtonStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 20,
    backgroundColor: Color[0],
    width: "100%",
    borderRadius: 6,
    color: "#fff",
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    cursor: "pointer",
  };

  const handleClick = () => {
    const temp = <Page item_temp={items} layout_temp = {layout} setItems_temp = {setItems} selectedItem_temp = {selectedItem} setSelectedItem_temp = {setSelectedItem} />
    const output = ReactDOMServer.renderToStaticMarkup(temp);
    const fileData = output;
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "test.html";
    link.href = url;
    link.click()
    console.log(output);
    syncWriteFile("test.html", output)
  };

  return (
    <div className="publish-button" style={publishButtonStyle} onClick={handleClick}>
      Publish
    </div>
  );
}

export default PublishButton;
