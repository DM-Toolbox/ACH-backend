function rollDiceResistance() {
  const resistance = Math.ceil(Math.random() * 10);
  return resistance;
}

function getResistanceValue(resistance) {
  let resistanceValue;
  if (resistance === 1) {
    resistanceValue = 1;
  } else if (resistance === 2) {
    resistanceValue = 2;
  } else if (resistance === 3) {
    resistanceValue = 3;
  } else if (resistance === 4) {
    resistanceValue = 4;
  } else if (resistance === 5) {
    resistanceValue = 5;
  } else if (resistance === 6) {
    resistanceValue = 6;
  } else if (resistance === 7) {
    resistanceValue = 7;
  } else if (resistance === 8) {
    resistanceValue = 8;
  } else if (resistance === 9) {
    resistanceValue = 9;
  } else if (resistance === 10) {
    resistanceValue = 10;
  }
  return resistanceValue;
}

module.exports = { rollDiceResistance, getResistanceValue };
