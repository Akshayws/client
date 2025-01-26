import React from "react";
import { Link } from "react-router-dom"; // For navigation links

const Dashboard = () => {
  return (
    <div className="container-fluid p-5 bg-light">
      <div className="row mb-4">
        {/* Welcome Section */}
        <div className="col-12">
          <h1 className="text-primary font-weight-bold">Welcome to the HR Portal</h1>
          <p className="lead">Your dashboard overview and quick links to manage employee data.</p>
        </div>
      </div>
      
      {/* Statistics and Quick Links */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-center text-info">Total Employees</h5>
              <h3 className="text-center">120</h3>
              <p className="text-center">
                <Link to="/directory" className="btn btn-outline-primary btn-sm">View Employee Directory</Link>
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-center text-success">Pending Requests</h5>
              <h3 className="text-center">5</h3>
              <p className="text-center">
                <Link to="/requests" className="btn btn-outline-success btn-sm">View Requests</Link>
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-center text-warning">Tasks Due Today</h5>
              <h3 className="text-center">3</h3>
              <p className="text-center">
                <Link to="/tasks" className="btn btn-outline-warning btn-sm">View Tasks</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="text-center text-secondary">Quick Links</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/profile" className="text-decoration-none">My Profile</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/settings" className="text-decoration-none">Account Settings</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/help" className="text-decoration-none">Help & Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
