import React from "react";
import CircleImage from '../assets/circle-image.png'; // Path to the PNG image

const CustomerSection = () => {
  const newCustomers = 34249;
  const repeatedCustomers = 1420;

  return (
    <div className="customers-section">
      <h2>Customers</h2>

      {/* Circle Progress Image */}
      <div className="circle-progress-container">
        <img src={CircleImage} alt="Customer Progress" className="circle-progress-img" />
      </div>

      {/* Customer Stats */}
      <div className="customer-stats">
        <div className="c-stats">
            <span style={{fontSize:"1.5vw", color:"#ffff"}}>{newCustomers}</span><span> New Customers</span>
        </div>
        <div className="c-stats">
            <span style={{fontSize:"1.5vw", color:"#ffff"}}>{repeatedCustomers}</span><span> Repeated</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
