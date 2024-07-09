import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Users from './pages/Users';
import Userprofile from './pages/Userprofile';
import Supermarkets from './pages/Supermarkets';
import Supermarketprofile from './pages/Supermarketprofile';


function OurRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/all-user" element={<Users />} />
      <Route path="/user/:id" element={<Userprofile />} />
      <Route path="/all-supermarket" element={<Supermarkets />} />
      <Route path="/supermarket/:id" element={<Supermarketprofile />} />

    </Routes>
  );
}

export default OurRouter;
