import React,{useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/walogo1.svg'

const Menu = () => (
  <>
    <p><a href='#home'>Accueil</a></p>
    <p><a href='#journal'>Journal</a></p>
    <p><a href='#product'>Produits</a></p>
    <p><a href='#buy'>Acheter</a></p>
    <p><a href='#blog'>bibliotheque</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu , setToggleMenu] = useState(false) ;
  return (
    <div className="navbar">
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} alt="company logo" />
        </div>
        <div className='navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-menu'>
        {
          toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className='navbar-menu_container scale-up-center'>
              <div className='navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar