import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import "./utils.css";
import { Link } from "react-router-dom";
import decode from "jwt-decode";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLogout } from "../../redux/features/authSlice";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.auth }));

  const token = user?.token;

  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }

  const handleLogout = () => {
    dispatch(setLogout());
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar container">
      <div className="logo">
        <Link to="/">
          <p className="logo-text">
            TH<span>B</span>
          </p>
        </Link>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <Link to="/" onClick={toggleMenu}>
              Accueil
            </Link>
          </li>
          
          <li>
            <Link to="/blog" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
             About
            </Link>
          </li>
          <li>
            <Link to="/service" onClick={toggleMenu}>
              Service
            </Link>
          </li>
          <li>
            <Link to="/staff" onClick={toggleMenu}>
              Doctors
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
            Contact
            </Link>
          </li>
          {user?.result?._id && (
            <li>
              <Link to="/dashboard" onClick={toggleMenu}>
              Dashboard
              </Link>
            </li>
          )}
          <li>
            {user?.result?._id ? (
              <div onClick={toggleMenu}>
                <Link to="/login" onClick={() => handleLogout()}>
                  Logout
                </Link>
              </div>
            ) : (
              <Button
                text={"Connection"}
                btnClass={"btn-dark"}
                href={"/login"}
                onClick={toggleMenu}
              />
            )}
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#0a1930" size={30} />
        ) : (
          <AiOutlineBars color="#0a1930" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
