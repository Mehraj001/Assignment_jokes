import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: '#007bff' }}>
        <div className="container justify-content-center">
          <Link to="/saved" className="navbar-brand mx-5 text-white">Save Jokes</Link>
          <Link to="/search" className="navbar-brand mx-5 text-white">Search Jokes</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
