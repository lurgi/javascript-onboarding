function compare(num) {
  const nums = num.toString().split("").map(Number);
  return Math.max(
    nums.reduce((acc, cur) => acc + cur, 0),
    nums.reduce((acc, cur) => acc * cur, 1)
  );
}

function problem1(pobi, crong) {
  const [p_left, p_right] = pobi.map(Number);
  const [c_left, c_right] = crong.map(Number);
  if (p_left + 1 !== p_right || c_left + 1 !== c_right) return -1;

  const p_num = Math.max(compare(p_left), compare(p_right));
  const c_num = Math.max(compare(c_left), compare(c_right));
  return p_num > c_num ? 1 : c_num > p_num ? 2 : 0;
}

module.exports = problem1;
