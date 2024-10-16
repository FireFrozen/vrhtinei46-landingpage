import React from "react";
import logo from "../imagenes/insignia-vrht46_mesa-de-trabajo-1-03.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="flex flex-row px-10 bg-white text-[#363636] w-full justify-between relative h-[72px] lg:h-[80px] items-center">
        <div className="flex flex-row justify-start  items-center ">
          <Link to="/">
            <img src={logo} alt="logo-png" className="w-40" />
          </Link>

          <div className="bg-[#ADB5BD66]  h-[60px] w-[1px] mr-4  ml-4 self-center"></div>

          <ul className="lg:flex flex-row hidden">
            <li className="nav-link px-10 flex items-center">
              <Link to="/">INICIO</Link>
            </li>

            <li className="nav-link px-10 flex items-center">
              <Link to="/">NOSOTROS</Link>
            </li>

            <li className="nav-link px-10 flex items-center">
              <Link to="/">ÁREAS ACADÉMICAS</Link>
            </li>
          </ul>
          </div>

          <div className="burger-icon h-6 w-6 flex flex-col justify-center items-center gap-1 lg:hidden">
            <span></span>
            <span></span>
            <span></span>
          </div>
        
      </nav>
    </>
  );
};

export default NavBar;
