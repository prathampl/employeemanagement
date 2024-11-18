import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import EmployeeEdit from './components/EmployeeEdit';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/create" element={<CreateEmployee />} />
        <Route path="/employees/edit/:id" element={<EmployeeEdit />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
