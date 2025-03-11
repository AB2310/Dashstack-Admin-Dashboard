import React, { useState } from "react";
import { FaBars, FaBell, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaExclamation, FaSignOutAlt } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { FaUserCog } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import "../styles/navbar.css";
import usaflag from "../assets/usa.png";
import frenchflag from "../assets/france.png";
import spanishflag from "../assets/spain.png";

const Navbar = ({ toggleSidebar, isOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleLanguageDropdown = () => setLanguageDropdown(!languageDropdown);
  const toggleNotificationDropdown = () => setNotificationDropdown(!notificationDropdown);

  return (
    
    <div className={`navbar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {/* Hamburger Button inside Navbar */}
      <div className="n1">
      <div className="hamburger" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Search Input */}
      <input type="text" placeholder="Search" className="search-bar" />
    </div>

    <div className="n2">
      {/* Notification Icon with Dropdown */}
      <div className="notification">
        <FaBell className="bellicon" onClick={toggleNotificationDropdown} />
        {notificationDropdown && (
          <div className="notification-dropdown">
            <div className="notification-header">Notification</div>
            <div className="notification-item">
              <div className="notification-icon blue">
                <IoMdSettings />
              </div>
              <div className="notification-text">
                <div className="title">Settings</div>
                <div className="message">Update Dashboard</div>
              </div>
            </div>
            <div className="notification-item">
              <div className="notification-icon pink">
                <FaCalendarAlt />
              </div>
              <div className="notification-text">
                <div className="title">Event Update</div>
                <div className="message">An event date update again</div>
              </div>
            </div>
            <div className="notification-item">
              <div className="notification-icon purple">
                <FaUser />
              </div>
              <div className="notification-text">
                <div className="title">Profile</div>
                <div className="message">Update your profile</div>
              </div>
            </div>
            <div className="notification-item">
              <div className="notification-icon red">
                <FaExclamation />
              </div>
              <div className="notification-text">
                <div className="title">Application Error</div>
                <div className="message">Check your running application</div>
              </div>
            </div>
          </div>
        )}
      </div>

       {/* Language Dropdown */}
       <div className="language-dropdown">
        <button onClick={toggleLanguageDropdown} className="language-btn">
          <span>English</span>
          <IoMdArrowDropdown />
        </button>
        {languageDropdown && (
          <div className="language-options">
            <button className="language-option">
              <img src={usaflag} alt="English" className="flag-icon" />
              English
            </button>
            <button className="language-option">
              <img src={frenchflag} alt="French" className="flag-icon" />
              French
            </button>
            <button className="language-option">
              <img src={spanishflag} alt="Spanish" className="flag-icon" />
              Spanish
            </button>
          </div>
        )}
      </div>

      {/* Profile Icon with Dropdown */}
        {/* Profile Icon with Dropdown */}
          <div className="profile-icon" onClick={toggleDropdown}>
          <FaUser className="icon" />
          {dropdownOpen && (
            <div className="profile-dropdown">
              <div className="profile-item">
                <div className="profile-icon1-item">
                  <FaUserCog />
                </div>
                <p>Manage Account</p>
              </div>
              <div className="profile-item">
                <div className="profile-icon2-item">
                  <FaKey />
                </div>
                <p>Change Password</p>
              </div>
              <div className="profile-item">
                <div className="profile-icon3-item">
                  <TbRefresh />
                </div>
                <p>Activity Log</p>
              </div>
              <div className="profile-item">
                <div className="profile-icon4-item">
                  <FaSignOutAlt />
                </div>
                <p>Logout</p>
              </div>
            </div>
          )}
          </div>


      </div>
    </div>
  );
};

export default Navbar;
