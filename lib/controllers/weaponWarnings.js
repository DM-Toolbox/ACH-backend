const { Router } = require('express');
const WeaponWarning = require('../models/WeaponWarning');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const weaponWarning = await WeaponWarning.getWeaponWarningByValue(
      req.params.id
    );
    res.json(weaponWarning);
  })

  .get('/', async (req, res) => {
    const weaponWarnings = await WeaponWarning.getAllWeaponWarnings();
    res.json(weaponWarnings);
  });
