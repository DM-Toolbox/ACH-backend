const { Router } = require('express');
const MagicB = require('../../models/MagicTables/MagicB');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const magicB = await MagicB.getMagicBValue(req.params.id);
    res.json(magicB);
  })

  .get('/', async (req, res) => {
    const magicBs = await MagicB.getAllMagicB();
    res.json(magicBs);
  });
