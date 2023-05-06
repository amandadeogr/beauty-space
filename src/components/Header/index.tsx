import "./Header.css";
import Menu from "../Menu";
import Button from "../Button";
import { useState, useEffect } from 'react';
import HamburgerMenu from "../HamburgerMenu";

const Header = () => {

   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => {
         setScreenWidth(window.innerWidth);
       };

       window.addEventListener('resize', handleResize);

       return () => {
         window.removeEventListener('resize', handleResize);
       };
   }, [])

   return (
      <header className="header">
            <h2 className="logo">MARIA</h2>
            <div className="left">
               <Menu />
               <Button action="whatsapp" message="Agende seu horário"/>
            </div>
            {
               screenWidth <= 768 ? <HamburgerMenu /> : ''
            }
            
      </header>
   )
}

export default Header;