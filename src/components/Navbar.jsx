import React from 'react';
import { TiWeatherWindyCloudy } from 'react-icons/ti';

function Navbar({children}) {
  return (
    <nav className="navbar-style">
        <h1 className="brand">Weather Web <TiWeatherWindyCloudy/></h1>
        {children}
    </nav>
  )
}

export default Navbar