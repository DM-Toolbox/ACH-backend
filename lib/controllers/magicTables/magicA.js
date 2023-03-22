const { Router } = require('express');
const MagicA = require('../../models/MagicTables/MagicA');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const magicA = await MagicA.getMagicAValue(req.params.id);
    res.json(magicA);
  })

  .get('/', async (req, res) => {
    const magicAs = await MagicA.getAllMagicA();
    res.json(magicAs);
  });
