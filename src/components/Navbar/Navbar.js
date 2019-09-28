import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav-inner">
        <NavLink to="/" activeClassName="active" exact={true}>
          Tokyo
        </NavLink>
        <NavLink to="/hakone" activeClassName="active">
          Hakone
        </NavLink>
        <NavLink to="/osaka" activeClassName="active">
          Osaka
        </NavLink>
        <NavLink to="/kyoto" activeClassName="active">
          Kyoto
        </NavLink>
        <NavLink to="/nara" activeClassName="active">
          Nara
        </NavLink>
        <NavLink to="/kobe" activeClassName="active">
          Kobe
        </NavLink>
        <NavLink to="/korea" activeClassName="active">
          Korea
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
