import { useEffect, useState } from "react";

import { API } from "../constants/uri_api";
import { MOCK } from "../constants/uri_mock";

import { Activity } from "../models/activity_model";
import { AverageSessions } from "../models/average_sessions_model";
import { User } from "../models/user_model";

import { fetchData } from "./fetch";

export const useUser = (userId: string | undefined, uri: API | MOCK) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetchData(uri.userMainData(userId))
      .then(
        (data: any) =>
          new User(
            data.id,
            data.userInfos.firstName,
            data.userInfos.lastName,
            data.userInfos.age,
            data.todayScore,
            data.keyData.caloriesCount,
            data.keyData.proteinCount,
            data.keyData.carbohydrateCount,
            data.keyData.lipidCount
          )
      )
      .then(setUser);
  }, [userId, uri]);

  return { user };
};

export const useActivity = (userId: string | undefined, uri: API | MOCK) => {
  const [activity, setActivity] = useState<Activity>();

  useEffect(() => {
    fetchData(uri.userActivity(userId)).then(setActivity);
  }, [userId, uri]);

  return { activity };
};

export const usePerformance = (userId: string | undefined, uri: API | MOCK) => {
  const [performance, setPerformance] = useState<Performance>();

  useEffect(() => {
    fetchData(uri.userPerformance(userId)).then(setPerformance);
  }, [userId, uri]);

  return { performance };
};

// export const useAverageSessions = (userId: string) => {
//   const [averageSessions, setAverageSessions] = useState<AverageSessions>();

//   useEffect(() => {
//     fetchDataTwo(uri.userAverageSessions(userId)).then(setAverageSessions);
//   }, [userId]);

//   return { averageSessions };
// };
