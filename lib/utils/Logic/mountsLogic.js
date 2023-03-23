const getMountValue = () => {
  const mountValue = Math.ceil(Math.random() * 8);
  return mountValue;
};

module.exports = { getMountValue };
