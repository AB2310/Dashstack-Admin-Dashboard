import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/team.css";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";
import team7 from "../assets/team7.png";
import team8 from "../assets/team8.png";
import team9 from "../assets/team9.png";
import team10 from "../assets/team10.png";
import team11 from "../assets/team11.png";
import team12 from "../assets/team12.png";

const TeamPage = () => {
  // Dummy team data
  const teamMembers = [
    { name: "Jason Price", title: "Admin", email: "janick.parisian@yahoo.com", image: team1 },
    { name: "Jukkie Sisao", title: "CEO", email: "siby.l.kozy@gmail.com", image: team2 },
    { name: "Harriet King", title: "CTO", email: "nadia.block@hotmail.com", image: team3 },
    { name: "Lenora Benson", title: "Lead", email: "feil.wallace@kunde.us", image: team4 },
    { name: "Olivia Reese", title: "Strategist", email: "kemmer.hattie@cremin.us", image: team5 },
    { name: "Bertha Valdez", title: "CEO", email: "lorraine.koelpini@trompio", image: team6 },
    { name: "Harriett Payne", title: "Digital Marketer", email: "nannie.west@estrella.tv", image: team7 },
    { name: "George Bryant", title: "Social Media", email: "delmer.king@gmail.com", image: team8 },
    { name: "Lily French", title: "Strategist", email: "lucienne.herman@hotmail.com", image: team9 },
    { name: "Howard Adkins", title: "CEO", email: "wieganed.leonor@herman.us", image: team10 },
    { name: "Earl Bowman", title: "Digital Marketer", email: "waino.aitenwreth@nicolette.tv", image: team11 },
    { name: "Patrick Padilla", title: "Social Media", email: "octavia.nienow@gleichner.net", image: team12 }
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`team-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="team-header">
            <h1 className="team-title">Team</h1>
            <button className="add-member-btn">Add New Member</button>
        </div>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <img src={member.image} alt={member.name} className="team-member-img" />
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <p>{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
