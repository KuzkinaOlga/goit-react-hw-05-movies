import React from 'react';

import { Nav, NavLinkStyled } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/movies">Movies</NavLinkStyled>
    </Nav>
  );
};
