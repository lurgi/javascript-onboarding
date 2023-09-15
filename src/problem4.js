function problem4(word) {
  if (typeof word !== "string") return;

  const strs = word.split("");
  let answer = "";
  for (const str of strs) {
    if (str === " ") {
      answer += str;
      continue;
    }

    const code_num = str.charCodeAt();
    if (code_num <= 90) {
      const sum = code_num - 65;
      const new_str = 90 - sum;
      answer += String.fromCharCode(new_str);
    } else if (code_num >= 97) {
      const sum = code_num - 97;
      const new_str = 122 - sum;
      answer += String.fromCharCode(new_str);
    }
  }

  return answer;
}

module.exports = problem4;
