import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SideMenu = (props) => {

  return (
    <div className={`vrht-side-menu  ${props.hamburgerIsPressed?"flex":"hidden"} fixed top-[72px] right-0 z-50 bg-white text-[#363636]`}>
      <ul className="flex-col h-full gap-2 p-2 flex">
        <li className="nav-link px-10 flex items-center">
          <Link to="/">INICIO</Link>
        </li>

        <li className="nav-link px-10 flex items-center">
          <Link to="/nosotros">NOSOTROS</Link>
        </li>

        <li className="nav-link px-10 flex items-center">
          <Link to="/">ÁREAS ACADÉMICAS</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu