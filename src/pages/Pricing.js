import React, { useState } from "react";
import "../styles/pricing.css"; // Import the CSS for styling
import Sidebar from "../components/Sidebar"; // Import Sidebar
import Navbar from "../components/Navbar"; // Import Navbar

const Pricing = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`product-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="pricing-container">
          <h1 className="pricing-title">Pricing</h1>

          <div className="pricing-cards">
            {/* Basic Plan */}
            <div className="pricing-card">
              <h2 className="plan-name">Basic</h2>
              <p className="monthly-charge">
                Monthly Charge 
              </p>
              <p className="amt">$14.99</p>
              <ul className="features">
                <li>Free Setup</li>
                <li>Bandwidth Limit 10 GB</li>
                <li>20 User Connection</li>
                <li className="disabled">Analytics Report</li>
                <li className="disabled">Public API Access</li>
                <li className="disabled">Plugins Integration</li>
                <li className="disabled">Custom Content Management</li>
              </ul>
              <button className="get-started-btn">Get Started</button>
              <p className="trial-text">Start Your 30 Day Free Trial</p>
            </div>

            {/* Standard Plan */}
            <div className="pricing-card">
              <h2 className="plan-name">Standard</h2>
              <p className="monthly-charge">
                Monthly Charge 
              </p>
              <p className="amt">$49.99</p>
              <ul className="features">
                <li>Free Setup</li>
                <li>Bandwidth Limit 10 GB</li>
                <li>20 User Connection</li>
                <li>Analytics Report</li>
                <li>Public API Access</li>
                <li className="disabled">Plugins Integration</li>
                <li className="disabled">Custom Content Management</li>
              </ul>
              <button className="get-started-btn">Get Started</button>
              <p className="trial-text">Start Your 30 Day Free Trial</p>
            </div>

            {/* Premium Plan */}
            <div className="pricing-card">
              <h2 className="plan-name">Premium</h2>
              <p className="monthly-charge">
                Monthly Charge 
              </p>
              <p className="amt">$89.99</p>
              <ul className="features">
                <li>Free Setup</li>
                <li>Bandwidth Limit 10 GB</li>
                <li>20 User Connection</li>
                <li>Analytics Report</li>
                <li>Public API Access</li>
                <li>Plugins Integration</li>
                <li>Custom Content Management</li>
              </ul>
              <button className="get-started-btn">Get Started</button>
              <p className="trial-text">Start Your 30 Day Free Trial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
