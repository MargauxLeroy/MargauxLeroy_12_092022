import { useEffect, useState } from "react";
import { Activity, AverageSessions, User } from "../models/Type";

/// TODO: Implémenter une page d'erreur en cas de pas de données / pas de user

/// Une seule fonction générale de fetch
/// Passer toute l'uri endpoint d'un coup
const fetchData = async (userName: string, endPoint: string) => {
  const data = await fetch(`/mocks/${userName}/${endPoint}.json`);
  const response = await data.json();

  return response.data;
};

/// Récupérer les datas en fonctions de l'endpoint
export const useUser = (userName: string) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(userName, "user")
      .then(setUser)
      .finally(() => setIsLoading(false));
  }, [userName]);

  return { user, isLoading };
};

export const useActivity = (userName: string) => {
  const [activity, setActivity] = useState<Activity>();

  useEffect(() => {
    fetchData(userName, "activity").then(setActivity);
  }, [userName]);

  return { activity };
};

export const usePerformance = (userName: string) => {
  const [performance, setPerformance] = useState<Performance>();

  useEffect(() => {
    fetchData(userName, "performance").then(setPerformance);
  }, [userName]);

  return { performance };
};

export const useAverageSessions = (userName: string) => {
  const [averageSessions, setAverageSessions] = useState<AverageSessions>();

  useEffect(() => {
    fetchData(userName, "average-sessions").then(setAverageSessions);
  }, [userName]);

  return { averageSessions };
};
