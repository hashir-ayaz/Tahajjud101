import { useState } from "react";
import "../App.css";
import Calculator from "./Calculator";
import Navbar from "./Navbar";
import Benefits from "./Benefits";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Calculator></Calculator>
      <Benefits></Benefits>
    </>
  );
}

export default App;
