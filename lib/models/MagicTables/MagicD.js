const pool = require('../../utils/pool');

module.exports = class MagicD {
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

  static async getMagicDValue(dieValueD) {
    const { rows } = await pool.query(
      `SELECT * 
        FROM magic_d
        WHERE die_value = $1`,
      [dieValueD]
    );
    return new MagicD(rows[0]);
  }

  static async getAllMagicD() {
    const { rows } = await pool.query('SELECT * FROM magic_d');
    return rows.map((row) => new MagicD(row));
  }
};
