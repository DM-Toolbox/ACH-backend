const { Router } = require('express');
const MagicH = require('../../models/MagicTables/MagicH');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const magicH = await MagicH.getMagicHValue(req.params.id);
    res.json(magicH);
  })

  .get('/', async (req, res) => {
    const magicHs = await MagicH.getAllMagicH();
    res.json(magicHs);
  });
