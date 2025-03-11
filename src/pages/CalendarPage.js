import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import '../styles/calendar.css';

const CalendarPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [month, setMonth] = useState(new Date());
  const [view, setView] = useState('month'); // Track the current view: 'day', 'week', 'month'

  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handlePrevMonth = () => {
    setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1));
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptySpaces = Array.from({ length: firstDay }, () => null);
  const calendarDays = [...emptySpaces, ...days];

  return (
    <div className={`calendar-page ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? '' : 'margin-closed'}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isOpen={isSidebarOpen} />

        <div className="calendar-header">
          <h1 className="calendar-title">Calendar</h1>
          <button className="add-event-btn">
            <Link to="/add-event" style={{ color: "white", textDecoration: "none" }}>
              + Add Event
            </Link>
          </button>
        </div>

        <div className="calendar-container">
          <div className="calendar">
            <div className="calendar-header">
              <button onClick={handlePrevMonth}>&lt;</button>
              <h3>{months[month.getMonth()]} {month.getFullYear()}</h3>
              <button onClick={handleNextMonth}>&gt;</button>
            </div>

           

            <div className="days-of-week">
              {daysOfWeek.map((day, idx) => (
                <div key={idx} className="day-of-week">{day}</div>
              ))}
            </div>

            <div className="calendar-grid">
              {calendarDays.map((day, idx) => (
                <div
                  key={idx}
                  className={`calendar-day ${!day ? 'empty' : ''} ${day < 1 || day > daysInMonth ? 'previous-month' : ''}`}
                >
                  {day || ''}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
