import React, { useContext, useEffect } from "react";

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

import { DataContext } from "../components/Providers/DataProvider";
import { Navigate, useParams } from "react-router-dom";

import {
  useActivity,
  useAverageSessions,
  usePerformance,
  useUser,
} from "../utils/states";

export function Dashboard() {
  /// We retrieve the user from the URL
  const params = useParams();
  const userId = params.userId;

  /// We retrieve the URI according to the context
  const dataContext = useContext(DataContext);
  const uri = dataContext.isApi ? uriApi : uriMock;

  /// We collect datas from states
  const { user, loading } = useUser(userId, uri);
  const activity = useActivity(userId, uri);
  const performance = usePerformance(userId, uri);
  const averageSessions = useAverageSessions(userId, uri);

  const firstName = user?.userInfos.firstName;
  const keyData = user?.keyData;
  const todayScore = user?.todayScore;

  if (loading) {
    return <p>loading...</p>;
  }

  if (!userId || !user) {
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
              Bonjour <span>{firstName == null ? "..." : firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="graphs">
            <div className="primary-zone">
              <DailyActivity activityData={activity} />
              <div className="primary-zone-bottom">
                <AverageSessions averageSessionsData={averageSessions} />
                <ActivityType activityTypeData={performance} />
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
