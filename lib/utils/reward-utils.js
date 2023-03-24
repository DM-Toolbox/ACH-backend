const tableHitProbabilityRoll = () => {
  return Math.ceil(Math.random() * 1000);
};

const tableLootRoll = () => {
  return Math.ceil(Math.random() * 100);
};

const woodChestProbabilityFactors = {
  MagicA: 1,
  MagicB: 0.2,
  MagicC: 0.05,
  MagicD: 0.025,
  MagicE: 0.01,
  MagicF: 0.005,
  MagicG: 0.0025,
  MagicH: 0.001,
  MagicI: 0.0005,
  // MagicM: 0.002,
};

// const woodChest = (value) => {
//   const magic = rollDiceMagic();
//   const rewardA = getDieValueA(value);
//   rollPercent();
// };

module.exports = {
  tableHitProbabilityRoll,
  tableLootRoll,
  woodChestProbabilityFactors,
};
