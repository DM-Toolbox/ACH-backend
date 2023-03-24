const {
  MagicA,
  MagicB,
  MagicC,
  MagicD,
  MagicE,
  MagicF,
  MagicG,
  MagicH,
  MagicI,
} = require('../models/MagicTables');
const {
  getDieValueA,
  getDieValueB,
  getDieValueC,
  getDieValueD,
  getDieValueE,
  getDieValueF,
  getDieValueG,
  getDieValueH,
  getDieValueI,
} = require('../utils/Logic/magicTableLogic');
const {
  tableHitProbabilityRoll,
  tableLootRoll,
  woodChestProbabilityFactors,
} = require('../utils/reward-utils');

// const BASE_URL = process.env.API_URL;
const availableTables = [
  'MagicA',
  'MagicB',
  'MagicC',
  'MagicD',
  'MagicE',
  'MagicF',
  'MagicG',
  'MagicH',
  'MagicI',
  //   'MagicM',
];
const getTableLoot = async (table, lootRollValue) => {
  let lootIdValue;
  let reward;
  switch (table) {
    case 'MagicA': {
      lootIdValue = getDieValueA(lootRollValue);
      reward = await MagicA.getMagicAValue(lootIdValue);
      console.log('Table A reward: ', reward);
      break;
    }
    case 'MagicB': {
      lootIdValue = getDieValueB(lootRollValue);
      reward = await MagicB.getMagicBValue(lootIdValue);
      break;
    }
    case 'MagicC': {
      lootIdValue = getDieValueC(lootRollValue);
      reward = await MagicC.getMagicCValue(lootIdValue);
      break;
    }
    case 'MagicD': {
      lootIdValue = getDieValueD(lootRollValue);
      reward = await MagicD.getMagicDValue(lootIdValue);
      break;
    }
    case 'MagicE': {
      lootIdValue = getDieValueE(lootRollValue);
      reward = await MagicE.getMagicEValue(lootIdValue);
      break;
    }
    case 'MagicF': {
      lootIdValue = getDieValueF(lootRollValue);
      reward = await MagicF.getMagicFValue(lootIdValue);
      break;
    }
    case 'MagicG': {
      lootIdValue = getDieValueG(lootRollValue);
      reward = await MagicG.getMagicGValue(lootIdValue);
      break;
    }
    case 'MagicH': {
      lootIdValue = getDieValueH(lootRollValue);
      reward = await MagicH.getMagicHValue(lootIdValue);
      break;
    }
    case 'MagicI': {
      lootIdValue = getDieValueI(lootRollValue);
      reward = await MagicI.getMagicIValue(lootIdValue);
      break;
    }
  }
  return reward;
};
module.exports = class ChestRewardsService {
  static async getRewardsFromWoodChest() {
    const totalLoot = [];
    let currentTableIndex = 0;
    let reward;

    for (let i = 0; i < availableTables.length; i++) {
      const probabilityRolled = tableHitProbabilityRoll(); // Roll probability to receive reward (out of 1000)
      const currentTable = availableTables[currentTableIndex];
      const tableRewardProbability = woodChestProbabilityFactors[currentTable];
      const lootRollValue = tableLootRoll();

      if (probabilityRolled <= tableRewardProbability * 1000) {
        reward = await getTableLoot(currentTable, lootRollValue);
        totalLoot.push(reward.item);
      }
      //   console.log(`
      // DEBUG INFO:
      //     currentTableIndex: ${currentTableIndex}
      //     currentTable: ${currentTable}
      //     tableRewardProbability: ${tableRewardProbability}
      //     lootRollValue: ${lootRollValue}
      //     probabilityRolled: ${probabilityRolled}
      //     Max probability allowed: ${tableRewardProbability * 1000}
      //     reward: ${reward}
      // `);
      i++;
      currentTableIndex += 1;
    }
    return totalLoot;
  }
  static async getTableBLoot() {}
  static async getTableCLoot() {}
  static async getTableDLoot() {}
  static async getTableELoot() {}
  static async getTableFLoot() {}
  static async getTableGLoot() {}
  static async getTableHLoot() {}
  static async getTableILoot() {}
};
