import { useState } from "react";
import "../App.css";
import Calculator from "./Calculator";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Calculator></Calculator>
    </>
  );
}

export default App;
