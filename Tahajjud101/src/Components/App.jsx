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
      <h1>What is Tahajjud?</h1>
    </>
  );
}

export default App;
