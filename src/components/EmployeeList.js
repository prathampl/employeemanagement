import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await axios.get('/api/employees');
      setEmployees(response.data);
    }
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    await axios.delete(`/api/employees/${id}`);
    setEmployees(employees.filter((employee) => employee._id !== id));
  };

  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>{employee.designation}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => (window.location.href = `/edit-employee/${employee._id}`)}
                >
                  Edit
                </button>
                <button className="delete-btn" onClick={() => deleteEmployee(employee._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
