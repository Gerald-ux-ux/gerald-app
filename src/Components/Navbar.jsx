import React from 'react'

import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="Me">
        G 
      </h1>
      <ul className="NavMenu">
        <li>
          <CustomLink to="/home" className="NavLinks">
            Home
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/about" className="NavLinks">
            About
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/portfolio" className="NavLinks">
            Portfolio
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/contact" className="NavLinks">
            Contact
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;