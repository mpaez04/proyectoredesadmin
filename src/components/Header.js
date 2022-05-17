import React from 'react';
import './Header.css';
import principal from '../principal.png';

function Header(){
return(
      <div>
        <header className="Header-header">
          <img src={principal} className="Header-logo" alt="logo" />
        </header>
      </div>
    )
}

export default Header;