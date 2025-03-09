import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/ui-elements.css";
import Bar1 from "../assets/Bar 1.png";
import Bar2 from "../assets/Bar 2.png";
import Bar3 from "../assets/Bar 3.png";
import Bar4 from "../assets/Bar 4.png";
import Pie1 from "../assets/Pie 1.png";
import Pie2 from "../assets/Pie 2.png";
import Pie3 from "../assets/Pie 3.png";
import Pie4 from "../assets/Pie 4.png";
import Donut1 from "../assets/Donut 1.png";
import Donut2 from "../assets/Donut 2.png";
import Donut3 from "../assets/Donut 3.png";
import Donut4 from "../assets/Donut 4.png";

const UIElements = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`invoice-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <h1 className="ui-elements-title">UI Elements</h1>

        <div className="charts-container">
          {/* Bar Chart Section */}
          <div className="chart-container">
            <h2>Bar Chart</h2>
            <div className="images-container">
              {/* Add 4 images for Bar Chart */}
              <img src={Bar1} alt="Bar Chart 1" className="chart-image" />
              <img src={Bar2} alt="Bar Chart 2" className="chart-image" />
              <img src={Bar3} alt="Bar Chart 3" className="chart-image" />
              <img src={Bar4} alt="Bar Chart 4" className="chart-image" />
            </div>
          </div>

          {/* Pie Chart Section */}
          <div className="chart-container">
            <h2>Pie Chart</h2>
            <div className="images-container">
              {/* Add 4 images for Pie Chart */}
              <img src={Pie1} alt="Pie Chart 1" className="chart-image" />
              <img src={Pie2} alt="Pie Chart 2" className="chart-image" />
              <img src={Pie3} alt="Pie Chart 3" className="chart-image" />
              <img src={Pie4} alt="Pie Chart 4" className="chart-image" />
            </div>
          </div>

          {/* Donut Chart Section */}
          <div className="chart-container">
            <h2>Donut Chart</h2>
            <div className="images-container">
              {/* Add 4 images for Donut Chart */}
              <img src={Donut1} alt="Donut Chart 1" className="chart-image" />
              <img src={Donut2} alt="Donut Chart 2" className="chart-image" />
              <img src={Donut3} alt="Donut Chart 3" className="chart-image" />
              <img src={Donut4} alt="Donut Chart 4" className="chart-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIElements;
