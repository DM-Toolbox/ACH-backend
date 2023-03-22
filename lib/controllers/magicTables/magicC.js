const { Router } = require('express');
const MagicC = require('../../models/MagicTables/MagicC');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const magicC = await MagicC.getMagicCValue(req.params.id);
    res.json(magicC);
  })

  .get('/', async (req, res) => {
    const magicCs = await MagicC.getAllMagicC();
    res.json(magicCs);
  });
