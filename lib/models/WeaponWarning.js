const pool = require('../utils/pool');

module.exports = class WeaponWarning {
  id;
  die_value;
  weapon_type;

  constructor(row) {
    this.id = row.id;
    this.dieValue = row.die_value;
    this.weaponType = row.weapon_type;
  }

  static async getWeaponWarningByValue(weaponValue) {
    const { rows } = await pool.query(
      `SELECT *
            FROM weapon_warning 
            WHERE die_value = $1`,
      [weaponValue]
    );
    return new WeaponWarning(rows[0]);
  }

  static async getAllWeaponWarnings() {
    const { rows } = await pool.query('SELECT * FROM weapon_warning');
    return rows.map((row) => new WeaponWarning(row));
  }
};
