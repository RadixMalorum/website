import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { reveal as Menu } from 'react-burger-menu';

const SideMenu = () => {
  return (
    <Menu pageWrapId={ "page-wrapper" } outerContainerId={ "app" }>
       <Link className="menu-item" to="/">HOME</Link>
       <Link className="menu-item" to="/quadrantal">QUADRANTAL</Link>
       <Link className="menu-item" to="/razze-e-etnie">RAZZE E ETNIE</Link>
       <Link className="menu-item" to="/magia">LA MAGIA</Link>
       <Link className="menu-item" to="/contatti">CONTATTI</Link>
    </Menu>
  )
}

export { SideMenu };
