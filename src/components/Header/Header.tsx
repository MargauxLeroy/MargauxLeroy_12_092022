import React from "react";

import "./Header.scss";

import AppLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <header>
      <img src={AppLogo} alt="Logo" />
      <ul>
        <li>
          <a href="">Accueil</a>
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
