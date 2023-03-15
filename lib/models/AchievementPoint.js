const pool = require('../utils/pool');

module.exports = class AchievementPoints {
  id;
  achievement_points;

  constructor(row) {
    this.id = row.id;
    this.achievementPoints = row.achievement_points;
  }

  static async getAchievementPoints(achievementPoints) {
    const { rows } = await pool.query(
      'SELECT achievement_points FROM achievements WHERE id=$1',
      [achievementPoints]
    );
    return new AchievementPoints(rows[0]);
  }
};
