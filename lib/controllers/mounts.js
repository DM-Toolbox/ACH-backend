const { Router } = require('express');
const Mount = require('../models/Mount');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const mount = await Mount.getMountByValue(req.params.id);
    res.json(mount);
  })

  .get('/', async (req, res) => {
    const mounts = await Mount.getAllMounts();
    res.json(mounts);
  });
