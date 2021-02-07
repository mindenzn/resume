import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";
import "./index.css";
import React, { useState } from "react";

function App() {
  const [lng, setLang] = useState("lt");

  return (
    <div className="App">
      <Header lng={lng} setLang={setLang} />
      <Main lng={lng} />
      <Footer lng={lng} />
    </div>
  );
}

export default App;
