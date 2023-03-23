const getWeaponValue = () => {
  const weaponValue = Math.ceil(Math.random() * 42);
  return weaponValue;
};

module.exports = { getWeaponValue };
