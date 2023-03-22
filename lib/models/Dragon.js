const pool = require('../utils/pool');

module.exports = class Dragon {
  id;
  dieValue;
  dragonType;
  resistanceType;

  constructor(row) {
    this.id = row.id;
    this.dieValue = row.die_value;
    this.dragonType = row.dragon_type;
    this.resistanceType = row.resistance_type;
  }

  static async getDragonByValue(dragonValue) {
    const { rows } = await pool.query(
      `SELECT * 
        FROM dragons 
        WHERE die_value = $1`,
      [dragonValue]
    );
    return new Dragon(rows[0]);
  }

  static async getAllDragons() {
    const { rows } = await pool.query('SELECT * FROM dragons');
    return rows.map((row) => new Dragon(row));
  }
};
