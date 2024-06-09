import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurRouter from './OurRouter';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <OurRouter />
      <Footer />
    </Router>
  );
}

export default App;

