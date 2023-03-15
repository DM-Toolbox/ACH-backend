const { Router } = require('express');
const Achievement = require('../models/Achievement');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const achievement = await Achievement.getById(req.params.id);
    res.json(achievement);
  })

  .get('/', async (req, res) => {
    const achievements = await Achievement.getAll();
    res.json(achievements);
  });
