import React from "react";
import { FaBars, FaBell, FaUser } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = ({ toggleSidebar, isOpen }) => {
  return (
    <div className={`navbar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {/* Hamburger Button inside Navbar */}
      <div className="hamburger" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Search Input */}
      <input type="text" placeholder="Search" className="search-bar" />

      {/* Icons (Notifications & Profile) */}
      <div className="nav-icons">
        <FaBell className="icon" />
        <FaUser className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
