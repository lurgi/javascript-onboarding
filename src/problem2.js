function problem2(cryptogram) {
  let stack = cryptogram.split("");

  while (true) {
    const before_arr = [...stack];
    stack = [];
    for (const str of before_arr) {
      if (stack[stack.length - 1] === str) stack.pop();
      else stack.push(str);
    }
    if (before_arr.join("") === stack.join("")) break;
  }

  return stack.join("");
}

module.exports = problem2;
