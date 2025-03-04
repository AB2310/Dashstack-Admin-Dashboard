import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/invoice.css";
import { IoPrint } from "react-icons/io5";
import { RiSendPlaneLine } from "react-icons/ri";

const InvoicePage = () => {
  // Dummy invoice data
  const invoiceData = [
    { serialNo: 1, description: "Children Toy", quantity: 2, baseCost: 20, totalCost: 80 },
    { serialNo: 2, description: "Makeup", quantity: 2, baseCost: 50, totalCost: 100 },
    { serialNo: 3, description: "Asus Laptop", quantity: 5, baseCost: 100, totalCost: 500 },
    { serialNo: 4, description: "Iphone X", quantity: 4, baseCost: 1000, totalCost: 4000 },
  ];

  // Total Calculation
  const totalAmount = invoiceData.reduce((total, item) => total + item.totalCost, 0);


    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`invoice-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <h1 className="invoice-title">Invoice</h1>
        <div className="invoice-bg">
        <div className="invoice-details">
          <div className="invoice-from">
            <strong>Invoice From :</strong><br /> <p><b>Virginia Walker</b><br />
            9694 Krajick Locks Suite 635</p>
          </div>
          <div className="invoice-to">
            <strong>Invoice To :</strong><br /> <p><b>Austin Miller</b><br />
            Brookview</p>
          </div>
          <div className="invoice-date">
            <strong>Invoice Date :</strong> 12 Nov 2019<br />
            <strong>Due Date :</strong> 25 Dec 2019
          </div>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Base Cost</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((item) => (
              <tr key={item.serialNo}>
                <td>{item.serialNo}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>${item.baseCost}</td>
                <td>${item.totalCost}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="invoice-summary">
          <strong>Total = ${totalAmount}</strong>
        </div>

        <div className="invoice-actions">
          <button className="print-btn"><IoPrint /></button>
          <button className="send-btn">Send &emsp; <i><RiSendPlaneLine /></i></button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default InvoicePage;
