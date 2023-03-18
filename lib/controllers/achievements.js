const { Router } = require('express');
const Achievement = require('../models/Achievement');

module.exports = Router()
  .get('/:id/points', async (req, res, next) => {
    try {
      const achievement = await Achievement.getById(req.params.id);
      if (!achievement) {
        next();
      }
      const points = await Achievement.getPoints(req.params.points);
      res.json(points);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res) => {
    const achievement = await Achievement.getById(req.params.id);
    res.json(achievement);
  })

  .get('/', async (req, res) => {
    const achievements = await Achievement.getAll();
    res.json(achievements);
  });
