import React, { useState } from "react";
import { IoMdCamera } from "react-icons/io";  // Import the camera icon
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/settings.css"; // Make sure the styles are imported here

const Settings = () => {
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
    <div className={`add-setting-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="add-setting-container">
          <h1 className="add-setting-title">General Settings</h1>
        <div className="setting-bg">
          <div className="uploadst-photo-container">
          <div className="uploadst-photo">
           <div className="img-containerst">
                {image ? (
                   <img
                     src={image}
                     alt="Uploaded"
                     className="uploadedst-img"
                   />
                 ) : (
                   <IoMdCamera className="camerast-icon" />
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

          <div className="setting-form-container">
              <form className="setting-form">
                <div className="setting-form-right">
                    <div className="inputst-group">
                      <label>Site Name</label>
                      <input type="text" placeholder="Enter your site name" />
                    </div>
                    <div className="inputst-group">
                      <label>SEO Title</label>
                      <input type="email" placeholder="Enter your SEO title" />
                    </div>
                    <div className="inputst-group">
                      <label>SEO Keywords</label>
                      <input type="text" placeholder="Enter your SEO keywords" />
                    </div>
                </div>
                <div className="setting-form-right">
                    <div className="inputst-group">
                      <label>Copy Right</label>
                      <input type="text" placeholder="Enter your copy right" />
                    </div>
                    <div className="inputs-group">
                      <label>SEO Description</label>
                      <textarea placeholder="Enter your SEO description" />
                    </div>

                    
                </div>
              </form>
              <button className="add-setting-btn">Save</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
