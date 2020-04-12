import React from "react";

const Header = ({ titulo }) => {
  return (
    <nav className="nav-wrapper light-blue darken-3">
      <a href="http://localhost:3000" className="brand-logo center">
        {titulo}
      </a>
    </nav>
  );
};

export default Header;
