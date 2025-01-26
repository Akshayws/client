import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import Card from "../Components/Card"; // Import Card Component
import Input from "../Components/Input"; // Import Input Component

// Sample employee data
const initialEmployees = [
  { id: 1, name: "John Doe", position: "Software Engineer", department: "IT", email: "john.doe@example.com", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", position: "HR Manager", department: "HR", email: "jane.smith@example.com", phone: "987-654-3210" },
  // Add more sample employee data here
];

const EmployeeDirectory = ({ role, loggedInUserId }) => {
  const [employees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee); // Show the selected employee's profile
  };

  // Filter employees based on search term
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-directory">
      <h1>Employee Directory</h1>
      
      {/* Search Bar */}
      <Input placeholder="Search employees..." value={searchTerm} onChange={handleSearchChange} />

      {/* Employee List (only if HR role) */}
      {role === 'HR' && (
        <div className="employee-list">
          {filteredEmployees.map((employee) => (
            <div key={employee.id} onClick={() => handleEmployeeClick(employee)}>
              <Card className="mb-4">
                <h5>{employee.name}</h5>
                <p>{employee.position}</p>
              </Card>
            </div>
          ))}
        </div>
      )}

      {/* Employee Profile (for HR and employee) */}
      {(role === 'HR' || selectedEmployee?.id === loggedInUserId) && (
        <div className="employee-profile mt-5">
          <h2>Employee Profile</h2>
          <Card className="p-3">
            <h5>{selectedEmployee ? selectedEmployee.name : 'Your Profile'}</h5>
            <p><strong>Position:</strong> {selectedEmployee ? selectedEmployee.position : 'Your Position'}</p>
            <p><strong>Department:</strong> {selectedEmployee ? selectedEmployee.department : 'Your Department'}</p>
            <p><strong>Email:</strong> {selectedEmployee ? selectedEmployee.email : 'Your Email'}</p>
            <p><strong>Phone:</strong> {selectedEmployee ? selectedEmployee.phone : 'Your Phone'}</p>
          </Card>
        </div>
      )}
    </div>
  );
};

export default EmployeeDirectory;
