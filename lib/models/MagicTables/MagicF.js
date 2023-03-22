const pool = require('../../utils/pool');

module.exports = class MagicF {
  id;
  die_value;
  item;
  chance;

  constructor(row) {
    this.id = row.id;
    this.dieValue = row.die_value;
    this.item = row.item;
    this.chance = row.chance;
  }

  static async getMagicFValue(dieValueF) {
    const { rows } = await pool.query(
      `SELECT * 
        FROM magic_f
        WHERE die_value = $1`,
      [dieValueF]
    );
    return new MagicF(rows[0]);
  }

  static async getAllMagicF() {
    const { rows } = await pool.query('SELECT * FROM magic_f');
    return rows.map((row) => new MagicF(row));
  }
};
