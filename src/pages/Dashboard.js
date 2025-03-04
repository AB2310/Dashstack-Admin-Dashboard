import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SalesChart from "../components/SalesChart";
import DealsTable from "../components/DealsTable";  // Import DealsTable
import StatCard from "../components/StatCard";
import RevenueGraph from "../components/RevenueGraph";
import { HiMiniUsers, HiCube } from "react-icons/hi2";
import { GoGraph } from "react-icons/go";
import { PiClockCounterClockwise } from "react-icons/pi";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";  
import CustomerSection from "../components/CustomerSection";
import FeaturedProduct from "../components/FeaturedProduct";
import SalesAnalytics from "../components/SalesAnalytics";
import "../styles/dashboard.css";


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`dashboard-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <h1 className="dashboard-title">Dashboard</h1>

        <div className="dashboard-container">
          {/* Statistics Cards */}
          <div className="stats-container">
            <StatCard 
              title="Total Users" 
              value="40,689" 
              icon={<HiMiniUsers />} 
              change1={<><FaArrowTrendUp /> 8.5%</>}  
              change2="Up from yesterday"
              color="#8280FF" 
              trendColor="#10B981"
            />              
            <StatCard 
              title="Total Orders" 
              value="10,293" 
              icon={<HiCube />} 
              change1={<><FaArrowTrendUp /> 1.3%</>} 
              change2="Up from past week"
              color="#FEC53D" 
              trendColor="#10B981"
            />
            <StatCard 
              title="Total Sales" 
              value="$89,000" 
              icon={<GoGraph />} 
              change1={<><FaArrowTrendDown /> 4.3%</>} 
              change2="Down from yesterday"
              color="#4AD991" 
              trendColor="#EF4444"
            />
            <StatCard 
              title="Total Pending" 
              value="2040" 
              icon={<PiClockCounterClockwise />} 
              change1={<><FaArrowTrendUp /> 1.8%</>} 
              change2="Up from yesterday"
              color="#FF9066" 
              trendColor="#10B981"
            />
          </div>

          {/* Sales Details Chart */}
          <div className="sales-details">
            <div className="sales-header">
              <h2>Sales Details</h2>
              <select className="sales-dropdown">
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
              <SalesChart /> {/* Sales chart component */}
            
          </div>

          {/* Deals Table */}
          <div className="deals-details">
            <h2>Deals Details</h2>
            <DealsTable /> {/* Deals table component */}
          </div>

          {/* Revenue Graph */}
          <div className="revenue-graph-section">
            <div className="revenue-header">
              <h2>Revenue</h2>
              <select className="revenue-dropdown">
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <RevenueGraph /> {/* Revenue graph component */}
          </div>

         {/* Customer, Featured Product, and Sales Analytics */}
         <div className="flex-sections">
            {/* Customers Section */}
            <CustomerSection /> {/* This is the updated customer section */}

           
      
              <FeaturedProduct />
            
              <div className="sales-analytics-section">
                <h2>Sales Analytics</h2>
                  <SalesAnalytics />  {/* Display the chart */}
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
