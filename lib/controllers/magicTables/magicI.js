const { Router } = require('express');
const MagicI = require('../../models/MagicTables/MagicI');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const magicI = await MagicI.getMagicIValue(req.params.id);
    res.json(magicI);
  })

  .get('/', async (req, res) => {
    const magicIs = await MagicI.getAllMagicI();
    res.json(magicIs);
  });
