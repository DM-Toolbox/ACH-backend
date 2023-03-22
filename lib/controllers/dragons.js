const { Router } = require('express');
const Dragon = require('../models/Dragon');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const dragon = await Dragon.getDragonByValue(req.params.id);
    res.json(dragon);
  })

  .get('/', async (req, res) => {
    const dragons = await Dragon.getAllDragons();
    res.json(dragons);
  });
