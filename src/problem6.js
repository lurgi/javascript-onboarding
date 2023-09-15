function problem6(forms) {
  const answer = [];
  for (let i = 0; i < forms.length; i++) {
    const [email, name] = forms[i];

    const strs = [];
    for (let j = 0; j < name.length - 1; j++) {
      strs.push(name.substring(0 + j, 2 + j));
    }
    const reg = new RegExp(`(${strs.join("|")})`, "g");

    let isDup = false;
    for (let j = i + 1; j < forms.length; j++) {
      const [email2, name2] = forms[j];
      if (name2.match(reg)) {
        isDup = true;
        answer.push(email2);
      }
    }
    if (isDup) answer.push(email);
  }
  return [...new Set(answer)].sort();
}

module.exports = problem6;
