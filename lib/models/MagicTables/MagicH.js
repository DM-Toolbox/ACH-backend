const pool = require('../../utils/pool');

module.exports = class MagicH {
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

  static async getMagicHValue(dieValueH) {
    const { rows } = await pool.query(
      `SELECT * 
        FROM magic_h
        WHERE die_value = $1`,
      [dieValueH]
    );
    return new MagicH(rows[0]);
  }

  static async getAllMagicH() {
    const { rows } = await pool.query('SELECT * FROM magic_h');
    return rows.map((row) => new MagicH(row));
  }
};
