import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { GiFunnel } from "react-icons/gi";
import DatePicker from 'react-datepicker'; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for the DatePicker
import '../styles/orderList.css';

const OrderListPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [startDate, setStartDate] = useState(null); // To store selected date
  const [filterOrderType, setFilterOrderType] = useState([]); // Store multiple selected order types
  const [filterOrderStatus, setFilterOrderStatus] = useState([]); // Store multiple selected order statuses

  // Example order data
  const orders = [
    { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2024', type: 'Electric', status: 'Completed' },
    { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '28 May 2024', type: 'Book', status: 'Processing' },
    { id: '00003', name: 'Darrell Caldwell', address: '8587 Frida Ports', date: '23 Nov 2024', type: 'Medicine', status: 'Rejected' },
    { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '05 Feb 2025', type: 'Mobile', status: 'Completed' },
    { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '29 Jul 2023', type: 'Watch', status: 'Processing' },
    { id: '00006', name: 'Alfred Murray', address: '543 Weinmann Mountain', date: '15 Aug 2024', type: 'Medicine', status: 'Completed' },
    { id: '00007', name: 'Maggie Sullivan', address: 'New Scottieberg', date: '21 Dec 2024', type: 'Watch', status: 'Processing' },
    { id: '00008', name: 'Rosie Todd', address: 'New Jon', date: '30 Apr 2023', type: 'Medicine', status: 'On-Hold' },
    { id: '00009', name: 'Dollie Hines', address: '124 Lyla Forge Suite 975', date: '09 Jan 2025', type: 'Book', status: 'In-Transit' },
    { id: '00010', name: 'Johnathan Zane', address: '634 Bostwick Hills', date: '12 May 2024', type: 'Mobile', status: 'Completed' },
    { id: '00011', name: 'Emily Scott', address: '432 Coastal Drive', date: '03 Feb 2025', type: 'Electric', status: 'Rejected' },
    { id: '00012', name: 'James Peterson', address: '789 Greenview Ave', date: '01 Jan 2025', type: 'Book', status: 'In-Transit' },
    { id: '00013', name: 'Laura Turner', address: '987 Oakridge St.', date: '15 Oct 2024', type: 'Mobile', status: 'Completed' },
    { id: '00014', name: 'Sophia Johnson', address: '143 Highfield Rd', date: '22 Nov 2024', type: 'Watch', status: 'Processing' },
    { id: '00015', name: 'Maxwell Brown', address: '569 Beach Blvd', date: '18 Dec 2024', type: 'Medicine', status: 'On-Hold' }
  ];

  // Filter states
  const handleDateChange = (date) => setStartDate(date);  // Update filter date when selected

  const handleOrderTypeChange = (type) => {
    setFilterOrderType(prevState =>
      prevState.includes(type) ? prevState.filter(item => item !== type) : [...prevState, type]
    );
  };

  const handleOrderStatusChange = (status) => {
    setFilterOrderStatus(prevState =>
      prevState.includes(status) ? prevState.filter(item => item !== status) : [...prevState, status]
    );
  };

  const filteredOrders = orders.filter(order => 
    (startDate ? order.date.includes(startDate.toLocaleDateString()) : true) &&
    (filterOrderType.length > 0 ? filterOrderType.includes(order.type) : true) &&
    (filterOrderStatus.length > 0 ? filterOrderStatus.includes(order.status) : true)
  );

  return (
    <div className={`order-list-layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? '' : 'margin-closed'}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <h1 className="order-list-title">Order Lists</h1>

        {/* Filter Section */}
        <div className="filters">
          <div className="filter-by">
            <GiFunnel className="filter-icon" />
            <label>Filter By:</label>

            {/* Date Filter with DatePicker */}
            <div className="filter-date-picker">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}  // Change handler for the calendar
                placeholderText="Select Date" 
                dateFormat="dd/MM/yyyy"
                className="calendar-style" // Apply custom styles
              />
            </div>

            {/* Order Type Filter */}
            <div className="filter-dropdown">
              <button className="filter-dropdown-btn">
                {filterOrderType.length > 0 ? filterOrderType.join(', ') : "Select Order Type"}
              </button>
              <div className="filter-dropdown-content">
                <label>Select Order Type</label>
                <div className="filter-dropdown-options">
                  <label>
                    <input
                      type="checkbox"
                      value="Electric"
                      checked={filterOrderType.includes("Electric")}
                      onChange={() => handleOrderTypeChange("Electric")}
                    /> Electric
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Book"
                      checked={filterOrderType.includes("Book")}
                      onChange={() => handleOrderTypeChange("Book")}
                    /> Book
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Medicine"
                      checked={filterOrderType.includes("Medicine")}
                      onChange={() => handleOrderTypeChange("Medicine")}
                    /> Medicine
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Mobile"
                      checked={filterOrderType.includes("Mobile")}
                      onChange={() => handleOrderTypeChange("Mobile")}
                    /> Mobile
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Watch"
                      checked={filterOrderType.includes("Watch")}
                      onChange={() => handleOrderTypeChange("Watch")}
                    /> Watch
                  </label>
                  {/* More types */}
                </div>
              </div>
            </div>

            {/* Order Status Filter */}
            <div className="filter-dropdown">
              <button className="filter-dropdown-btn">
                {filterOrderStatus.length > 0 ? filterOrderStatus.join(', ') : "Select Order Status"}
              </button>
              <div className="filter-dropdown-content">
                <label>Select Order Status</label>
                <div className="filter-dropdown-options">
                  <label>
                    <input
                      type="checkbox"
                      value="Completed"
                      checked={filterOrderStatus.includes("Completed")}
                      onChange={() => handleOrderStatusChange("Completed")}
                    /> Completed
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Processing"
                      checked={filterOrderStatus.includes("Processing")}
                      onChange={() => handleOrderStatusChange("Processing")}
                    /> Processing
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Rejected"
                      checked={filterOrderStatus.includes("Rejected")}
                      onChange={() => handleOrderStatusChange("Rejected")}
                    /> Rejected
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="On-Hold"
                      checked={filterOrderStatus.includes("On-Hold")}
                      onChange={() => handleOrderStatusChange("On-Hold")}
                    /> On-Hold
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="In-Transit"
                      checked={filterOrderStatus.includes("In-Transit")}
                      onChange={() => handleOrderStatusChange("In-Transit")}
                    /> In-Transit
                  </label>
                  {/* More statuses */}
                </div>
              </div>
            </div>

            {/* Reset Filter Button */}
            <button className="reset-filter" onClick={() => {setStartDate(null); setFilterOrderType([]); setFilterOrderStatus([]);}}>
              Reset Filter
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>DATE</th>
              <th>TYPE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>{order.type}</td>
                <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderListPage;
