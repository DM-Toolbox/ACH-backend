function getDragonValue() {
  const dragonValue = Math.ceil(Math.random() * 10);
  return dragonValue;
}

module.exports = { getDragonValue };
