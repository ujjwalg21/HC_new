import React, { useState } from 'react';
import './LoginAs.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar';

const LoginAs = () => {
  const [selectedUser, setSelectedUser] = useState("");

  const handleUserSelection = (selected) => {
    // setSelectedUser(selected);
  };

  return (
    <>
    <Navbar/>
      <h1 className='heading'>Login</h1>
    <div className='btns'>
      <Link to="/login">
        <button className={`btn ${selectedUser === 'patient' ? 'selected' : ''}`} onClick={() => handleUserSelection('patient')}>
          <h2>Patient</h2>
        </button>
      </Link><br />
      <Link to="/doctorlogin">
        <button className={`btn ${selectedUser === 'doctor' ? 'selected' : ''}`} onClick={() => handleUserSelection('doctor')}>
          <h2>Doctor</h2>
        </button>
      </Link><br />
      <Link to="/receptionlogin">
        <button className={`btn ${selectedUser === 'reception' ? 'selected' : ''}`} onClick={() => handleUserSelection('reception')}>
          <h2>Reception</h2>
        </button>
      </Link><br />
      <Link to="/nurselogin">
        <button className={`btn ${selectedUser === 'nurse' ? 'selected' : ''}`} onClick={() => handleUserSelection('nurse')}>
          <h2>Nurse</h2>
        </button>
      </Link><br />
      <Link to="/medicallogin">
        <button className={`btn ${selectedUser === 'medical' ? 'selected' : ''}`} onClick={() => handleUserSelection('medical')}>
          <h2>Medical</h2>
        </button>
      </Link><br />
      <Link to="/apollologin">
        <button className={`btn ${selectedUser === 'apollo' ? 'selected' : ''}`} onClick={() => handleUserSelection('apollo')}>
          <h2>Apollo</h2>
        </button>
      </Link><br />
      <Link to="/lablogin">
        <button className={`btn ${selectedUser === 'lab' ? 'selected' : ''}`} onClick={() => handleUserSelection('lab')}>
          <h2>Lab</h2>
        </button>
      </Link><br />
    </div>
    </>
  );
};

export default LoginAs;
