function rollDiceMagic() {
  const magic = Math.ceil(Math.random() * 100);
  return magic;
}

function getDieValueA(magic) {
  let die_valueA;
  if (magic >= 1 && magic <= 50) {
    die_valueA = 1;
  } else if (magic >= 51 && magic <= 60) {
    die_valueA = 2;
  } else if (magic >= 61 && magic <= 70) {
    die_valueA = 3;
  } else if (magic >= 71 && magic <= 90) {
    die_valueA = 4;
  } else if (magic >= 91 && magic <= 94) {
    die_valueA = 5;
  } else if (magic >= 95 && magic <= 98) {
    die_valueA = 6;
  } else if (magic === 99) {
    die_valueA = 7;
  } else {
    die_valueA = 8;
  }
  return die_valueA;
}

function getDieValueB(magic) {
  let die_valueB;
  if (magic >= 1 && magic <= 15) {
    die_valueB = 1;
  } else if (magic >= 16 && magic <= 22) {
    die_valueB = 2;
  } else if (magic >= 23 && magic <= 29) {
    die_valueB = 3;
  } else if (magic >= 30 && magic <= 34) {
    die_valueB = 4;
  } else if (magic >= 35 && magic <= 39) {
    die_valueB = 5;
  } else if (magic >= 40 && magic <= 44) {
    die_valueB = 6;
  } else if (magic >= 45 && magic <= 49) {
    die_valueB = 7;
  } else if (magic >= 50 && magic <= 54) {
    die_valueB = 8;
  } else if (magic >= 55 && magic <= 59) {
    die_valueB = 9;
  } else if (magic >= 60 && magic <= 64) {
    die_valueB = 10;
  } else if (magic >= 65 && magic <= 67) {
    die_valueB = 11;
  } else if (magic >= 68 && magic <= 70) {
    die_valueB = 12;
  } else if (magic >= 71 && magic <= 73) {
    die_valueB = 13;
  } else if (magic === 74 || magic === 75) {
    die_valueB = 14;
  } else if (magic === 76 || magic === 77) {
    die_valueB = 15;
  } else if (magic === 78 || magic === 79) {
    die_valueB = 16;
  } else if (magic === 80 || magic === 81) {
    die_valueB = 17;
  } else if (magic === 82 || magic === 83) {
    die_valueB = 18;
  } else if (magic >= 84 && magic <= 100) {
    die_valueB = magic - 65;
  }
  return die_valueB;
}

function getDieValueC(magic) {
  let die_valueC;
  if (magic >= 1 && magic <= 15) {
    die_valueC = 1;
  } else if (magic >= 16 && magic <= 22) {
    die_valueC = 2;
  } else if (magic >= 23 && magic <= 27) {
    die_valueC = 3;
  } else if (magic >= 28 && magic <= 32) {
    die_valueC = 4;
  } else if (magic >= 33 && magic <= 37) {
    die_valueC = 5;
  } else if (magic >= 38 && magic <= 42) {
    die_valueC = 6;
  } else if (magic >= 43 && magic <= 47) {
    die_valueC = 7;
  } else if (magic >= 48 && magic <= 52) {
    die_valueC = 8;
  } else if (magic >= 53 && magic <= 57) {
    die_valueC = 9;
  } else if (magic >= 58 && magic <= 62) {
    die_valueC = 10;
  } else if (magic >= 63 && magic <= 67) {
    die_valueC = 11;
  } else if (magic >= 68 && magic <= 72) {
    die_valueC = 12;
  } else if (magic >= 73 && magic <= 75) {
    die_valueC = 13;
  } else if (magic >= 76 && magic <= 78) {
    die_valueC = 14;
  } else if (magic >= 79 && magic <= 81) {
    die_valueC = 15;
  } else if (magic >= 82 && magic <= 84) {
    die_valueC = 16;
  } else if (magic >= 85 && magic <= 87) {
    die_valueC = 17;
  } else if (magic === 88 || magic === 89) {
    die_valueC = 18;
  } else if (magic === 90 || magic === 91) {
    die_valueC = 19;
  } else if (magic >= 92 && magic <= 100) {
    die_valueC = magic - 70;
  }
  return die_valueC;
}

function getDieValueD(magic) {
  let die_valueD;
  if (magic >= 1 && magic <= 20) {
    die_valueD = 1;
  } else if (magic >= 21 && magic <= 30) {
    die_valueD = 2;
  } else if (magic >= 31 && magic <= 40) {
    die_valueD = 3;
  } else if (magic >= 41 && magic <= 50) {
    die_valueD = 4;
  } else if (magic >= 51 && magic <= 57) {
    die_valueD = 5;
  } else if (magic >= 58 && magic <= 62) {
    die_valueD = 6;
  } else if (magic >= 63 && magic <= 67) {
    die_valueD = 7;
  } else if (magic >= 68 && magic <= 72) {
    die_valueD = 8;
  } else if (magic >= 73 && magic <= 77) {
    die_valueD = 9;
  } else if (magic >= 78 && magic <= 82) {
    die_valueD = 10;
  } else if (magic >= 83 && magic <= 87) {
    die_valueD = 11;
  } else if (magic >= 88 && magic <= 92) {
    die_valueD = 12;
  } else if (magic >= 93 && magic <= 95) {
    die_valueD = 13;
  } else if (magic >= 96 && magic <= 98) {
    die_valueD = 14;
  } else if (magic === 99) {
    die_valueD = 15;
  } else if (magic === 100) {
    die_valueD = 16;
  }
  return die_valueD;
}

function getDieValueE(magic) {
  let die_valueE;
  if (magic >= 1 && magic <= 30) {
    die_valueE = 1;
  } else if (magic >= 31 && magic <= 55) {
    die_valueE = 2;
  } else if (magic >= 56 && magic <= 70) {
    die_valueE = 3;
  } else if (magic >= 71 && magic <= 85) {
    die_valueE = 4;
  } else if (magic >= 86 && magic <= 93) {
    die_valueE = 5;
  } else if (magic >= 94 && magic <= 98) {
    die_valueE = 6;
  } else if (magic === 99 || magic === 100) {
    die_valueE;
  }
  return die_valueE;
}

function getDieValueF(magic) {
  let die_valueF;
  if (magic >= 1 && magic <= 15) {
    die_valueF = 1;
  } else if (magic >= 16 && magic <= 18) {
    die_valueF = 2;
  } else if (magic >= 19 && magic <= 21) {
    die_valueF = 3;
  } else if (magic === 22 || magic === 23) {
    die_valueF = 4;
  } else if (magic === 24 || magic === 25) {
    die_valueF = 5;
  } else if (magic === 26 || magic === 27) {
    die_valueF = 6;
  } else if (magic === 28 || magic === 29) {
    die_valueF = 7;
  } else if (magic === 30 || magic === 31) {
    die_valueF = 8;
  } else if (magic === 32 || magic === 33) {
    die_valueF = 9;
  } else if (magic === 34 || magic === 35) {
    die_valueF = 10;
  } else if (magic === 36 || magic === 37) {
    die_valueF = 11;
  } else if (magic === 38 || magic === 39) {
    die_valueF = 12;
  } else if (magic === 40 || magic === 41) {
    die_valueF = 13;
  } else if (magic === 42 || magic === 43) {
    die_valueF = 14;
  } else if (magic === 44 || magic === 45) {
    die_valueF = 15;
  } else if (magic === 46 || magic === 47) {
    die_valueF = 16;
  } else if (magic === 48 || magic === 49) {
    die_valueF = 17;
  } else if (magic === 50 || magic === 51) {
    die_valueF = 18;
  } else if (magic === 52 || magic === 53) {
    die_valueF = 19;
  } else if (magic === 54 || magic === 55) {
    die_valueF = 20;
  } else if (magic === 56 || magic === 57) {
    die_valueF = 21;
  } else if (magic === 58 || magic === 59) {
    die_valueF = 22;
  } else if (magic === 60 || magic === 61) {
    die_valueF = 23;
  } else if (magic === 62 || magic === 63) {
    die_valueF = 24;
  } else if (magic === 64 || magic === 65) {
    die_valueF = 25;
  } else if (magic >= 66 && magic <= 100) {
    die_valueF = magic - 40;
  }
  return die_valueF;
}

function getDieValueG(magic) {
  let die_valueG;
  if (magic >= 1 && magic <= 11) {
    die_valueG = 1;
  } else if (magic >= 12 && magic <= 14) {
    die_valueG = 2;
  } else if (magic >= 15 && magic <= 100) {
    die_valueG = magic - 12;
  }
  return die_valueG;
}

function getDieValueH(magic) {
  let die_valueH;
  if (magic >= 1 && magic <= 10) {
    die_valueH = 1;
  } else if (magic === 11 || magic === 12) {
    die_valueH = 2;
  } else if (magic === 13 || magic === 14) {
    die_valueH = 3;
  } else if (magic === 14 || magic === 16) {
    die_valueH = 4;
  } else if (magic === 17 || magic === 18) {
    die_valueH = 5;
  } else if (magic === 19 || magic === 20) {
    die_valueH = 6;
  } else if (magic === 21 || magic === 22) {
    die_valueH = 7;
  } else if (magic === 23 || magic === 24) {
    die_valueH = 8;
  } else if (magic === 25 || magic === 26) {
    die_valueH = 9;
  } else if (magic === 27 || magic === 28) {
    die_valueH = 10;
  } else if (magic === 29 || magic === 30) {
    die_valueH = 11;
  } else if (magic === 31 || magic === 32) {
    die_valueH = 12;
  } else if (magic === 33 || magic === 34) {
    die_valueH = 13;
  } else if (magic === 35 || magic === 36) {
    die_valueH = 14;
  } else if (magic === 37 || magic === 38) {
    die_valueH = 15;
  } else if (magic === 39 || magic === 40) {
    die_valueH = 16;
  } else if (magic === 41 || magic === 42) {
    die_valueH = 17;
  } else if (magic === 43 || magic === 44) {
    die_valueH = 18;
  } else if (magic === 45 || magic === 46) {
    die_valueH = 19;
  } else if (magic === 47 || magic === 48) {
    die_valueH = 20;
  } else if (magic === 49 || magic === 50) {
    die_valueH = 21;
  } else if (magic === 51 || magic === 52) {
    die_valueH = 22;
  } else if (magic === 53 || magic === 54) {
    die_valueH = 23;
  } else if (magic >= 55 && magic <= 100) {
    die_valueH = magic - 31;
  }
  return die_valueH;
}

function getDieValueI(magic) {
  let die_valueI;
  if (magic >= 1 && magic <= 5) {
    die_valueI = 1;
  } else if (magic >= 6 && magic <= 10) {
    die_valueI = 2;
  } else if (magic >= 11 && magic <= 15) {
    die_valueI = 3;
  } else if (magic >= 16 && magic <= 20) {
    die_valueI = 4;
  } else if (magic >= 21 && magic <= 23) {
    die_valueI = 5;
  } else if (magic >= 24 && magic <= 26) {
    die_valueI = 6;
  } else if (magic >= 27 && magic <= 29) {
    die_valueI = 7;
  } else if (magic >= 30 && magic <= 32) {
    die_valueI = 8;
  } else if (magic >= 33 && magic <= 35) {
    die_valueI = 9;
  } else if (magic >= 36 && magic <= 38) {
    die_valueI = 10;
  } else if (magic >= 39 && magic <= 41) {
    die_valueI = 11;
  } else if (magic === 42 || magic === 43) {
    die_valueI = 12;
  } else if (magic === 44 || magic === 45) {
    die_valueI = 13;
  } else if (magic === 46 || magic === 47) {
    die_valueI = 14;
  } else if (magic === 48 || magic === 49) {
    die_valueI = 15;
  } else if (magic === 50 || magic === 51) {
    die_valueI = 16;
  } else if (magic === 52 || magic === 53) {
    die_valueI = 17;
  } else if (magic === 54 || magic === 55) {
    die_valueI = 18;
  } else if (magic === 56 || magic === 57) {
    die_valueI = 19;
  } else if (magic === 58 || magic === 59) {
    die_valueI = 20;
  } else if (magic === 60 || magic === 61) {
    die_valueI = 21;
  } else if (magic === 62 || magic === 63) {
    die_valueI = 22;
  } else if (magic === 64 || magic === 65) {
    die_valueI = 23;
  } else if (magic === 66 || magic === 67) {
    die_valueI = 24;
  } else if (magic === 68 || magic === 69) {
    die_valueI = 25;
  } else if (magic === 70 || magic === 71) {
    die_valueI = 26;
  } else if (magic === 72 || magic === 73) {
    die_valueI = 27;
  } else if (magic === 74 || magic === 75) {
    die_valueI = 28;
  } else if (magic >= 76 && magic <= 100) {
    die_valueI = magic - 47;
  }
  return die_valueI;
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
