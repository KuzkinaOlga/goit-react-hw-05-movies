import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  padding: 20px;
  background-color: #fff;

  box-shadow: 0px 2px 10px 1px #c2c2c2;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #222;
  font-size: 16px;
  font-weight: 700;

  text-transform: uppercase;

  &:hover,
  &:focus {
    color: #0052d4;
  }

  &.active {
    color: #fff;
    background-color: #0052d4;
    padding: 6px 12px;
    border-radius: 4px;
  }
`;
