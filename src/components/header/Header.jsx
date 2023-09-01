import React from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderStyled } from './header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <nav className="navigation">
        <NavLink className="btn" to="/">
          Home
        </NavLink>
        <NavLink className="btn" to="/movies">
          Movies
        </NavLink>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
