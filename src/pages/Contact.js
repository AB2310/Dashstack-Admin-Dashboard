import React, { useState } from "react";
import "../styles/contact.css"; // Import the CSS file for styling
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import contact1 from "../assets/contact1.png";
import contact2 from "../assets/contact2.png";
import contact3 from "../assets/contact3.png";
import contact4 from "../assets/contact4.png";
import contact5 from "../assets/contact5.png";
import contact6 from "../assets/contact6.png";
import { FaRegEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

// Dummy contact data
const contacts = [
  { name: "Jason Price", email: "kulhman.jerney@yahoo.com", image: contact1, id: 1 },
  { name: "Duane Dean", email: "rusty.botsford@wilfrid.io", image: contact2, id: 2 },
  { name: "Jonathan Barker", email: "cora_haley@quinn.biz", image: contact3, id: 3 },
  { name: "Rosie Glover", email: "lockman.marques@hotmail.com", image: contact4, id: 4 },
  { name: "Patrick Greer", email: "pearlie.eichmann@trevion.net", image: contact5, id: 5 },
  { name: "Darrell Ortega", email: "chaya.shields@ferry.info", image: contact6, id: 6 },
];

const Contact = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`contact-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="contact-header">
          <h1 className="contact-title">Contact</h1>
          <button className="add-contact-btn">
          <Link to="/add-contact" style={{ color: "white", textDecoration: "none" }}>
            Add New Contact
          </Link>
        </button>
        </div>

        <div className="contacts-container">
          {contacts.map((contact) => (
            <div key={contact.id} className="contact-card">
              <img src={contact.image} alt={contact.name} className="contact-img" />
              <h3>{contact.name}</h3>
              <p>{contact.email}</p>
              <button className="message-btn">
                <span className="message-icon"><FaRegEnvelope /></span> Message
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
