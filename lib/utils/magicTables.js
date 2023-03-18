function rollDice() {
  const diceRoll = Math.ceil(Math.random() * 100);
  return diceRoll;
}

function rollDice10() {
  const diceRoll10 = Math.ceil(Math.random() * 10);
  return diceRoll10;
}

function getDieValueA(diceRoll) {
  let die_valueA;
  if (diceRoll >= 1 && diceRoll <= 50) {
    die_valueA = 1;
  } else if (diceRoll >= 51 && diceRoll <= 60) {
    die_valueA = 2;
  } else if (diceRoll >= 61 && diceRoll <= 70) {
    die_valueA = 3;
  } else if (diceRoll >= 71 && diceRoll <= 90) {
    die_valueA = 4;
  } else if (diceRoll >= 91 && diceRoll <= 94) {
    die_valueA = 5;
  } else if (diceRoll >= 95 && diceRoll <= 98) {
    die_valueA = 6;
  } else if (diceRoll === 99) {
    die_valueA = 7;
  } else if (diceRoll === 100) {
    die_valueA = 8;
  }
  return die_valueA;
}

function getDieValueB(diceRoll) {
  let die_valueB;
  if (diceRoll >= 1 && diceRoll <= 15) {
    die_valueB = 1;
  } else if (diceRoll >= 16 && diceRoll <= 22) {
    die_valueB = 2;
  } else if (diceRoll >= 23 && diceRoll <= 29) {
    die_valueB = 3;
  } else if (diceRoll >= 30 && diceRoll <= 34) {
    die_valueB = 4;
  } else if (diceRoll >= 35 && diceRoll <= 39) {
    die_valueB = 5;
  } else if (diceRoll >= 40 && diceRoll <= 44) {
    die_valueB = 6;
  } else if (diceRoll >= 45 && diceRoll <= 49) {
    die_valueB = 7;
  } else if (diceRoll >= 50 && diceRoll <= 54) {
    die_valueB = 8;
  } else if (diceRoll >= 55 && diceRoll <= 59) {
    die_valueB = 9;
  } else if (diceRoll >= 60 && diceRoll <= 64) {
    die_valueB = 10;
  } else if (diceRoll >= 65 && diceRoll <= 67) {
    die_valueB = 11;
  } else if (diceRoll >= 68 && diceRoll <= 70) {
    die_valueB = 12;
  } else if (diceRoll >= 71 && diceRoll <= 73) {
    die_valueB = 13;
  } else if (diceRoll === 74 || diceRoll === 75) {
    die_valueB = 14;
  } else if (diceRoll === 76 || diceRoll === 77) {
    die_valueB = 15;
  } else if (diceRoll === 78 || diceRoll === 79) {
    die_valueB = 16;
  } else if (diceRoll === 80 || diceRoll === 81) {
    die_valueB = 17;
  } else if (diceRoll === 82 || diceRoll === 83) {
    die_valueB = 18;
  } else if (diceRoll === 84) {
    die_valueB = 19;
  } else if (diceRoll === 85) {
    die_valueB = 20;
  } else if (diceRoll === 86) {
    die_valueB = 21;
  } else if (diceRoll === 87) {
    die_valueB = 22;
  } else if (diceRoll === 88) {
    die_valueB = 23;
  } else if (diceRoll === 89) {
    die_valueB = 24;
  } else if (diceRoll === 90) {
    die_valueB = 25;
  } else if (diceRoll === 91) {
    die_valueB = 26;
  } else if (diceRoll === 92) {
    die_valueB = 27;
  } else if (diceRoll === 93) {
    die_valueB = 27;
  } else if (diceRoll === 94) {
    die_valueB = 28;
  } else if (diceRoll === 95) {
    die_valueB = 29;
  } else if (diceRoll === 96) {
    die_valueB = 30;
  } else if (diceRoll === 97) {
    die_valueB = 31;
  } else if (diceRoll === 98) {
    die_valueB = 32;
  } else if (diceRoll === 99) {
    die_valueB = 33;
  } else if (diceRoll === 100) {
    die_valueB = 34;
  }
  return die_valueB;
}

function getDieValueC(diceRoll) {
  let die_valueC;
  if (diceRoll >= 1 && diceRoll <= 15) {
    die_valueC = 1;
  } else if (diceRoll >= 16 && diceRoll <= 22) {
    die_valueC = 2;
  } else if (diceRoll >= 23 && diceRoll <= 27) {
    die_valueC = 3;
  } else if (diceRoll >= 28 && diceRoll <= 32) {
    die_valueC = 4;
  } else if (diceRoll >= 33 && diceRoll <= 37) {
    die_valueC = 5;
  } else if (diceRoll >= 38 && diceRoll <= 42) {
    die_valueC = 6;
  } else if (diceRoll >= 43 && diceRoll <= 47) {
    die_valueC = 7;
  } else if (diceRoll >= 48 && diceRoll <= 52) {
    die_valueC = 8;
  } else if (diceRoll >= 53 && diceRoll <= 57) {
    die_valueC = 9;
  } else if (diceRoll >= 58 && diceRoll <= 62) {
    die_valueC = 10;
  } else if (diceRoll >= 63 && diceRoll <= 67) {
    die_valueC = 11;
  } else if (diceRoll >= 68 && diceRoll <= 72) {
    die_valueC = 12;
  } else if (diceRoll >= 73 && diceRoll <= 75) {
    die_valueC = 13;
  } else if (diceRoll >= 76 && diceRoll <= 78) {
    die_valueC = 14;
  } else if (diceRoll >= 79 && diceRoll <= 81) {
    die_valueC = 15;
  } else if (diceRoll >= 82 && diceRoll <= 84) {
    die_valueC = 16;
  } else if (diceRoll >= 85 && diceRoll <= 87) {
    die_valueC = 17;
  } else if (diceRoll === 88 || diceRoll === 89) {
    die_valueC = 18;
  } else if (diceRoll === 90 || diceRoll === 91) {
    die_valueC = 19;
  } else if (diceRoll === 92) {
    die_valueC = 20;
  } else if (diceRoll === 93) {
    die_valueC = 21;
  } else if (diceRoll === 94) {
    die_valueC = 22;
  } else if (diceRoll === 95) {
    die_valueC = 23;
  } else if (diceRoll === 96) {
    die_valueC = 24;
  } else if (diceRoll === 97) {
    die_valueC = 25;
  } else if (diceRoll === 98) {
    die_valueC = 26;
  } else if (diceRoll === 99) {
    die_valueC = 27;
  } else if (diceRoll === 100) {
    die_valueC = 28;
  }
  return die_valueC;
}

function getDieValueD(diceRoll) {
  let die_valueD;
  if (diceRoll >= 1 && diceRoll <= 20) {
    die_valueD = 1;
  } else if (diceRoll >= 21 && diceRoll <= 30) {
    die_valueD = 2;
  } else if (diceRoll >= 31 && diceRoll <= 40) {
    die_valueD = 3;
  } else if (diceRoll >= 41 && diceRoll <= 50) {
    die_valueD = 4;
  } else if (diceRoll >= 51 && diceRoll <= 57) {
    die_valueD = 5;
  } else if (diceRoll >= 58 && diceRoll <= 62) {
    die_valueD = 6;
  } else if (diceRoll >= 63 && diceRoll <= 67) {
    die_valueD = 7;
  } else if (diceRoll >= 68 && diceRoll <= 72) {
    die_valueD = 8;
  } else if (diceRoll >= 73 && diceRoll <= 77) {
    die_valueD = 9;
  } else if (diceRoll >= 78 && diceRoll <= 82) {
    die_valueD = 10;
  } else if (diceRoll >= 83 && diceRoll <= 87) {
    die_valueD = 11;
  } else if (diceRoll >= 88 && diceRoll <= 92) {
    die_valueD = 12;
  } else if (diceRoll >= 93 && diceRoll <= 95) {
    die_valueD = 13;
  } else if (diceRoll >= 96 && diceRoll <= 98) {
    die_valueD = 14;
  } else if (diceRoll === 99) {
    die_valueD = 15;
  } else if (diceRoll === 100) {
    die_valueD = 16;
  }
  return die_valueD;
}

function getDieValueE(diceRoll) {
  let die_valueE;
  if (diceRoll >= 1 && diceRoll <= 30) {
    die_valueE = 1;
  } else if (diceRoll >= 31 && diceRoll <= 55) {
    die_valueE = 2;
  } else if (diceRoll >= 56 && diceRoll <= 70) {
    die_valueE = 3;
  } else if (diceRoll >= 71 && diceRoll <= 85) {
    die_valueE = 4;
  } else if (diceRoll >= 86 && diceRoll <= 93) {
    die_valueE = 5;
  } else if (diceRoll >= 94 && diceRoll <= 98) {
    die_valueE = 6;
  } else if (diceRoll === 99 || diceRoll === 100) {
    die_valueE = 7;
  }
  return die_valueE;
}

function getDieValueF(diceRoll) {
  let die_valueF;
  if (diceRoll >= 1 && diceRoll <= 15) {
    die_valueF = 1;
  } else if (diceRoll >= 16 && diceRoll <= 18) {
    die_valueF = 2;
  } else if (diceRoll >= 19 && diceRoll <= 21) {
    die_valueF = 3;
  } else if (diceRoll === 22 || diceRoll === 23) {
    die_valueF = 4;
  } else if (diceRoll === 24 || diceRoll === 25) {
    die_valueF = 5;
  } else if (diceRoll === 26 || diceRoll === 27) {
    die_valueF = 6;
  } else if (diceRoll === 28 || diceRoll === 29) {
    die_valueF = 7;
  } else if (diceRoll === 30 || diceRoll === 31) {
    die_valueF = 8;
  } else if (diceRoll === 32 || diceRoll === 33) {
    die_valueF = 9;
  } else if (diceRoll === 34 || diceRoll === 35) {
    die_valueF = 10;
  } else if (diceRoll === 36 || diceRoll === 37) {
    die_valueF = 11;
  } else if (diceRoll === 38 || diceRoll === 39) {
    die_valueF = 12;
  } else if (diceRoll === 40 || diceRoll === 41) {
    die_valueF = 13;
  } else if (diceRoll === 42 || diceRoll === 43) {
    die_valueF = 14;
  } else if (diceRoll === 44 || diceRoll === 45) {
    die_valueF = 15;
  } else if (diceRoll === 46 || diceRoll === 47) {
    die_valueF = 16;
  } else if (diceRoll === 48 || diceRoll === 49) {
    die_valueF = 17;
  } else if (diceRoll === 50 || diceRoll === 51) {
    die_valueF = 18;
  } else if (diceRoll === 52 || diceRoll === 53) {
    die_valueF = 19;
  } else if (diceRoll === 54 || diceRoll === 55) {
    die_valueF = 20;
  } else if (diceRoll === 56 || diceRoll === 57) {
    die_valueF = 21;
  } else if (diceRoll === 58 || diceRoll === 59) {
    die_valueF = 22;
  } else if (diceRoll === 60 || diceRoll === 61) {
    die_valueF = 23;
  } else if (diceRoll === 62 || diceRoll === 63) {
    die_valueF = 24;
  } else if (diceRoll === 64 || diceRoll === 65) {
    die_valueF = 25;
  } else if (diceRoll === 66) {
    die_valueF = 26;
  } else if (diceRoll === 67) {
    die_valueF = 27;
  } else if (diceRoll === 68) {
    die_valueF = 28;
  } else if (diceRoll === 69) {
    die_valueF = 29;
  } else if (diceRoll === 70) {
    die_valueF = 30;
  } else if (diceRoll === 71) {
    die_valueF = 31;
  } else if (diceRoll === 72) {
    die_valueF = 32;
  } else if (diceRoll === 73) {
    die_valueF = 33;
  } else if (diceRoll === 74) {
    die_valueF = 34;
  } else if (diceRoll === 75) {
    die_valueF = 35;
  } else if (diceRoll === 76) {
    die_valueF = 36;
  } else if (diceRoll === 77) {
    die_valueF = 37;
  } else if (diceRoll === 78) {
    die_valueF = 38;
  } else if (diceRoll === 79) {
    die_valueF = 39;
  } else if (diceRoll === 80) {
    die_valueF = 40;
  } else if (diceRoll === 81) {
    die_valueF = 41;
  } else if (diceRoll === 82) {
    die_valueF = 42;
  } else if (diceRoll === 83) {
    die_valueF = 43;
  } else if (diceRoll === 84) {
    die_valueF = 44;
  } else if (diceRoll === 85) {
    die_valueF = 45;
  } else if (diceRoll === 86) {
    die_valueF = 46;
  } else if (diceRoll === 87) {
    die_valueF = 47;
  } else if (diceRoll === 88) {
    die_valueF = 48;
  } else if (diceRoll === 89) {
    die_valueF = 49;
  } else if (diceRoll === 90) {
    die_valueF = 50;
  } else if (diceRoll === 91) {
    die_valueF = 51;
  } else if (diceRoll === 92) {
    die_valueF = 52;
  } else if (diceRoll === 93) {
    die_valueF = 53;
  } else if (diceRoll === 94) {
    die_valueF = 54;
  } else if (diceRoll === 95) {
    die_valueF = 55;
  } else if (diceRoll === 96) {
    die_valueF = 56;
  } else if (diceRoll === 97) {
    die_valueF = 57;
  } else if (diceRoll === 98) {
    die_valueF = 58;
  } else if (diceRoll === 99) {
    die_valueF = 59;
  } else if (diceRoll === 100) {
    die_valueF = 60;
  }
  return die_valueF;
}

function getDieValueG(diceRoll) {
  let die_valueG;
  if (diceRoll >= 1 && diceRoll <= 11) {
    die_valueG = 1;
  } else if (diceRoll >= 12 && diceRoll <= 14) {
    die_valueG = 2;
  } else if (diceRoll === 15) {
    die_valueG = 3;
  } else if (diceRoll === 16) {
    die_valueG = 4;
  } else if (diceRoll === 17) {
    die_valueG = 5;
  } else if (diceRoll === 18) {
    die_valueG = 6;
  } else if (diceRoll === 19) {
    die_valueG = 7;
  } else if (diceRoll === 20) {
    die_valueG = 8;
  } else if (diceRoll === 21) {
    die_valueG = 9;
  } else if (diceRoll === 22) {
    die_valueG = 10;
  } else if (diceRoll === 23) {
    die_valueG = 11;
  } else if (diceRoll === 24) {
    die_valueG = 12;
  } else if (diceRoll === 25) {
    die_valueG = 13;
  } else if (diceRoll === 26) {
    die_valueG = 14;
  } else if (diceRoll === 27) {
    die_valueG = 15;
  } else if (diceRoll === 28) {
    die_valueG = 16;
  } else if (diceRoll === 29) {
    die_valueG = 17;
  } else if (diceRoll === 30) {
    die_valueG = 18;
  } else if (diceRoll === 31) {
    die_valueG = 19;
  } else if (diceRoll === 32) {
    die_valueG = 20;
  } else if (diceRoll === 33) {
    die_valueG = 21;
  } else if (diceRoll === 34) {
    die_valueG = 22;
  } else if (diceRoll === 35) {
    die_valueG = 23;
  } else if (diceRoll === 36) {
    die_valueG = 24;
  } else if (diceRoll === 37) {
    die_valueG = 25;
  } else if (diceRoll === 38) {
    die_valueG = 26;
  } else if (diceRoll === 39) {
    die_valueG = 27;
  } else if (diceRoll === 40) {
    die_valueG = 28;
  } else if (diceRoll === 41) {
    die_valueG = 29;
  } else if (diceRoll === 42) {
    die_valueG = 30;
  } else if (diceRoll === 43) {
    die_valueG = 31;
  } else if (diceRoll === 44) {
    die_valueG = 32;
  } else if (diceRoll === 45) {
    die_valueG = 33;
  } else if (diceRoll === 46) {
    die_valueG = 34;
  } else if (diceRoll === 47) {
    die_valueG = 35;
  } else if (diceRoll === 48) {
    die_valueG = 36;
  } else if (diceRoll === 49) {
    die_valueG = 37;
  } else if (diceRoll === 50) {
    die_valueG = 38;
  } else if (diceRoll === 51) {
    die_valueG = 39;
  } else if (diceRoll === 52) {
    die_valueG = 40;
  } else if (diceRoll === 53) {
    die_valueG = 41;
  } else if (diceRoll === 54) {
    die_valueG = 42;
  } else if (diceRoll === 55) {
    die_valueG = 43;
  } else if (diceRoll === 56) {
    die_valueG = 44;
  } else if (diceRoll === 57) {
    die_valueG = 45;
  } else if (diceRoll === 58) {
    die_valueG = 46;
  } else if (diceRoll === 59) {
    die_valueG = 47;
  } else if (diceRoll === 60) {
    die_valueG = 48;
  } else if (diceRoll === 61) {
    die_valueG = 49;
  } else if (diceRoll === 62) {
    die_valueG = 50;
  } else if (diceRoll === 63) {
    die_valueG = 51;
  } else if (diceRoll === 64) {
    die_valueG = 52;
  } else if (diceRoll === 65) {
    die_valueG = 53;
  } else if (diceRoll === 66) {
    die_valueG = 54;
  } else if (diceRoll === 67) {
    die_valueG = 55;
  } else if (diceRoll === 68) {
    die_valueG = 56;
  } else if (diceRoll === 69) {
    die_valueG = 57;
  } else if (diceRoll === 70) {
    die_valueG = 58;
  } else if (diceRoll === 71) {
    die_valueG = 59;
  } else if (diceRoll === 72) {
    die_valueG = 60;
  } else if (diceRoll === 73) {
    die_valueG = 61;
  } else if (diceRoll === 74) {
    die_valueG = 62;
  } else if (diceRoll === 75) {
    die_valueG = 63;
  } else if (diceRoll === 76) {
    die_valueG = 64;
  } else if (diceRoll === 77) {
    die_valueG = 65;
  } else if (diceRoll === 78) {
    die_valueG = 66;
  } else if (diceRoll === 79) {
    die_valueG = 67;
  } else if (diceRoll === 80) {
    die_valueG = 68;
  } else if (diceRoll === 81) {
    die_valueG = 69;
  } else if (diceRoll === 82) {
    die_valueG = 70;
  } else if (diceRoll === 83) {
    die_valueG = 71;
  } else if (diceRoll === 84) {
    die_valueG = 72;
  } else if (diceRoll === 85) {
    die_valueG = 73;
  } else if (diceRoll === 86) {
    die_valueG = 74;
  } else if (diceRoll === 87) {
    die_valueG = 75;
  } else if (diceRoll === 88) {
    die_valueG = 76;
  } else if (diceRoll === 89) {
    die_valueG = 77;
  } else if (diceRoll === 90) {
    die_valueG = 78;
  } else if (diceRoll === 91) {
    die_valueG = 79;
  } else if (diceRoll === 92) {
    die_valueG = 80;
  } else if (diceRoll === 93) {
    die_valueG = 81;
  } else if (diceRoll === 94) {
    die_valueG = 82;
  } else if (diceRoll === 95) {
    die_valueG = 83;
  } else if (diceRoll === 96) {
    die_valueG = 84;
  } else if (diceRoll === 97) {
    die_valueG = 85;
  } else if (diceRoll === 98) {
    die_valueG = 86;
  } else if (diceRoll === 99) {
    die_valueG = 87;
  } else if (diceRoll === 100) {
    die_valueG = 88;
  }
  return die_valueG;
}

function getDieValueH(diceRoll) {
  let die_valueH;
  if (diceRoll >= 1 && diceRoll <= 10) {
    die_valueH = 1;
  } else if (diceRoll === 11 || diceRoll === 12) {
    die_valueH = 2;
  } else if (diceRoll === 13 || diceRoll === 14) {
    die_valueH = 3;
  } else if (diceRoll === 14 || diceRoll === 16) {
    die_valueH = 4;
  } else if (diceRoll === 17 || diceRoll === 18) {
    die_valueH = 5;
  } else if (diceRoll === 19 || diceRoll === 20) {
    die_valueH = 6;
  } else if (diceRoll === 21 || diceRoll === 22) {
    die_valueH = 7;
  } else if (diceRoll === 23 || diceRoll === 24) {
    die_valueH = 8;
  } else if (diceRoll === 25 || diceRoll === 26) {
    die_valueH = 9;
  } else if (diceRoll === 27 || diceRoll === 28) {
    die_valueH = 10;
  } else if (diceRoll === 29 || diceRoll === 30) {
    die_valueH = 11;
  } else if (diceRoll === 31 || diceRoll === 32) {
    die_valueH = 12;
  } else if (diceRoll === 33 || diceRoll === 34) {
    die_valueH = 13;
  } else if (diceRoll === 35 || diceRoll === 36) {
    die_valueH = 14;
  } else if (diceRoll === 37 || diceRoll === 38) {
    die_valueH = 15;
  } else if (diceRoll === 39 || diceRoll === 40) {
    die_valueH = 16;
  } else if (diceRoll === 41 || diceRoll === 42) {
    die_valueH = 17;
  } else if (diceRoll === 43 || diceRoll === 44) {
    die_valueH = 18;
  } else if (diceRoll === 45 || diceRoll === 46) {
    die_valueH = 19;
  } else if (diceRoll === 47 || diceRoll === 48) {
    die_valueH = 20;
  } else if (diceRoll === 49 || diceRoll === 50) {
    die_valueH = 21;
  } else if (diceRoll === 51 || diceRoll === 52) {
    die_valueH = 22;
  } else if (diceRoll === 53 || diceRoll === 54) {
    die_valueH = 23;
  } else if (diceRoll === 55) {
    die_valueH = 24;
  } else if (diceRoll === 56) {
    die_valueH = 25;
  } else if (diceRoll === 57) {
    die_valueH = 26;
  } else if (diceRoll === 58) {
    die_valueH = 27;
  } else if (diceRoll === 59) {
    die_valueH = 28;
  } else if (diceRoll === 60) {
    die_valueH = 29;
  } else if (diceRoll === 61) {
    die_valueH = 30;
  } else if (diceRoll === 62) {
    die_valueH = 31;
  } else if (diceRoll === 63) {
    die_valueH = 32;
  } else if (diceRoll === 64) {
    die_valueH = 33;
  } else if (diceRoll === 65) {
    die_valueH = 34;
  } else if (diceRoll === 66) {
    die_valueH = 35;
  } else if (diceRoll === 67) {
    die_valueH = 36;
  } else if (diceRoll === 68) {
    die_valueH = 37;
  } else if (diceRoll === 69) {
    die_valueH = 38;
  } else if (diceRoll === 70) {
    die_valueH = 39;
  } else if (diceRoll === 71) {
    die_valueH = 40;
  } else if (diceRoll === 72) {
    die_valueH = 41;
  } else if (diceRoll === 73) {
    die_valueH = 42;
  } else if (diceRoll === 74) {
    die_valueH = 43;
  } else if (diceRoll === 75) {
    die_valueH = 44;
  } else if (diceRoll === 76) {
    die_valueH = 45;
  } else if (diceRoll === 77) {
    die_valueH = 46;
  } else if (diceRoll === 78) {
    die_valueH = 47;
  } else if (diceRoll === 79) {
    die_valueH = 48;
  } else if (diceRoll === 80) {
    die_valueH = 49;
  } else if (diceRoll === 81) {
    die_valueH = 50;
  } else if (diceRoll === 82) {
    die_valueH = 51;
  } else if (diceRoll === 83) {
    die_valueH = 52;
  } else if (diceRoll === 84) {
    die_valueH = 53;
  } else if (diceRoll === 85) {
    die_valueH = 54;
  } else if (diceRoll === 86) {
    die_valueH = 55;
  } else if (diceRoll === 87) {
    die_valueH = 56;
  } else if (diceRoll === 88) {
    die_valueH = 57;
  } else if (diceRoll === 89) {
    die_valueH = 58;
  } else if (diceRoll === 90) {
    die_valueH = 59;
  } else if (diceRoll === 91) {
    die_valueH = 60;
  } else if (diceRoll === 92) {
    die_valueH = 61;
  } else if (diceRoll === 93) {
    die_valueH = 62;
  } else if (diceRoll === 94) {
    die_valueH = 63;
  } else if (diceRoll === 95) {
    die_valueH = 64;
  } else if (diceRoll === 96) {
    die_valueH = 65;
  } else if (diceRoll === 97) {
    die_valueH = 66;
  } else if (diceRoll === 98) {
    die_valueH = 67;
  } else if (diceRoll === 99) {
    die_valueH = 68;
  } else if (diceRoll === 100) {
    die_valueH = 69;
  }
  return die_valueH;
}

function getDieValueI(diceRoll) {
  let die_valueI;
  if (diceRoll >= 1 && diceRoll <= 5) {
    die_valueI = 1;
  } else if (diceRoll >= 6 && diceRoll <= 10) {
    die_valueI = 2;
  } else if (diceRoll >= 11 && diceRoll <= 15) {
    die_valueI = 3;
  } else if (diceRoll >= 16 && diceRoll <= 20) {
    die_valueI = 4;
  } else if (diceRoll >= 21 && diceRoll <= 23) {
    die_valueI = 5;
  } else if (diceRoll >= 24 && diceRoll <= 26) {
    die_valueI = 6;
  } else if (diceRoll >= 27 && diceRoll <= 29) {
    die_valueI = 7;
  } else if (diceRoll >= 30 && diceRoll <= 32) {
    die_valueI = 8;
  } else if (diceRoll >= 33 && diceRoll <= 35) {
    die_valueI = 9;
  } else if (diceRoll >= 36 && diceRoll <= 38) {
    die_valueI = 10;
  } else if (diceRoll >= 39 && diceRoll <= 41) {
    die_valueI = 11;
  } else if (diceRoll === 42 || diceRoll === 43) {
    die_valueI = 12;
  } else if (diceRoll === 44 || diceRoll === 45) {
    die_valueI = 13;
  } else if (diceRoll === 46 || diceRoll === 47) {
    die_valueI = 14;
  } else if (diceRoll === 48 || diceRoll === 49) {
    die_valueI = 15;
  } else if (diceRoll === 50 || diceRoll === 51) {
    die_valueI = 16;
  } else if (diceRoll === 52 || diceRoll === 53) {
    die_valueI = 17;
  } else if (diceRoll === 54 || diceRoll === 55) {
    die_valueI = 18;
  } else if (diceRoll === 56 || diceRoll === 57) {
    die_valueI = 19;
  } else if (diceRoll === 58 || diceRoll === 59) {
    die_valueI = 20;
  } else if (diceRoll === 60 || diceRoll === 61) {
    die_valueI = 21;
  } else if (diceRoll === 62 || diceRoll === 63) {
    die_valueI = 22;
  } else if (diceRoll === 64 || diceRoll === 65) {
    die_valueI = 23;
  } else if (diceRoll === 66 || diceRoll === 67) {
    die_valueI = 24;
  } else if (diceRoll === 68 || diceRoll === 69) {
    die_valueI = 25;
  } else if (diceRoll === 70 || diceRoll === 71) {
    die_valueI = 26;
  } else if (diceRoll === 72 || diceRoll === 73) {
    die_valueI = 27;
  } else if (diceRoll === 74 || diceRoll === 75) {
    die_valueI = 28;
  } else if (diceRoll === 76) {
    die_valueI = 29;
  } else if (diceRoll === 77) {
    die_valueI = 30;
  } else if (diceRoll === 78) {
    die_valueI = 31;
  } else if (diceRoll === 79) {
    die_valueI = 32;
  } else if (diceRoll === 80) {
    die_valueI = 33;
  } else if (diceRoll === 81) {
    die_valueI = 34;
  } else if (diceRoll === 82) {
    die_valueI = 35;
  } else if (diceRoll === 83) {
    die_valueI = 36;
  } else if (diceRoll === 84) {
    die_valueI = 37;
  } else if (diceRoll === 85) {
    die_valueI = 38;
  } else if (diceRoll === 86) {
    die_valueI = 39;
  } else if (diceRoll === 87) {
    die_valueI = 40;
  } else if (diceRoll === 88) {
    die_valueI = 41;
  } else if (diceRoll === 89) {
    die_valueI = 42;
  } else if (diceRoll === 90) {
    die_valueI = 43;
  } else if (diceRoll === 91) {
    die_valueI = 44;
  } else if (diceRoll === 92) {
    die_valueI = 45;
  } else if (diceRoll === 93) {
    die_valueI = 46;
  } else if (diceRoll === 94) {
    die_valueI = 47;
  } else if (diceRoll === 95) {
    die_valueI = 48;
  } else if (diceRoll === 96) {
    die_valueI = 49;
  } else if (diceRoll === 97) {
    die_valueI = 50;
  } else if (diceRoll === 98) {
    die_valueI = 51;
  } else if (diceRoll === 99) {
    die_valueI = 52;
  } else if (diceRoll === 100) {
    die_valueI = 53;
  }
  return die_valueI;
}

function getResistanceValue(rollDice10) {
  let resistanceValue;
  if (rollDice10 === 1) {
    resistanceValue = 1;
  } else if (rollDice10 === 2) {
    resistanceValue = 2;
  } else if (rollDice10 === 3) {
    resistanceValue = 3;
  } else if (rollDice10 === 4) {
    resistanceValue = 4;
  } else if (rollDice10 === 5) {
    resistanceValue = 5;
  } else if (rollDice10 === 6) {
    resistanceValue = 6;
  } else if (rollDice10 === 7) {
    resistanceValue = 7;
  } else if (rollDice10 === 8) {
    resistanceValue = 8;
  } else if (rollDice10 === 9) {
    resistanceValue = 9;
  } else if (rollDice10 === 10) {
    resistanceValue = 10;
  }
  return resistanceValue;
}

module.exports = {
  rollDice,
  rollDice10,
  getDieValueA,
  getDieValueB,
  getDieValueC,
  getDieValueD,
  getDieValueE,
  getDieValueF,
  getDieValueG,
  getDieValueH,
  getDieValueI,
  getResistanceValue,
};
