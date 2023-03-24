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

const ironChestProbabilityFactors = {
  MagicA: 0.2,
  MagicB: 1,
  MagicC: 0.1,
  MagicD: 0.05,
  MagicE: 0.025,
  MagicF: 0.01,
  MagicG: 0.005,
  MagicH: 0.0025,
  MagicI: 0.001,
  // MagicM: 0.003,
};

const steelChestProbabilityFactors = {
  MagicA: 0.4,
  MagicB: 0.2,
  MagicC: 1,
  MagicD: 0.1,
  MagicE: 0.05,
  MagicF: 0.025,
  MagicG: 0.01,
  MagicH: 0.005,
  MagicI: 0.0025,
  // MagicM: 0.004,
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
  ironChestProbabilityFactors,
  steelChestProbabilityFactors,
};
