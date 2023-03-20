const pool = require('../utils/pool');

module.exports = class Resistance {
  id;
  die_value;
  resistance_type;

  constructor(row) {
    this.id = row.id;
    this.dieValue = row.die_value;
    this.resistanceType = row.resistance_type;
  }

  static async getResistanceByDieValue(resistanceValue) {
    const { rows } = await pool.query(
      `SELECT * 
        FROM resistance
        WHERE die_value = $1`,
      [resistanceValue]
    );
    return new Resistance(rows[0]);
  }

  static async getAllResistances() {
    const { rows } = await pool.query('SELECT * FROM resistance');
    return rows.map((row) => new Resistance(row));
  }
};
