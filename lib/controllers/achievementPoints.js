const { Router } = require('express');
const AchievementPoints = require('../models/AchievementPoint.js');

module.exports = Router().get('/:achievementPoints', async (req, res) => {
  const achievementPoints = await AchievementPoints.getAchievementPoints(
    req.params.achievementPoints
  );
  res.json(achievementPoints);
});
