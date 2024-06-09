import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Supermarkets from './pages/Supermarkets';
import Main from './pages/Main';
import Supermarketprofile from './pages/Supermarketprofile';

function OurRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/all-supermarket" element={<Supermarkets />} />
      <Route path="/supermarket/:id" element={<Supermarketprofile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default OurRouter;
