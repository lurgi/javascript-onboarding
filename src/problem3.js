function problem3(number) {
  if (typeof number !== "number") return;

  const reg = /[369]/g;

  let count = 0;
  for (let order = 1; order <= number; order++) {
    const strs = order.toString();
    const match = strs.match(reg);
    if (match) count += match.length;
  }

  return count;
}

module.exports = problem3;
