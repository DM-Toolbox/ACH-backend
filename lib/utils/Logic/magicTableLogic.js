// const rollMagicTable = () => {
//   const value = Math.ceil(Math.random() * 100);
//   return value;
// };

const getDieValueA = (value) => {
  // const magic = rollDiceMagic();
  let dieValueA;
  if (value >= 1 && value <= 50) {
    dieValueA = 1;
  } else if (value >= 51 && value <= 60) {
    dieValueA = 2;
  } else if (value >= 61 && value <= 70) {
    dieValueA = 3;
  } else if (value >= 71 && value <= 90) {
    dieValueA = 4;
  } else if (value >= 91 && value <= 94) {
    dieValueA = 5;
  } else if (value >= 95 && value <= 98) {
    dieValueA = 6;
  } else if (value === 99) {
    dieValueA = 7;
  } else {
    dieValueA = 8;
  }
  return dieValueA;
};

const getDieValueB = (value) => {
  let dieValueB;
  if (value >= 1 && value <= 15) {
    dieValueB = 1;
  } else if (value >= 16 && value <= 22) {
    dieValueB = 2;
  } else if (value >= 23 && value <= 29) {
    dieValueB = 3;
  } else if (value >= 30 && value <= 34) {
    dieValueB = 4;
  } else if (value >= 35 && value <= 39) {
    dieValueB = 5;
  } else if (value >= 40 && value <= 44) {
    dieValueB = 6;
  } else if (value >= 45 && value <= 49) {
    dieValueB = 7;
  } else if (value >= 50 && value <= 54) {
    dieValueB = 8;
  } else if (value >= 55 && value <= 59) {
    dieValueB = 9;
  } else if (value >= 60 && value <= 64) {
    dieValueB = 10;
  } else if (value >= 65 && value <= 67) {
    dieValueB = 11;
  } else if (value >= 68 && value <= 70) {
    dieValueB = 12;
  } else if (value >= 71 && value <= 73) {
    dieValueB = 13;
  } else if (value === 74 || value === 75) {
    dieValueB = 14;
  } else if (value === 76 || value === 77) {
    dieValueB = 15;
  } else if (value === 78 || value === 79) {
    dieValueB = 16;
  } else if (value === 80 || value === 81) {
    dieValueB = 17;
  } else if (value === 82 || value === 83) {
    dieValueB = 18;
  } else if (value >= 84 && value <= 100) {
    dieValueB = value - 65;
  }
  return dieValueB;
};

const getDieValueC = (value) => {
  let dieValueC;
  if (value >= 1 && value <= 15) {
    dieValueC = 1;
  } else if (value >= 16 && value <= 22) {
    dieValueC = 2;
  } else if (value >= 23 && value <= 27) {
    dieValueC = 3;
  } else if (value >= 28 && value <= 32) {
    dieValueC = 4;
  } else if (value >= 33 && value <= 37) {
    dieValueC = 5;
  } else if (value >= 38 && value <= 42) {
    dieValueC = 6;
  } else if (value >= 43 && value <= 47) {
    dieValueC = 7;
  } else if (value >= 48 && value <= 52) {
    dieValueC = 8;
  } else if (value >= 53 && value <= 57) {
    dieValueC = 9;
  } else if (value >= 58 && value <= 62) {
    dieValueC = 10;
  } else if (value >= 63 && value <= 67) {
    dieValueC = 11;
  } else if (value >= 68 && value <= 72) {
    dieValueC = 12;
  } else if (value >= 73 && value <= 75) {
    dieValueC = 13;
  } else if (value >= 76 && value <= 78) {
    dieValueC = 14;
  } else if (value >= 79 && value <= 81) {
    dieValueC = 15;
  } else if (value >= 82 && value <= 84) {
    dieValueC = 16;
  } else if (value >= 85 && value <= 87) {
    dieValueC = 17;
  } else if (value === 88 || value === 89) {
    dieValueC = 18;
  } else if (value === 90 || value === 91) {
    dieValueC = 19;
  } else if (value >= 92 && value <= 100) {
    dieValueC = value - 70;
  }
  return dieValueC;
};

const getDieValueD = (value) => {
  let dieValueD;
  if (value >= 1 && value <= 20) {
    dieValueD = 1;
  } else if (value >= 21 && value <= 30) {
    dieValueD = 2;
  } else if (value >= 31 && value <= 40) {
    dieValueD = 3;
  } else if (value >= 41 && value <= 50) {
    dieValueD = 4;
  } else if (value >= 51 && value <= 57) {
    dieValueD = 5;
  } else if (value >= 58 && value <= 62) {
    dieValueD = 6;
  } else if (value >= 63 && value <= 67) {
    dieValueD = 7;
  } else if (value >= 68 && value <= 72) {
    dieValueD = 8;
  } else if (value >= 73 && value <= 77) {
    dieValueD = 9;
  } else if (value >= 78 && value <= 82) {
    dieValueD = 10;
  } else if (value >= 83 && value <= 87) {
    dieValueD = 11;
  } else if (value >= 88 && value <= 92) {
    dieValueD = 12;
  } else if (value >= 93 && value <= 95) {
    dieValueD = 13;
  } else if (value >= 96 && value <= 98) {
    dieValueD = 14;
  } else if (value === 99) {
    dieValueD = 15;
  } else if (value === 100) {
    dieValueD = 16;
  }
  return dieValueD;
};

const getDieValueE = (value) => {
  let dieValueE;
  if (value >= 1 && value <= 30) {
    dieValueE = 1;
  } else if (value >= 31 && value <= 55) {
    dieValueE = 2;
  } else if (value >= 56 && value <= 70) {
    dieValueE = 3;
  } else if (value >= 71 && value <= 85) {
    dieValueE = 4;
  } else if (value >= 86 && value <= 93) {
    dieValueE = 5;
  } else if (value >= 94 && value <= 98) {
    dieValueE = 6;
  } else if (value === 99 || value === 100) {
    dieValueE;
  }
  return dieValueE;
};

const getDieValueF = (value) => {
  let dieValueF;
  if (value >= 1 && value <= 15) {
    dieValueF = 1;
  } else if (value >= 16 && value <= 18) {
    dieValueF = 2;
  } else if (value >= 19 && value <= 21) {
    dieValueF = 3;
  } else if (value === 22 || value === 23) {
    dieValueF = 4;
  } else if (value === 24 || value === 25) {
    dieValueF = 5;
  } else if (value === 26 || value === 27) {
    dieValueF = 6;
  } else if (value === 28 || value === 29) {
    dieValueF = 7;
  } else if (value === 30 || value === 31) {
    dieValueF = 8;
  } else if (value === 32 || value === 33) {
    dieValueF = 9;
  } else if (value === 34 || value === 35) {
    dieValueF = 10;
  } else if (value === 36 || value === 37) {
    dieValueF = 11;
  } else if (value === 38 || value === 39) {
    dieValueF = 12;
  } else if (value === 40 || value === 41) {
    dieValueF = 13;
  } else if (value === 42 || value === 43) {
    dieValueF = 14;
  } else if (value === 44 || value === 45) {
    dieValueF = 15;
  } else if (value === 46 || value === 47) {
    dieValueF = 16;
  } else if (value === 48 || value === 49) {
    dieValueF = 17;
  } else if (value === 50 || value === 51) {
    dieValueF = 18;
  } else if (value === 52 || value === 53) {
    dieValueF = 19;
  } else if (value === 54 || value === 55) {
    dieValueF = 20;
  } else if (value === 56 || value === 57) {
    dieValueF = 21;
  } else if (value === 58 || value === 59) {
    dieValueF = 22;
  } else if (value === 60 || value === 61) {
    dieValueF = 23;
  } else if (value === 62 || value === 63) {
    dieValueF = 24;
  } else if (value === 64 || value === 65) {
    dieValueF = 25;
  } else if (value >= 66 && value <= 100) {
    dieValueF = value - 40;
  }
  return dieValueF;
};

const getDieValueG = (value) => {
  let dieValueG;
  if (value >= 1 && value <= 11) {
    dieValueG = 1;
  } else if (value >= 12 && value <= 14) {
    dieValueG = 2;
  } else if (value >= 15 && value <= 100) {
    dieValueG = value - 12;
  }
  return dieValueG;
};

const getDieValueH = (value) => {
  let dieValueH;
  if (value >= 1 && value <= 10) {
    dieValueH = 1;
  } else if (value === 11 || value === 12) {
    dieValueH = 2;
  } else if (value === 13 || value === 14) {
    dieValueH = 3;
  } else if (value === 14 || value === 16) {
    dieValueH = 4;
  } else if (value === 17 || value === 18) {
    dieValueH = 5;
  } else if (value === 19 || value === 20) {
    dieValueH = 6;
  } else if (value === 21 || value === 22) {
    dieValueH = 7;
  } else if (value === 23 || value === 24) {
    dieValueH = 8;
  } else if (value === 25 || value === 26) {
    dieValueH = 9;
  } else if (value === 27 || value === 28) {
    dieValueH = 10;
  } else if (value === 29 || value === 30) {
    dieValueH = 11;
  } else if (value === 31 || value === 32) {
    dieValueH = 12;
  } else if (value === 33 || value === 34) {
    dieValueH = 13;
  } else if (value === 35 || value === 36) {
    dieValueH = 14;
  } else if (value === 37 || value === 38) {
    dieValueH = 15;
  } else if (value === 39 || value === 40) {
    dieValueH = 16;
  } else if (value === 41 || value === 42) {
    dieValueH = 17;
  } else if (value === 43 || value === 44) {
    dieValueH = 18;
  } else if (value === 45 || value === 46) {
    dieValueH = 19;
  } else if (value === 47 || value === 48) {
    dieValueH = 20;
  } else if (value === 49 || value === 50) {
    dieValueH = 21;
  } else if (value === 51 || value === 52) {
    dieValueH = 22;
  } else if (value === 53 || value === 54) {
    dieValueH = 23;
  } else if (value >= 55 && value <= 100) {
    dieValueH = value - 31;
  }
  return dieValueH;
};

const getDieValueI = (value) => {
  let dieValueI;
  if (value >= 1 && value <= 5) {
    dieValueI = 1;
  } else if (value >= 6 && value <= 10) {
    dieValueI = 2;
  } else if (value >= 11 && value <= 15) {
    dieValueI = 3;
  } else if (value >= 16 && value <= 20) {
    dieValueI = 4;
  } else if (value >= 21 && value <= 23) {
    dieValueI = 5;
  } else if (value >= 24 && value <= 26) {
    dieValueI = 6;
  } else if (value >= 27 && value <= 29) {
    dieValueI = 7;
  } else if (value >= 30 && value <= 32) {
    dieValueI = 8;
  } else if (value >= 33 && value <= 35) {
    dieValueI = 9;
  } else if (value >= 36 && value <= 38) {
    dieValueI = 10;
  } else if (value >= 39 && value <= 41) {
    dieValueI = 11;
  } else if (value === 42 || value === 43) {
    dieValueI = 12;
  } else if (value === 44 || value === 45) {
    dieValueI = 13;
  } else if (value === 46 || value === 47) {
    dieValueI = 14;
  } else if (value === 48 || value === 49) {
    dieValueI = 15;
  } else if (value === 50 || value === 51) {
    dieValueI = 16;
  } else if (value === 52 || value === 53) {
    dieValueI = 17;
  } else if (value === 54 || value === 55) {
    dieValueI = 18;
  } else if (value === 56 || value === 57) {
    dieValueI = 19;
  } else if (value === 58 || value === 59) {
    dieValueI = 20;
  } else if (value === 60 || value === 61) {
    dieValueI = 21;
  } else if (value === 62 || value === 63) {
    dieValueI = 22;
  } else if (value === 64 || value === 65) {
    dieValueI = 23;
  } else if (value === 66 || value === 67) {
    dieValueI = 24;
  } else if (value === 68 || value === 69) {
    dieValueI = 25;
  } else if (value === 70 || value === 71) {
    dieValueI = 26;
  } else if (value === 72 || value === 73) {
    dieValueI = 27;
  } else if (value === 74 || value === 75) {
    dieValueI = 28;
  } else if (value >= 76 && value <= 100) {
    dieValueI = value - 47;
  }
  return dieValueI;
};

module.exports = {
  // rollMagicTable,
  getDieValueA,
  getDieValueB,
  getDieValueC,
  getDieValueD,
  getDieValueE,
  getDieValueF,
  getDieValueG,
  getDieValueH,
  getDieValueI,
};
