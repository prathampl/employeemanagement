import React, { useState } from 'react';
import axios from 'axios';
import './CreateEmployee.css';

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: [],
    image: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        course: checked ? [...prev.course, value] : prev.course.filter((c) => c !== value)
      }));
    } else if (type === 'file') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    for (const key in formData) {
      if (key === 'image') {
        formDataObj.append(key, formData[key]);
      } else {
        formDataObj.append(key, JSON.stringify(formData[key]));
      }
    }
    await axios.post('/api/employees', formDataObj);
    alert('Employee Created!');
  };

  return (
    <div className="create-employee">
      <h1>Create Employee</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="text" name="mobile" placeholder="Mobile No." onChange={handleChange} />
        <select name="designation" onChange={handleChange}>
          <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>
        <div>
          <label>Gender:</label>
          <input type="radio" name="gender" value="M" onChange={handleChange} /> Male
          <input type="radio" name="gender" value="F" onChange={handleChange} /> Female
        </div>
        <div>
          <label>Courses:</label>
          <input type="checkbox" name="course" value="MCA" onChange={handleChange} /> MCA
          <input type="checkbox" name="course" value="BCA" onChange={handleChange} /> BCA
          <input type="checkbox" name="course" value="BSC" onChange={handleChange} /> BSC
        </div>
        <input type="file" name="image" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
