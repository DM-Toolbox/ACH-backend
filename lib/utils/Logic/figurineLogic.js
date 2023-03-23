const getFigurineValue = () => {
  const figurineValue = Math.ceil(Math.random() * 9);
  return figurineValue;
};

module.exports = { getFigurineValue };
