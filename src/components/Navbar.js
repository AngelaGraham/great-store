import React from 'react';
import {Link} from 'react-router-dom';



const Navbar = () => {
  return (
      <div className ="navbar">
      <Link className ="link" to="/">
      Home
      </Link>
      <Link className ="link" to="/products">Products
      </Link>

      

    
    </div>
  );
};

export default Navbar;