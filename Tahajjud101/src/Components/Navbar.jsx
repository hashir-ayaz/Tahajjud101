import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> Tahajjud101</h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <li>
          <a href="#">Tahajjud Time Calculator</a>
        </li>
        <li>
          <a href="#">Benefits of Tahajjud</a>
        </li>
        <li>
          <a href="#">How to Pray Tahajjud</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
