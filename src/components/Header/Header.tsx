import React from "react";

import "./Header.scss";

import AppLogo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <img src={AppLogo} alt="Logo" />
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <a href="#">Profil</a>
        </li>
        <li>
          <a href="#">Réglage</a>
        </li>
        <li>
          <a href="#">Communauté</a>
        </li>
      </ul>
    </header>
  );
}
