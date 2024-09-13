import React from 'react'
import logo from '../imagenes/insignia-vrht46_mesa-de-trabajo-1-03.png'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>

        <nav className='flex flex-row px-10 bg-white text-[#363636] w-full justify-start relative'>
            <Link to='/'>
                <img src={logo} alt="logo-png" className='w-40'/>
            </Link>    

            <div className='bg-[#ADB5BD66]  h-[60px] w-[1px] mr-4  ml-4 self-center'></div>

            <ul className='flex flex-row'>
                <li className='px-10 flex items-center hover:border-b-4	hover:border-[#449edd] hover:duration-500'>
                    <Link to='/'>
                        INICIO
                    </Link>                
                </li>

                <li className='px-10 flex items-center'>
                    <Link to='/'>
                        NOSOTROS
                    </Link>  
                </li>

                <li className='px-10 flex items-center'>
                    <Link to='/'>
                        ÁREAS ACADÉMICAS
                    </Link>  
                </li>

            </ul>
        </nav>
    </>


  )
}

export default NavBar