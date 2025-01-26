import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HRDashboard from "./Pages/HRDashboard";
import SignIn from "./LoginR/SignIn";
import SignUp from "./LoginR/SignUp";
import EmployeeDashboard from "./Pages/EmployeeDirectory"; // Assuming this is the employee dashboard

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Hrhome" element={<HRDashboard />} />
        <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
