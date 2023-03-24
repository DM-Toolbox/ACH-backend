const { Router } = require('express');
const ChestRewardsService = require('../services/ChestRewardsService');

module.exports = Router().get('/wood', async (req, res) => {
  const woodChestRewards = await ChestRewardsService.getRewardsFromWoodChest();
  res.json(woodChestRewards);
});
// .get('/iron', async (req, res) => {});
