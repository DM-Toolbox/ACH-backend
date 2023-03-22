const { Router } = require('express');
const MagicF = require('../../models/MagicTables/MagicF');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const magicF = await MagicF.getMagicFValue(req.params.id);
    res.json(magicF);
  })

  .get('/', async (req, res) => {
    const magicFs = await MagicF.getAllMagicF();
    res.json(magicFs);
  });
