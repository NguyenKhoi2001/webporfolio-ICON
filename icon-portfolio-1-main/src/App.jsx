import React from "react";
import Footer from "./components/footer/Footer";
import Page from "./components/page/Page";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const appStyle = {
    width: "100%",
    display: "flex",
  };

  return (
    <>
      <div className="app" style={appStyle}>
        <Sidebar />
        <Page />
      </div>
      <Footer />
    </>
  );
}

export default App;
