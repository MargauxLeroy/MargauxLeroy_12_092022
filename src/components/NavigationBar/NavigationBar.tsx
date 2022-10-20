import React from "react";

import "./NavigationBar.scss";

import MeditationIcon from "../../assets/icons/meditation.svg";
import BodybuildingIcon from "../../assets/icons/bodybuilding.svg";
import CyclingIcon from "../../assets/icons/cycling.svg";
import SwimmingIcon from "../../assets/icons/swimming.svg";

export function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavEntry icon={MeditationIcon} url={"#"} />
        </li>
        <li>
          <NavEntry icon={BodybuildingIcon} url={"#"} />
        </li>
        <li>
          <NavEntry icon={CyclingIcon} url={"#"} />
        </li>
        <li>
          <NavEntry icon={SwimmingIcon} url={"#"} />
        </li>
      </ul>
      <span>Copyright, SportSee 2020</span>
    </nav>
  );
}

type NavEntryProps = {
  icon: string;
  url: string;
};

function NavEntry({ icon, url }: NavEntryProps) {
  return (
    <a href={url}>
      <img className="sport-entry" src={icon} alt="" />
    </a>
  );
}
