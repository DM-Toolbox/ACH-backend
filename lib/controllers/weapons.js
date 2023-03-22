const { Router } = require('express');
const Weapon = require('../models/Weapon');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const weapon = await Weapon.getWeaponByValue(req.params.id);
    res.json(weapon);
  })
  .get('/', async (req, res) => {
    const weapons = await Weapon.getAllWeapons();
    res.json(weapons);
  });
