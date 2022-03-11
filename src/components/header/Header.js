import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
const Header = () => {
  return (
    <div className="Header_box">
      <NavLink to="/" end activeStyle={{ backgroundColor: 'lightgray' }}>
        Produtos
      </NavLink>
      <NavLink to="contatos" activeStyle={{ backgroundColor: 'lightgray' }}>
        Contato
      </NavLink>
    </div>
  );
};

export default Header;
