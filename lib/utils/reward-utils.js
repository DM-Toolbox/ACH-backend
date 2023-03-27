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

const silverChestProbabilityFactors = {
  MagicA: 0.6,
  MagicB: 0.4,
  MagicC: 0.2,
  MagicD: 1,
  MagicE: 0.1,
  MagicF: 0.05,
  MagicG: 0.025,
  MagicH: 0.01,
  MagicI: 0.005,
  // MagicM: 0.005
};

const goldChestProbabilityFactors = {
  MagicA: 0.8,
  MagicB: 0.6,
  MagicC: 0.4,
  MagicD: 1,
  MagicE: 0.2,
  MagicF: 0.1,
  MagicG: 0.05,
  MagicH: 0.025,
  MagicI: 0.01,
  // MagicM: 0.006
};

const electrumChestProbabilityFactors = {
  MagicA: 1,
  MagicB: 0.8,
  MagicC: 0.6,
  MagicD: 1,
  MagicE: 0.3,
  MagicF: 0.2,
  MagicG: 0.1,
  MagicH: 0.05,
  MagicI: 0.025,
  // MagicM: 0.007
};

const platinumChestProbabilityFactors = {
  MagicA: 1,
  MagicB: 1,
  MagicC: 0.8,
  MagicD: 1,
  MagicE: 0.4,
  MagicF: 0.3,
  MagicG: 0.2,
  MagicH: 0.1,
  MagicI: 0.05,
  // MagicM: 0.008
};

const mithralChestProbabilityFactors = {
  MagicA: 1,
  MagicB: 1,
  MagicC: 1,
  MagicD: 1,
  MagicE: 0.5,
  MagicF: 0.4,
  MagicG: 0.3,
  MagicH: 0.2,
  MagicI: 0.1,
  // MagicM: 0.009
};

const adamantineChestProbabilityFactors = {
  MagicA: 1,
  MagicB: 1,
  MagicC: 1,
  MagicD: 1,
  MagicE: 0.6,
  MagicF: 0.5,
  MagicG: 0.4,
  MagicH: 0.3,
  MagicI: 0.2,
  // MagicM: 0.01
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
  silverChestProbabilityFactors,
  goldChestProbabilityFactors,
  electrumChestProbabilityFactors,
  platinumChestProbabilityFactors,
  mithralChestProbabilityFactors,
  adamantineChestProbabilityFactors,
};
