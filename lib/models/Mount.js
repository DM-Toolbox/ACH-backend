const pool = require('../utils/pool');

module.exports = class Mount {
  id;
  die_value;
  mount_type;

  constructor(row) {
    this.id = row.id;
    this.dieValue = row.die_value;
    this.mountType = row.mount_type;
  }

  static async getMountByValue(mountValue) {
    const { rows } = await pool.query(
      `SELECT *
        FROM mounts
        WHERE die_value = $1`,
      [mountValue]
    );
    return new Mount(rows[0]);
  }

  static async getAllMounts() {
    const { rows } = await pool.query('SELECT * FROM mounts');
    return rows.map((row) => new Mount(row));
  }
};
