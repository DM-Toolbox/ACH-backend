function rollDiceMounts() {
  const mount = Math.ceil(Math.random() * 8);
  return mount;
}

function getMountValue(mount) {
  let mount_value;
  if (mount === 1) {
    mount_value = 1;
  } else if (mount === 2) {
    mount_value = 2;
  } else if (mount === 3) {
    mount_value = 3;
  } else if (mount === 4) {
    mount_value = 4;
  } else if (mount === 5) {
    mount_value = 5;
  } else if (mount === 6) {
    mount_value = 6;
  } else if (mount === 7) {
    mount_value = 7;
  } else if (mount === 8) {
    mount_value = 8;
  }
  return mount_value;
}

module.exports = { rollDiceMounts, getMountValue };
