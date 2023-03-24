const { getDieValueA } = require('../Logic/magicTableLogic');
const {
  tableHitProbabilityRoll,
  tableLootRoll,
  woodChestProbabilityFactors,
} = require('../reward-utils');

const BASE_URL = process.env.API_URL;
const availableTables = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

// User clicks Wood chest to redeem reward -> Client makes API call to BE to begin loot rolls.
// Roll through each of the Magic tables A-M.
// Each table uses the respective percent chance from woodLootRollChance table to determine loot
//

const getRewardsFromWoodChest = () => {
  const totalLoot = [];
  let currentTableIndex = 0;
  const currentTable = availableTables[currentTableIndex];
  const tableRewardMaxValue = woodChestProbabilityFactors[currentTable];
  const lootRollValue = tableLootRoll();
  let reward;

  for (let i = 0; i < availableTables.length; i++) {
    const probabilityRolled = tableHitProbabilityRoll(); // Roll probability to receive reward (out of 1000)
    if (probabilityRolled <= tableRewardMaxValue * 1000) {
      console.log(
        `Table Loot GRANTED: \n    Probability rolled ${probabilityRolled}\n    Roll max allowed: ${
          tableRewardMaxValue * 1000
        }`
      );
      reward = useLootTable(currentTable, lootRollValue);
      totalLoot.push(reward);
    }
    i++;
    currentTableIndex++;
  }

  //   let dieRoll = rollMagicTable();
  //   let currentTableIndex = 0;
  //   const lootChance = woodLootProbability[availableTables[currentTableIndex]];
  //   const totalLootGrab = [];
  //   console.log(
  //     `dieRollValue: ${dieRoll}\ncurrentTable: ${availableTables[currentTableIndex]}\nlootChance: ${lootChance}`
  //   );
  //   let reward;
};

const useLootTable = async (table, dieRollValue) => {
  const URL = `${BASE_URL}/magic${table}/${dieRollValue}`;
  const reward = await fetch(URL);
  //   const reward = res.json();
  return reward;
};

getRewardsFromWoodChest();
