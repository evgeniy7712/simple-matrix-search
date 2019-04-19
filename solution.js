
  let checker = [1, 1, 1, 1];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (text[0] === data[i][j]) {
        checker = [1, 1, 1, 1]
        for (let k = 1; k < text.length; k++) {
          if ((i + k) < data.length) {
            if (text[k] === data[i + k][j]) checker[0]++;
          }
          if (checker[0] === text.length) return true;
          if ((j - k) >= 0) {
            if (text[k] === data[i][j - k]) checker[1]++;
          }
          if (checker[1] === text.length) return true;
          if ((i - k) >= 0) {
            if (text[k] === data[i - k][j]) checker[2]++;
          }
          if (checker[2] === text.length) return true;
          if ((j + k) < data[i].length) {
            if (text[k] === data[i][j + k]) checker[3]++;
          }
          if (checker[3] === text.length) return true;
        }
      }
    }
  }
  return false;
}
