import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
function Toggle() {
  const [darkMode, setDarkMode] = useState(false);
  function changeTheme() {
    document.body.classList.toggle("oqMode");
    setDarkMode(!darkMode);
  }
  return (
    <>
      <div className="flexbtn">
      <button className={"darkButton"} onClick={changeTheme}>
        {darkMode ? <FaMoon className={"Moon"} /> : <FaSun className={"Son"} />}
      </button>
      {darkMode ? <span onClick={changeTheme}>Dark Mode</span>:<span onClick={changeTheme}>White Mode</span>}
      
      </div>
    </>
  );
}

export default Toggle;
