function problem5(money) {
  if (typeof money !== "number") return;

  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  // units.forEach((unit, index) => {
  //   answer[index] += Math.floor(money / unit);
  //   money %= unit;
  // });
  // return answer;

  return units.reduce((arr, unit, index) => {
    arr[index] += Math.floor(money / unit);
    money %= unit;
    return arr;
  }, Array(9).fill(0));
}

module.exports = problem5;
