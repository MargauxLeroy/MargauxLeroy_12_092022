export const uriMock = {
  userMainData(userId?: string) {
    if (!userId) return;

    return `/mocks/${userId}/user.json`;
  },
  userPerformance(userId?: string) {
    if (!userId) return;

    return `/mocks/${userId}/performance.json`;
  },
  userAverageSessions(userId?: string) {
    if (!userId) return;

    return `/mocks/${userId}/average-sessions.json`;
  },
  userActivity(userId?: string) {
    if (!userId) return;

    return `/mocks/${userId}/activity.json`;
  },
};

export type MOCK = typeof uriMock;
