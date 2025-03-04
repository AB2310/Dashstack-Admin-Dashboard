import React, { useState } from "react";
import { IoMdCamera } from "react-icons/io";  // Import the camera icon
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/addContact.css"; // Make sure the styles are imported here

const AddContact = () => {
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
    <div className={`add-contact-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="add-contact-container">
          <h1 className="add-contact-title">Add New Contact</h1>

          <div className="upload-photo-container">
          <div className="upload-photo">
           <div className="img-container">
                {image ? (
                   <img
                     src={image}
                     alt="Uploaded"
                     className="uploaded-img"
                   />
                 ) : (
                   <IoMdCamera className="camera-icon" />
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

          <div className="contact-form-container">
              <form className="contact-form">
                <div className="contct-form-left">
                    <div className="input-group">
                      <label>First Name</label>
                      <input type="text" placeholder="Enter your first name" />
                    </div>
                    <div className="input-group">
                      <label>Your Email</label>
                      <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="input-group">
                      <label>Date of Birth</label>
                      <input type="date" placeholder="Enter your birthdate" />
                    </div>
                </div>
                <div className="contact-form-right">
                    <div className="input-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Enter your last name" />
                    </div>
                    <div className="input-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div className="input-group">
                      <label>Gender</label>
                      <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                </div>
              </form>
              <button className="add-contact-btn">Add Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
