import { useEffect, useState } from "react";

import { API } from "../constants/uri_api";
import { MOCK } from "../constants/uri_mock";

import { Activity } from "../models/activityModel";
import { AverageSessionsModel } from "../models/averageSessionsModel";
import { PerformanceModel } from "../models/performanceModel";
import { User } from "../models/userModel";

import { fetchData } from "./fetch";

/**
 *
 * @param userId
 * @param uri
 * @returns { User | undefined }
 * @returns { boolean}
 */
export const useUser = (userId: string | undefined, uri: API | MOCK) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

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
            data.keyData.calorieCount,
            data.keyData.proteinCount,
            data.keyData.carbohydrateCount,
            data.keyData.lipidCount
          )
      )
      .then(setUser)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [userId, loading, uri]);

  return { user, loading };
};

/**
 * @param userId
 * @param uri
 * @returns { Activity | undefined }
 */
export const useActivity = (userId: string | undefined, uri: API | MOCK) => {
  const [activity, setActivity] = useState<Activity>();

  useEffect(() => {
    fetchData(uri.userActivity(userId)).then(setActivity);
  }, [userId, uri]);

  return activity;
};

/**
 *
 * @param userId
 * @param uri
 * @returns { PerformanceModel | undefined }
 */
export const usePerformance = (userId: string | undefined, uri: API | MOCK) => {
  const [performance, setPerformance] = useState<PerformanceModel>();

  useEffect(() => {
    fetchData(uri.userPerformance(userId)).then(setPerformance);
  }, [userId, uri]);

  return performance;
};

/**
 *
 * @param userId
 * @param uri
 * @returns { AverageSessionsModel | undefined }
 */
export const useAverageSessions = (
  userId: string | undefined,
  uri: API | MOCK
) => {
  const [averageSessions, setAverageSessions] =
    useState<AverageSessionsModel>();

  useEffect(() => {
    fetchData(uri.userAverageSessions(userId)).then(setAverageSessions);
  }, [userId, uri]);

  return averageSessions;
};
