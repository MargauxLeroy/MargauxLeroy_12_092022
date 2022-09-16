import React from "react";

import "./Header.scss";

import { AppLogo } from "../Logo/Logo";

export function Header() {
  return (
    <header>
      {/* <img src="../../assets/logo.svg" alt="" /> */}
      <AppLogo />
      <ul className="entries">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </header>
  );
}
