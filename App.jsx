import React from "react";

import "../styles.css";
// importing in the js file so that the stylesheets are minified and bundled by webpack

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Note />
      <Note />
      <Note />
    </div>
  );
}
export default App;
