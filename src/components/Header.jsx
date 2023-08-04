import React, { useRef } from "react";
import "../styles/style.css";
import Favorites from "./Favorites";
import { Link, Element } from "react-scroll";
import { useFavoriteContext } from "../context/appContext";


const Header = () => {

  const {
    favorites,
    showFavorites,
    removeFromFavorites,
    openFavorites,
    closeFavorites,
  } = useFavoriteContext();

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  return (
    <Element name="section1">
      <header>
        <img src="/images/logo.png" className="logo" />
        <ul ref={navRef} className="header-ul">
          <li> <img
            src="/images/close.png"
            className="close-btn"
            onClick={showNavbar}
          /></li>
          <li>
            <Link to="section1" className="link" spy={true} smooth={true} duration={2000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="section2" className="link" spy={true} smooth={true} duration={2000}>
              How it works
            </Link>
          </li>
          <li>
            <Link to="section3" className="link" spy={true} smooth={true} duration={2000}>
              Explore
            </Link>
          </li>
          <li className="hidden" onClick={openFavorites}>Favorites</li>
        </ul>
        <img src="/images/bookmark.png" className="bookmark" onClick={openFavorites}
        />
        {showFavorites && (
          <Favorites
            favorites={favorites}
            onRemoveFromFavorites={removeFromFavorites}
            onCloseFavorites={closeFavorites}
          />
        )}
        <img
          src="/images/menu.png"
          className="burger-menu"
          onClick={showNavbar}
        />
      </header>
    </Element>
  );
};

export default Header;
