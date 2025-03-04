import React from 'react';
import '../styles/statcard.css';


const StatCard = ({ title, value, icon, change1, change2, color, trendColor }) => {
  return (
    <div className="stat-card">
      
      <div className="stat-content">
        <h3>{title}</h3>
        <p className="stat-value">{value}</p>
        <p className="stat-trend" ><span style={{ color: trendColor }}>{change1}</span>&nbsp; {change2}</p>
      </div>

      <div className="icon-container" style={{ backgroundColor: color }}>
        {icon}
      </div>

    </div>
  );
};

export default StatCard;
