function rollDiceMagic() {
  const magic = Math.ceil(Math.random() * 100);
  return magic;
}

function getDieValueA(magic) {
  let dieValueA;
  if (magic >= 1 && magic <= 50) {
    dieValueA = 1;
  } else if (magic >= 51 && magic <= 60) {
    dieValueA = 2;
  } else if (magic >= 61 && magic <= 70) {
    dieValueA = 3;
  } else if (magic >= 71 && magic <= 90) {
    dieValueA = 4;
  } else if (magic >= 91 && magic <= 94) {
    dieValueA = 5;
  } else if (magic >= 95 && magic <= 98) {
    dieValueA = 6;
  } else if (magic === 99) {
    dieValueA = 7;
  } else {
    dieValueA = 8;
  }
  return dieValueA;
}

function getDieValueB(magic) {
  let dieValueB;
  if (magic >= 1 && magic <= 15) {
    dieValueB = 1;
  } else if (magic >= 16 && magic <= 22) {
    dieValueB = 2;
  } else if (magic >= 23 && magic <= 29) {
    dieValueB = 3;
  } else if (magic >= 30 && magic <= 34) {
    dieValueB = 4;
  } else if (magic >= 35 && magic <= 39) {
    dieValueB = 5;
  } else if (magic >= 40 && magic <= 44) {
    dieValueB = 6;
  } else if (magic >= 45 && magic <= 49) {
    dieValueB = 7;
  } else if (magic >= 50 && magic <= 54) {
    dieValueB = 8;
  } else if (magic >= 55 && magic <= 59) {
    dieValueB = 9;
  } else if (magic >= 60 && magic <= 64) {
    dieValueB = 10;
  } else if (magic >= 65 && magic <= 67) {
    dieValueB = 11;
  } else if (magic >= 68 && magic <= 70) {
    dieValueB = 12;
  } else if (magic >= 71 && magic <= 73) {
    dieValueB = 13;
  } else if (magic === 74 || magic === 75) {
    dieValueB = 14;
  } else if (magic === 76 || magic === 77) {
    dieValueB = 15;
  } else if (magic === 78 || magic === 79) {
    dieValueB = 16;
  } else if (magic === 80 || magic === 81) {
    dieValueB = 17;
  } else if (magic === 82 || magic === 83) {
    dieValueB = 18;
  } else if (magic >= 84 && magic <= 100) {
    dieValueB = magic - 65;
  }
  return dieValueB;
}

function getDieValueC(magic) {
  let dieValueC;
  if (magic >= 1 && magic <= 15) {
    dieValueC = 1;
  } else if (magic >= 16 && magic <= 22) {
    dieValueC = 2;
  } else if (magic >= 23 && magic <= 27) {
    dieValueC = 3;
  } else if (magic >= 28 && magic <= 32) {
    dieValueC = 4;
  } else if (magic >= 33 && magic <= 37) {
    dieValueC = 5;
  } else if (magic >= 38 && magic <= 42) {
    dieValueC = 6;
  } else if (magic >= 43 && magic <= 47) {
    dieValueC = 7;
  } else if (magic >= 48 && magic <= 52) {
    dieValueC = 8;
  } else if (magic >= 53 && magic <= 57) {
    dieValueC = 9;
  } else if (magic >= 58 && magic <= 62) {
    dieValueC = 10;
  } else if (magic >= 63 && magic <= 67) {
    dieValueC = 11;
  } else if (magic >= 68 && magic <= 72) {
    dieValueC = 12;
  } else if (magic >= 73 && magic <= 75) {
    dieValueC = 13;
  } else if (magic >= 76 && magic <= 78) {
    dieValueC = 14;
  } else if (magic >= 79 && magic <= 81) {
    dieValueC = 15;
  } else if (magic >= 82 && magic <= 84) {
    dieValueC = 16;
  } else if (magic >= 85 && magic <= 87) {
    dieValueC = 17;
  } else if (magic === 88 || magic === 89) {
    dieValueC = 18;
  } else if (magic === 90 || magic === 91) {
    dieValueC = 19;
  } else if (magic >= 92 && magic <= 100) {
    dieValueC = magic - 70;
  }
  return dieValueC;
}

function getDieValueD(magic) {
  let dieValueD;
  if (magic >= 1 && magic <= 20) {
    dieValueD = 1;
  } else if (magic >= 21 && magic <= 30) {
    dieValueD = 2;
  } else if (magic >= 31 && magic <= 40) {
    dieValueD = 3;
  } else if (magic >= 41 && magic <= 50) {
    dieValueD = 4;
  } else if (magic >= 51 && magic <= 57) {
    dieValueD = 5;
  } else if (magic >= 58 && magic <= 62) {
    dieValueD = 6;
  } else if (magic >= 63 && magic <= 67) {
    dieValueD = 7;
  } else if (magic >= 68 && magic <= 72) {
    dieValueD = 8;
  } else if (magic >= 73 && magic <= 77) {
    dieValueD = 9;
  } else if (magic >= 78 && magic <= 82) {
    dieValueD = 10;
  } else if (magic >= 83 && magic <= 87) {
    dieValueD = 11;
  } else if (magic >= 88 && magic <= 92) {
    dieValueD = 12;
  } else if (magic >= 93 && magic <= 95) {
    dieValueD = 13;
  } else if (magic >= 96 && magic <= 98) {
    dieValueD = 14;
  } else if (magic === 99) {
    dieValueD = 15;
  } else if (magic === 100) {
    dieValueD = 16;
  }
  return dieValueD;
}

function getDieValueE(magic) {
  let dieValueE;
  if (magic >= 1 && magic <= 30) {
    dieValueE = 1;
  } else if (magic >= 31 && magic <= 55) {
    dieValueE = 2;
  } else if (magic >= 56 && magic <= 70) {
    dieValueE = 3;
  } else if (magic >= 71 && magic <= 85) {
    dieValueE = 4;
  } else if (magic >= 86 && magic <= 93) {
    dieValueE = 5;
  } else if (magic >= 94 && magic <= 98) {
    dieValueE = 6;
  } else if (magic === 99 || magic === 100) {
    dieValueE;
  }
  return dieValueE;
}

function getDieValueF(magic) {
  let dieValueF;
  if (magic >= 1 && magic <= 15) {
    dieValueF = 1;
  } else if (magic >= 16 && magic <= 18) {
    dieValueF = 2;
  } else if (magic >= 19 && magic <= 21) {
    dieValueF = 3;
  } else if (magic === 22 || magic === 23) {
    dieValueF = 4;
  } else if (magic === 24 || magic === 25) {
    dieValueF = 5;
  } else if (magic === 26 || magic === 27) {
    dieValueF = 6;
  } else if (magic === 28 || magic === 29) {
    dieValueF = 7;
  } else if (magic === 30 || magic === 31) {
    dieValueF = 8;
  } else if (magic === 32 || magic === 33) {
    dieValueF = 9;
  } else if (magic === 34 || magic === 35) {
    dieValueF = 10;
  } else if (magic === 36 || magic === 37) {
    dieValueF = 11;
  } else if (magic === 38 || magic === 39) {
    dieValueF = 12;
  } else if (magic === 40 || magic === 41) {
    dieValueF = 13;
  } else if (magic === 42 || magic === 43) {
    dieValueF = 14;
  } else if (magic === 44 || magic === 45) {
    dieValueF = 15;
  } else if (magic === 46 || magic === 47) {
    dieValueF = 16;
  } else if (magic === 48 || magic === 49) {
    dieValueF = 17;
  } else if (magic === 50 || magic === 51) {
    dieValueF = 18;
  } else if (magic === 52 || magic === 53) {
    dieValueF = 19;
  } else if (magic === 54 || magic === 55) {
    dieValueF = 20;
  } else if (magic === 56 || magic === 57) {
    dieValueF = 21;
  } else if (magic === 58 || magic === 59) {
    dieValueF = 22;
  } else if (magic === 60 || magic === 61) {
    dieValueF = 23;
  } else if (magic === 62 || magic === 63) {
    dieValueF = 24;
  } else if (magic === 64 || magic === 65) {
    dieValueF = 25;
  } else if (magic >= 66 && magic <= 100) {
    dieValueF = magic - 40;
  }
  return dieValueF;
}

function getDieValueG(magic) {
  let dieValueG;
  if (magic >= 1 && magic <= 11) {
    dieValueG = 1;
  } else if (magic >= 12 && magic <= 14) {
    dieValueG = 2;
  } else if (magic >= 15 && magic <= 100) {
    dieValueG = magic - 12;
  }
  return dieValueG;
}

function getDieValueH(magic) {
  let dieValueH;
  if (magic >= 1 && magic <= 10) {
    dieValueH = 1;
  } else if (magic === 11 || magic === 12) {
    dieValueH = 2;
  } else if (magic === 13 || magic === 14) {
    dieValueH = 3;
  } else if (magic === 14 || magic === 16) {
    dieValueH = 4;
  } else if (magic === 17 || magic === 18) {
    dieValueH = 5;
  } else if (magic === 19 || magic === 20) {
    dieValueH = 6;
  } else if (magic === 21 || magic === 22) {
    dieValueH = 7;
  } else if (magic === 23 || magic === 24) {
    dieValueH = 8;
  } else if (magic === 25 || magic === 26) {
    dieValueH = 9;
  } else if (magic === 27 || magic === 28) {
    dieValueH = 10;
  } else if (magic === 29 || magic === 30) {
    dieValueH = 11;
  } else if (magic === 31 || magic === 32) {
    dieValueH = 12;
  } else if (magic === 33 || magic === 34) {
    dieValueH = 13;
  } else if (magic === 35 || magic === 36) {
    dieValueH = 14;
  } else if (magic === 37 || magic === 38) {
    dieValueH = 15;
  } else if (magic === 39 || magic === 40) {
    dieValueH = 16;
  } else if (magic === 41 || magic === 42) {
    dieValueH = 17;
  } else if (magic === 43 || magic === 44) {
    dieValueH = 18;
  } else if (magic === 45 || magic === 46) {
    dieValueH = 19;
  } else if (magic === 47 || magic === 48) {
    dieValueH = 20;
  } else if (magic === 49 || magic === 50) {
    dieValueH = 21;
  } else if (magic === 51 || magic === 52) {
    dieValueH = 22;
  } else if (magic === 53 || magic === 54) {
    dieValueH = 23;
  } else if (magic >= 55 && magic <= 100) {
    dieValueH = magic - 31;
  }
  return dieValueH;
}

function getDieValueI(magic) {
  let dieValueI;
  if (magic >= 1 && magic <= 5) {
    dieValueI = 1;
  } else if (magic >= 6 && magic <= 10) {
    dieValueI = 2;
  } else if (magic >= 11 && magic <= 15) {
    dieValueI = 3;
  } else if (magic >= 16 && magic <= 20) {
    dieValueI = 4;
  } else if (magic >= 21 && magic <= 23) {
    dieValueI = 5;
  } else if (magic >= 24 && magic <= 26) {
    dieValueI = 6;
  } else if (magic >= 27 && magic <= 29) {
    dieValueI = 7;
  } else if (magic >= 30 && magic <= 32) {
    dieValueI = 8;
  } else if (magic >= 33 && magic <= 35) {
    dieValueI = 9;
  } else if (magic >= 36 && magic <= 38) {
    dieValueI = 10;
  } else if (magic >= 39 && magic <= 41) {
    dieValueI = 11;
  } else if (magic === 42 || magic === 43) {
    dieValueI = 12;
  } else if (magic === 44 || magic === 45) {
    dieValueI = 13;
  } else if (magic === 46 || magic === 47) {
    dieValueI = 14;
  } else if (magic === 48 || magic === 49) {
    dieValueI = 15;
  } else if (magic === 50 || magic === 51) {
    dieValueI = 16;
  } else if (magic === 52 || magic === 53) {
    dieValueI = 17;
  } else if (magic === 54 || magic === 55) {
    dieValueI = 18;
  } else if (magic === 56 || magic === 57) {
    dieValueI = 19;
  } else if (magic === 58 || magic === 59) {
    dieValueI = 20;
  } else if (magic === 60 || magic === 61) {
    dieValueI = 21;
  } else if (magic === 62 || magic === 63) {
    dieValueI = 22;
  } else if (magic === 64 || magic === 65) {
    dieValueI = 23;
  } else if (magic === 66 || magic === 67) {
    dieValueI = 24;
  } else if (magic === 68 || magic === 69) {
    dieValueI = 25;
  } else if (magic === 70 || magic === 71) {
    dieValueI = 26;
  } else if (magic === 72 || magic === 73) {
    dieValueI = 27;
  } else if (magic === 74 || magic === 75) {
    dieValueI = 28;
  } else if (magic >= 76 && magic <= 100) {
    dieValueI = magic - 47;
  }
  return dieValueI;
}

module.exports = {
  rollDiceMagic,
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
