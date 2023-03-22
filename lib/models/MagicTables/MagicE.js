const pool = require('../../utils/pool');

module.exports = class MagicE {
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

  static async getMagicEValue(dieValueE) {
    const { rows } = await pool.query(
      `SELECT * 
        FROM magic_e
        WHERE die_value = $1`,
      [dieValueE]
    );
    return new MagicE(rows[0]);
  }

  static async getAllMagicE() {
    const { rows } = await pool.query('SELECT * FROM magic_e');
    return rows.map((row) => new MagicE(row));
  }
};
