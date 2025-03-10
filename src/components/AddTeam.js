import React, { useState } from "react";
import { IoMdCamera } from "react-icons/io";  // Import the camera icon
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/addTeam.css"; // Make sure the styles are imported here

const AddTeam = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Store the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`add-team-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="add-team-container">
          <h1 className="add-team-title">Add New Contact</h1>
        <div className="team-bg">
          <div className="uploadtm-photo-container">
          <div className="uploadtm-photo">
           <div className="img-containertm">
                {image ? (
                   <img
                     src={image}
                     alt="Uploaded"
                     className="uploadedtm-img"
                   />
                 ) : (
                   <IoMdCamera className="cameratm-icon" />
                 )}
           </div>
            <input
              type="file"
              id="photo"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="photo">
              {image ? 'Edit Photo' : 'Upload Photo'}
            </label>
          </div>
        </div>

          <div className="team-form-container">
              <form className="team-form">
                <div className="team-form-right">
                    <div className="inputtm-group">
                      <label>First Name</label>
                      <input type="text" placeholder="Enter your first name" />
                    </div>
                    <div className="inputtm-group">
                      <label>Your Email</label>
                      <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="inputtm-group">
                      <label>Position</label>
                      <input type="text" placeholder="Enter your position" />
                    </div>
                </div>
                <div className="team-form-right">
                    <div className="inputtm-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Enter your last name" />
                    </div>
                    <div className="inputtm-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div className="inputtm-group">
                      <label>Gender</label>
                      <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                </div>
              </form>
              <button className="add-newteam-btn">Add Now</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeam;
