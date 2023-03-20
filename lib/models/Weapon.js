const pool = require('../utils/pool');

module.exports = class Weapon {
  id;
  die_value;
  weapon_type;

  constructor(row) {
    this.id = row.id;
    this.dieValue = row.die_value;
    this.weaponType = row.weapon_type;
  }

  static async getWeaponByWeaponValue(weaponValue) {
    const { rows } = await pool.query(
      `SELECT * 
            FROM weapons
            WHERE die_value = $1`,
      [weaponValue]
    );
    return new Weapon(rows[0]);
  }

  static async getAllWeapons() {
    const { rows } = await pool.query('SELECT * FROM weapons');
    return rows.map((row) => new Weapon(row));
  }
};
