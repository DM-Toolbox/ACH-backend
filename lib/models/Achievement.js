const pool = require('../utils/pool');

module.exports = class Achievement {
  id;
  title;
  detail;
  reward;
  points;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.detail = row.detail;
    this.reward = row.reward;
    this.points = row.points;
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
    SELECT * FROM achievements
    WHERE id=$1`,
      [id]
    );
    return new Achievement(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM achievements');
    return rows.map((row) => new Achievement(row));
  }
};
