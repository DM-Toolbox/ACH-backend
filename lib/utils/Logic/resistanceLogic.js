const getResistanceValue = () => {
  const resistanceValue = Math.ceil(Math.random() * 10);
  return resistanceValue;
};

module.exports = { getResistanceValue };
