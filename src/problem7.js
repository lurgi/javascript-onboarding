function problem7(user, friends, visitors) {
  const score_obj = {};

  const user_friends = {};
  for (const [name1, name2] of friends) {
    if (name1 === user) user_friends[name2] = 1;
    else if (name2 === user) user_friends[name1] = 1;
  }

  for (const [name1, name2] of friends) {
    if (name1 !== user && name2 !== user) {
      if (!user_friends[name1] && user_friends[name2]) {
        if (!score_obj[name1]) score_obj[name1] = 0;
        score_obj[name1] += 10;
      } else if (!user_friends[name2] && user_friends[name1]) {
        if (!score_obj[name2]) score_obj[name2] = 0;
        score_obj[name2] += 10;
      }
    }
  }

  for (const visitor of visitors) {
    if (!user_friends[visitor]) {
      if (!score_obj[visitor]) score_obj[visitor] = 0;
      score_obj[visitor] += 1;
    }
  }

  return Object.entries(score_obj)
    .sort((a, b) => a[0] - b[0])
    .sort((a, b) => b[1] - a[1])
    .map((v) => v[0]);
}

module.exports = problem7;
