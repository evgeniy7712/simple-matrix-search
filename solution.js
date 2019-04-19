
  let arr = "мал", matr = ["альфа", "гамма", "омега"];
function findWord(arr, matr) {
  let checker = [1, 1, 1, 1];
  for (let i = 0; i < matr.length; i++) {
    for (let j = 0; j < matr[i].length; j++) {
      if (arr[0] === matr[i][j]) {
        checker = [1, 1, 1, 1]
        for (let k = 1; k < arr.length; k++) {
          if ((i + k) < matr.length) {
            if (arr[k] === matr[i + k][j]) checker[0]++;
          }
          if (checker[0] === arr.length) return true;
          if ((j - k) >= 0) {
            if (arr[k] === matr[i][j - k]) checker[1]++;
          }
          if (checker[1] === arr.length) return true;
          if ((i - k) >= 0) {
            if (arr[k] === matr[i - k][j]) checker[2]++;
          }
          if (checker[2] === arr.length) return true;
          if ((j + k) < matr[i].length) {
            if (arr[k] === matr[i][j + k]) checker[3]++;
          }
          if (checker[3] === arr.length) return true;
        }
      }
    }
  }
  return false;
}
console.log(findWord(arr, matr))
  return false;

