const { Router } = require('express');
const MagicD = require('../../models/MagicTables/MagicD');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const magicD = await MagicD.getMagicDValue(req.params.id);
    res.json(magicD);
  })

  .get('/', async (req, res) => {
    const magicDs = await MagicD.getAllMagicD();
    res.json(magicDs);
  });
