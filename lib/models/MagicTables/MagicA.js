const pool = require('../../utils/pool');

module.exports = class MagicA {
  id;
  dieValue;
  item;
  chance;

  constructor(row) {
    this.id = row.id;
    this.dieValue = row.die_value;
    this.item = row.item;
    this.chance = row.chance;
  }

  static async getMagicAValue(dieValueA) {
    const { rows } = await pool.query(
      `SELECT * 
        FROM magic_a
        WHERE die_value = $1`,
      [dieValueA]
    );
    return new MagicA(rows[0]);
  }

  static async getAllMagicA() {
    const { rows } = await pool.query('SELECT * FROM magic_a');
    return rows.map((row) => new MagicA(row));
  }
};
