import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <>
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/reps"><li>Find Reps</li></Link>
          <Link to="/bills"><li>Bills</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Header;
