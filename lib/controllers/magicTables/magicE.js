const { Router } = require('express');
const MagicE = require('../../models/MagicTables/MagicE');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const magicE = await MagicE.getMagicEValue(req.params.id);
    res.json(magicE);
  })

  .get('/', async (req, res) => {
    const magicEs = await MagicE.getAllMagicE();
    res.json(magicEs);
  });
