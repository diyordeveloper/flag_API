import React from "react";
import Toggle from "./Toggle";
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
      <header className="header">
        <div>
          <Link to="/" className={'link'} ><h1 className={'logo'}>Where in the world?</h1></Link>
        </div>
        <div>
          <Toggle />
        </div>
      </header>
    </>
  );
}

export default Header;
