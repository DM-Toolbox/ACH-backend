const { Router } = require('express');
const Resistance = require('../models/Resistance');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const resistance = await Resistance.getResistanceByValue(req.params.id);
    res.json(resistance);
  })
  .get('/', async (req, res) => {
    const resistances = await Resistance.getAllResistances();
    res.json(resistances);
  });
