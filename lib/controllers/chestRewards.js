const { Router } = require('express');
const { getRewardsFromWoodChest } = require('../services/MagicTableService');

module.exports = Router().get('/wood', async (req, res) => {
  const woodChestRewards = getRewardsFromWoodChest();
  res.json(woodChestRewards);
});
// .get('/iron', async (req, res) => {});
