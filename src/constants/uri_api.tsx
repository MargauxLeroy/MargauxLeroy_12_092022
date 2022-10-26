export const uriApi = {
  userMainData(userId?: string) {
    if (!userId) return;
    return `http://localhost:3000/user/${userId}`;
  },
  userPerformance(userId?: string) {
    if (!userId) return;
    return `http://localhost:3000/user/${userId}/performance`;
  },
  userAverageSessions(userId?: string) {
    if (!userId) return;
    return `http://localhost:3000/user/${userId}/average-sessions`;
  },
  userActivity(userId?: string) {
    if (!userId) return;
    return `http://localhost:3000/user/${userId}/activity`;
  },
};

export type API = typeof uriApi;
