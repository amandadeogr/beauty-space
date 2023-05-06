import { useState } from 'react';
import './HamburgerMenu.css';

import barsIcon from '../../assets/bars-icon.png'

function HamburgerMenu() {

  const menuLinks = [
    {
       name: 'Home',
       href: '#banner'
    },
    {
       name: 'Especialidades',
       href: '#especialidades'
    },
    {
       name: 'Depoimentos',
       href: '#depoimentos'
    },
    {
       name: 'Contato',
       href: '#contato'
    },
 ];

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  }

  return (
    <div className="hamburger-menu">
      <button className={`hamburger-menu__button ${isOpen ? 'is-active' : ''}`} onClick={handleMenuClick}>
        <img className='bars-icon' src={barsIcon} alt="" />
      </button>

      <nav className={`hamburger-menu__nav ${isOpen ? 'is-active' : ''}`}>
        <ul className="hamburger-menu">
          {
            menuLinks.map((item)=> {
              return (
                <li className="menu-item">
                  <a href={item.href} className="menu-link" onClick={handleLinkClick}>{item.name} </a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
