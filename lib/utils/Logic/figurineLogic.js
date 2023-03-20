function rollDiceFigurine() {
  const figurine = Math.ceil(Math.random() * 9);
  return figurine;
}

function getFigurineValue(figurine) {
  let figurineValue;
  if (figurine === 1) {
    figurineValue = 1;
  } else if (figurine === 2) {
    figurineValue = 2;
  } else if (figurine === 3) {
    figurineValue = 3;
  } else if (figurine === 4) {
    figurineValue = 4;
  } else if (figurine === 5) {
    figurineValue = 5;
  } else if (figurine === 6) {
    figurineValue = 6;
  } else if (figurine === 7) {
    figurineValue = 7;
  } else if (figurine === 8) {
    figurineValue = 8;
  } else if (figurine === 9) {
    figurineValue = 9;
  }
  return figurineValue;
}

module.exports = { rollDiceFigurine, getFigurineValue };
