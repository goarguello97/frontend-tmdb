import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Logo from "../../commons/Logo";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { logOut } from "../../features/user/authSlice";
import { getSearch, resetSearch } from "../../features/movies/moviesSlice";
import useForm from "../../hooks/useFormHook";
import { SEARCH_INITAL_VALUES } from "../../constants";
import { validationSearch } from "../../helpers/validations";

const NavMenu = () => {
  const dispatch = useAppDispatch();
  const { width } = useMediaQuery();
  const [menu, setMenu] = useState("close-menu");
  const [menuMobile, setMenuMobile] = useState("close-menu");
  const { userLogged } = useAppSelector((state) => state.auth);
  const { search } = useAppSelector((state) => state.movies);
  const { values, handleChange, handleSubmit, errors } = useForm(
    SEARCH_INITAL_VALUES,
    getSearch,
    validationSearch
  );

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
              {userLogged ? (
                <>
                  <Link to="/profile" className="sign-in-mobile">
                    <li>Mi perfil</li>
                  </Link>
                  <button
                    onClick={() => dispatch(logOut())}
                    className="sign-in-mobile button-mobile"
                  >
                    <li>Cerrar sesión</li>
                  </button>
                </>
              ) : (
                <Link to="/sign-in" onClick={onMenu} className="sign-in-mobile">
                  <li>Iniciar sesión</li>
                </Link>
              )}
            </ul>
            <form className="search" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Buscar"
                name="search"
                value={values.search}
                onChange={handleChange}
              />
              {search ? (
                <button
                  className="delete-search"
                  onClick={() => {
                    dispatch(resetSearch());
                    values.search = "";
                  }}
                >
                  <RxCross1 />
                </button>
              ) : null}
              <button>
                <HiMagnifyingGlass />
              </button>
              {Object.keys(errors).length !== 0
                ? Object.values(errors).map((error: any, i) => (
                    <div key={i} className="search-error">
                      {error}
                    </div>
                  ))
                : null}
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
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar"
            name="search"
            onChange={handleChange}
            value={values.search}
          />
          {search ? (
            <button
              className="delete-search"
              onClick={() => {
                dispatch(resetSearch());
                values.search = "";
              }}
            >
              <RxCross1 />
            </button>
          ) : null}
          <button type="submit">
            <HiMagnifyingGlass />
          </button>
          {Object.keys(errors).length !== 0
            ? Object.values(errors).map((error: any, i) => (
                <div key={i} className="search-error">
                  {error}
                </div>
              ))
            : null}
        </form>

        <div className="divider"></div>
        <div className="fav-sign-in">
          <Link to="/users">
            <p>Usuarios</p>
          </Link>
          {userLogged ? (
            <>
              <Link to="/profile" className="sign-in">
                <p>Mi perfil</p>
              </Link>
              <button onClick={() => dispatch(logOut())} className="sign-in">
                <p>Cerrar sesión</p>
              </button>
            </>
          ) : (
            <Link to="/sign-in" className="sign-in">
              <p>Iniciar sesión</p>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavMenu;
