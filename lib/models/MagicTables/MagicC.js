const pool = require('../../utils/pool');

module.exports = class MagicC {
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

  static async getMagicCValue(dieValueC) {
    const { rows } = await pool.query(
      `SELECT * 
        FROM magic_c
        WHERE die_value = $1`,
      [dieValueC]
    );
    return new MagicC(rows[0]);
  }

  static async getAllMagicC() {
    const { rows } = await pool.query('SELECT * FROM magic_c');
    return rows.map((row) => new MagicC(row));
  }
};
