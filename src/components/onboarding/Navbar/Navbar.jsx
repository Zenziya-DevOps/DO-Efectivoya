import React, { useContext, useEffect } from "react";
import config from "./NavItems/config.json";
// Components
import NavbarItem from "./NavItems/NavbarItem";
 // Icons 
import ico from "../../../images/ico.svg";
import whatsapp from '../../../images/whatsapp-white.svg'
import { UXUIContext } from "../../../context/UxUIProvider";
import Burger from "../../home/header/Nav/Burger";
const Navbar = () => {

  const {device} = useContext(UXUIContext)

  useEffect(() => {

  }, [device])
  

  return (
    <nav style={{background:'#000064'}} className="d-flex p-5 justify-content-between">
      <div>
        <img src={`${ico}`} style={{ width: "195px" }} />
      </div>

      <ul className="navbar-nav d-flex flex-row  justify-content-end">
        <>
        {device === 'tablet' || device === 'mobile' ? <Burger/> : (
          <>
          {config.navlinks.map(({ label, route }, index) => (
          <NavbarItem device={device} key={index} name={label} route={route} />
        ))}
        <div>
          <button className="btn btn-outline-light d-flex nohover">
            <img className="mx-2"   width={'24px'} src={`${whatsapp}`} alt="" />
           Ayuda
           </button>
        </div>
          </>
        )}
        
        </>
      </ul>
    </nav>
  );
};

export default Navbar;
