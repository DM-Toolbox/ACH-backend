const { Router } = require('express');
const MagicG = require('../../models/MagicTables/MagicG');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const magicG = await MagicG.getMagicGValue(req.params.id);
    res.json(magicG);
  })

  .get('/', async (req, res) => {
    const magicGs = await MagicG.getAllMagicG();
    res.json(magicGs);
  });
