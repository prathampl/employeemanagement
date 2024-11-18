import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EmployeeEdit.css';

const EmployeeEdit = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
  });

  useEffect(() => {
    async function fetchEmployee() {
      const response = await axios.get(`/api/employees/${id}`);
      setFormData(response.data);
    }
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/employees/${id}`, formData);
    alert('Employee updated!');
    window.location.href = '/employee-list';
  };

  return (
    <div className="employee-edit">
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile No." />
        <select name="designation" value={formData.designation} onChange={handleChange}>
          <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EmployeeEdit;
