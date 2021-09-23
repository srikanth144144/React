import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Dashbord">
          <li>Dashbord</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
