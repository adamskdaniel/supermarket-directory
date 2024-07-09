import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
        <Link to="/" className="">Home</Link>
        <Link to="/about" className="">About</Link>
        <Link to="/all-supermarket">Supermarkets</Link>
        <Link href="#">Add Supermarket</Link>
      
    </div>
  )
}
