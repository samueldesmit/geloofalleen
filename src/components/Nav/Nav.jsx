import './Nav.scss'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu(!menu);
  }
  function handleMenuClose() {
    setMenu(false);
  }
  let menuClass = menu ? ' navigation__mobile-menu-open' : ' ';
  let menuButtonClass = menu ? ' harburgermenu-open' : ' ';

  return (
    <div className='outer-container'>
      <header className='navigation'>
        <h3 className='navigation__home-logo' onClick={handleMenuClose}><NavLink to="/">Geloof Alleen</NavLink></h3>
        <ul className='navigation__dekstop-menu'>
          <li><NavLink to="/over_mij">Over ons</NavLink></li>
          {/* <li><NavLink to="/proclamaties">Proclamaties</NavLink></li>  */}
          <li><NavLink to="/contact">Contact</NavLink></li>

        </ul>
        <div className={`harburgermenu${menuButtonClass}`} onClick={handleMenu}>
          <span className='harburgermenu__burger burger'></span>
          <span className='harburgermenu__burger burger'></span>
          <span className='harburgermenu__burger burger'></span>
        </div>
        <div className={`navigation__mobile-menu${menuClass}`}>
          <ul className='mobile-navigation-list'>
            <li onClick={handleMenu}><NavLink to="/over_mij" >Over ons</NavLink></li>
            {/* <li onClick={handleMenu}><NavLink to="/proclamaties">Proclamaties</NavLink></li> */}
            <li onClick={handleMenu}><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Nav