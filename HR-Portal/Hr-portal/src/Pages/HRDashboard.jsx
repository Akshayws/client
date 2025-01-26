import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for grid and basic styles
import './HRDashboard.css'; // Custom CSS
import EmployeeDirectory from "./EmployeeDirectory"; // Employee Directory component

const HRDashboard = () => {
  // Mock current logged-in user (role and id)
  const [role, setRole] = useState("HR"); // Role can be 'HR' or 'Employee'
  const [loggedInUserId, setLoggedInUserId] = useState(1); // Logged-in user ID

  return (
    <div className="hr-dashboard d-flex">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <h2 className="text-white">HR Portal</h2>
        </div>
        <ul>
          <li className="active">
            <i className="bi bi-house"></i> Home
          </li>
          <li>
            <i className="bi bi-people"></i> Employees
          </li>
          <li>
            <i className="bi bi-bar-chart"></i> Reports
          </li>
          <li>
            <i className="bi bi-gear"></i> Settings
          </li>
        </ul>
        <div className="sidebar-footer">
          <p>&copy; 2025 HR Portal</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Navigation */}
        <div className="top-nav d-flex justify-content-between align-items-center mb-4">
          <div className="search-bar">
            <input type="text" placeholder="Search..." className="form-control" />
          </div>
          <div className="buttons">
            <button className="btn btn-primary">Add Employee</button>
            <button className="btn btn-outline-secondary">Reports</button>
          </div>
        </div>

        {/* Dashboard Overview */}
        <section className="dashboard-overview">
          <h2 className="text-secondary">Employee Statistics</h2>
          <div className="row mt-3">
            <div className="col-12 col-md-4">
              <div className="stat-card">
                <h3>Total Employees</h3>
                <p>100</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="stat-card">
                <h3>Active Employees</h3>
                <p>95</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="stat-card">
                <h3>Departments</h3>
                <p>5</p>
              </div>
            </div>
          </div>
        </section>

        {/* Employee Directory */}
        <section className="candidate-section mt-5">
          <div className="section-header d-flex justify-content-between align-items-center">
            <h2>Employee Directory</h2>
            <div className="filters">
              <button className="btn btn-outline-secondary">Sort</button>
              <button className="btn btn-outline-secondary">Filter</button>
            </div>
          </div>
          <EmployeeDirectory role={role} loggedInUserId={loggedInUserId} />
        </section>
      </main>
    </div>
  );
};


export default HRDashboard;
