const pool = require('../../utils/pool');

module.exports = class MagicG {
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

  static async getMagicGValue(dieValueG) {
    const { rows } = await pool.query(
      `SELECT * 
        FROM magic_g
        WHERE die_value = $1`,
      [dieValueG]
    );
    return new MagicG(rows[0]);
  }

  static async getAllMagicG() {
    const { rows } = await pool.query('SELECT * FROM magic_g');
    return rows.map((row) => new MagicG(row));
  }
};
