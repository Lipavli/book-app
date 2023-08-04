import React, { useState } from "react";
import Search from "./components/Search";
import "./styles/style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Search />
      <Main />
    </div>
  );
}

export default App;
