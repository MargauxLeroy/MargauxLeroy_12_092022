import React, { useContext } from "react";

import { Header } from "../components/Header/Header";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";

import AppleIcon from "../assets/icons/apple.svg";
import BurgerIcon from "../assets/icons/cheeseburger.svg";
import ChickenIcon from "../assets/icons/chicken.svg";
import EnergyIcon from "../assets/icons/energy.svg";

import DailyActivity from "../components/Charts/DailyActivity/DailyActivity";
import Score from "../components/Charts/Score/Score";
import ActivityType from "../components/Charts/ActivityType/ActivityType";
import AverageSessions from "../components/Charts/AverageSessions/AverageSessions";

import { uriMock } from "../constants/uri_mock";
import { uriApi } from "../constants/uri_api";

import { DataContext } from "../components/UserProvider/DataProvider";
import { Navigate, useParams } from "react-router-dom";
import { useActivity, usePerformance, useUser } from "../utils/states";

export function Home() {
  /// On récupère l'id dans l'URL
  const params = useParams();
  const userId = params.userId;

  /// On récupère l'uri en fonction du context
  const dataContext = useContext(DataContext);
  const uri = dataContext.isApi ? uriApi : uriMock;

  /// On récupère les données grâce aux states
  const user = useUser(userId, uri).user;
  const activity = useActivity(userId, uri).activity;
  const performance = usePerformance(userId, uri).performance;

  const firstName = user?.userInfos.firstName;
  const keyData = user?.keyData;
  const todayScore = user?.todayScore;

  if (!userId) {
    return <Navigate to={"/404"} />;
  }

  return (
    <>
      <Header />
      <div className="app-content">
        <NavigationBar />
        <div className="dashboard">
          <div className="hello">
            <h1>
              Bonjour <span>{firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="graphs">
            <div className="primary-zone">
              <DailyActivity activityData={activity} />
              <div className="primary-zone-bottom">
                <AverageSessions />
                <ActivityType />
                <Score todayScore={todayScore} />
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
