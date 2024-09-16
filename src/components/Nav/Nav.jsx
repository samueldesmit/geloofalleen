import './Nav.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleMenuClose = () => {
    setMenu(false);
  };

  return (
    <div className='outer-container'>
      <header className='navigation'>
        <h3 className='navigation__home-logo' onClick={handleMenuClose}>
          <NavLink to="/">Geloof Alleen</NavLink>
        </h3>
        <ul className='navigation__desktop-menu'>
          <li><NavLink to="/over_mij">Over ons</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className={`harburgermenu ${menu ? 'harburgermenu-open' : ''}`} onClick={handleMenu}>
          <span className='harburgermenu__burger'></span>
          <span className='harburgermenu__burger'></span>
          <span className='harburgermenu__burger'></span>
        </div>
        <div className={`navigation__mobile-menu ${menu ? 'navigation__mobile-menu-open' : ''}`}>
          <ul className='mobile-navigation-list'>
            <li onClick={handleMenuClose}><NavLink to="/over_mij">Over ons</NavLink></li>
            <li onClick={handleMenuClose}><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Nav;
