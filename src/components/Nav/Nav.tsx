import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../commons/Logo";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./Nav.css";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const { width } = useMediaQuery();
  const [menu, setMenu] = useState("close-menu");
  const [menuMobile, setMenuMobile] = useState("close-menu");

  const onMenu = () => {
    if (menu === "close-menu" || menuMobile === "close-menu") {
      setMenu("open-menu");
      setMenuMobile("open-menu");
    } else {
      setMenu("close-menu");
      setMenuMobile("close-menu");
    }
  };
  return width < 768 ? (
    <>
      <div className="custom-navbar">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div className="options-mobile">
          <GiHamburgerMenu onClick={onMenu} />
          <div className={menuMobile}>
            <ul>
              <Link to="/horror" onClick={onMenu}>
                <li>Terror</li>
              </Link>
              <Link to="/drama" onClick={onMenu}>
                <li>Drama</li>
              </Link>
              <Link to="/comedy" onClick={onMenu}>
                <li>Comedia</li>
              </Link>
              <div className="divider-mobile"></div>
              <Link to="/favorites" onClick={onMenu}>
                <li>Favoritos</li>
              </Link>
              <Link to="/sign-in" onClick={onMenu} className="sign-in-mobile">
                <li>Iniciar sesión</li>
              </Link>
            </ul>
            <form className="search">
              <input type="text" placeholder="Buscar" />
              <button>
                <HiMagnifyingGlass />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="custom-navbar">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div onClick={onMenu} className="custom-menu">
          <p>
            Menu <BiDownArrow />
          </p>
          <div className={menu}>
            <ul>
              <Link to="/horror" onClick={onMenu}>
                <li>Terror</li>
              </Link>
              <Link to="/drama" onClick={onMenu}>
                <li>Drama</li>
              </Link>
              <Link to="/comedy" onClick={onMenu}>
                <li>Comedia</li>
              </Link>
            </ul>
          </div>
        </div>
        <form className="search">
          <input type="text" placeholder="Buscar" />
          <button>
            <HiMagnifyingGlass />
          </button>
        </form>

        <div className="divider"></div>
        <div className="fav-sign-in">
          <Link to="/users" >
            <p>Usuarios</p>
          </Link>
          <Link to="/sign-in" className="sign-in">
            <p>Iniciar sesión</p>
          </Link>
          <Link to="/profile" className="sign-in">
            <p>Mi perfil</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
