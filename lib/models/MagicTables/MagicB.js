const pool = require('../../utils/pool');

module.exports = class MagicB {
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

  static async getMagicBValue(dieValueB) {
    const { rows } = await pool.query(
      `SELECT * 
        FROM magic_b
        WHERE die_value = $1`,
      [dieValueB]
    );
    return new MagicB(rows[0]);
  }

  static async getAllMagicB() {
    const { rows } = await pool.query('SELECT * FROM magic_b');
    return rows.map((row) => new MagicB(row));
  }
};
