export class User {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    todayScore: number,
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number
  ) {
    this.id = id;
    this.userInfos = {
      firstName,
      lastName,
      age,
    };
    this.todayScore = todayScore;
    this.keyData = {
      calorieCount,
      proteinCount,
      carbohydrateCount,
      lipidCount,
    };
  }
}
