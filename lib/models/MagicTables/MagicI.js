const pool = require('../../utils/pool');

module.exports = class MagicI {
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

  static async getMagicIValue(dieValueI) {
    const { rows } = await pool.query(
      `SELECT * 
        FROM magic_i
        WHERE die_value = $1`,
      [dieValueI]
    );
    return new MagicI(rows[0]);
  }

  static async getAllMagicI() {
    const { rows } = await pool.query('SELECT * FROM magic_i');
    return rows.map((row) => new MagicI(row));
  }
};
