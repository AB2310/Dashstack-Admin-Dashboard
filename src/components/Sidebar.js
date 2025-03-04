import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css"; // Import the CSS file for styles
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // For toggle icon

const Sidebar = ({ isOpen }) => {
  const [isPagesOpen, setIsPagesOpen] = useState(true); // State to manage Pages section toggle

  // Toggle Pages section visibility
  const togglePages = () => setIsPagesOpen(!isPagesOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <center>
        <h2 className="logo">
          <span style={{ color: "#4880FF" }}>Dash</span>Stack
        </h2>
      </center>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={({ isActive }) => (isActive ? "active" : "")}>
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink to="/inbox" className={({ isActive }) => (isActive ? "active" : "")}>
            Inbox
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className={({ isActive }) => (isActive ? "active" : "")}>
            Order Lists
          </NavLink>
        </li>
        <li>
          <NavLink to="/stock" className={({ isActive }) => (isActive ? "active" : "")}>
            Product Stock
          </NavLink>
        </li>

        {/* Collapsible Pages Section */}
        <li className="collapsible">
          <div className="collapsible-header" onClick={togglePages}>
            <span>Pages</span>
            {isPagesOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isPagesOpen && (
            <ul className="collapsible-content">
              <li>
                <NavLink to="/pricing" className={({ isActive }) => (isActive ? "active" : "")}>
                  &emsp; Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/calendar" className={({ isActive }) => (isActive ? "active" : "")}>
                &emsp; Calendar
                </NavLink>
              </li>
              <li>
                <NavLink to="/to-do" className={({ isActive }) => (isActive ? "active" : "")}>
                &emsp; To-Do
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                &emsp; Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/invoice" className={({ isActive }) => (isActive ? "active" : "")}>
                &emsp; Invoice
                </NavLink>
              </li>
              <li>
                <NavLink to="/ui-elements" className={({ isActive }) => (isActive ? "active" : "")}>
                &emsp; UI Elements
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" className={({ isActive }) => (isActive ? "active" : "")}>
                &emsp; Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/table" className={({ isActive }) => (isActive ? "active" : "")}>
                &emsp; Table
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" className={({ isActive }) => (isActive ? "active" : "")}>
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
