import React, { useContext } from "react";
import { Header } from "../components/Header/Header";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";

import { useUser } from "../utils/fetch";

import AppleIcon from "../assets/icons/apple.svg";
import BurgerIcon from "../assets/icons/cheeseburger.svg";
import ChickenIcon from "../assets/icons/chicken.svg";
import EnergyIcon from "../assets/icons/energy.svg";
import DailyActivity from "../components/DailyActivity/DailyActivity";
import Score from "../components/Score/Score";
import ActivityType from "../components/ActivityType/ActivityType";
import AverageSessions from "../components/AverageSessions/AverageSessions";

import { UserContext } from "../App";

export function Home() {
  const userContext = useContext(UserContext);
  console.log(`userContext: ${userContext.user}`);

  const { user } = useUser(userContext.user);

  const firstName = user?.userInfos.firstName;
  const keyData = user?.keyData;

  return (
    <>
      <Header />
      <div className="app-content">
        <NavigationBar />
        <div className="dashboard">
          <div className="hello">
            <h1>
              Bonjour{" "}
              <span
                onClick={() => {
                  userContext.user === "12"
                    ? userContext.setUser("18")
                    : userContext.setUser("12");
                }}
              >
                {firstName}
              </span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="graphs">
            <div className="primary-zone">
              <DailyActivity />
              <div className="primary-zone-bottom">
                <AverageSessions />
                <ActivityType />
                <Score />
              </div>
            </div>
            <ul className="secondary-zone">
              <InfoCard
                value={keyData?.calorieCount}
                title={"Calories"}
                icon={EnergyIcon}
              />
              <InfoCard
                value={keyData?.proteinCount}
                title={"Protéines"}
                icon={ChickenIcon}
              />
              <InfoCard
                value={keyData?.carbohydrateCount}
                title={"Glucides"}
                icon={AppleIcon}
              />
              <InfoCard
                value={keyData?.lipidCount}
                title={"Lipides"}
                icon={BurgerIcon}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
