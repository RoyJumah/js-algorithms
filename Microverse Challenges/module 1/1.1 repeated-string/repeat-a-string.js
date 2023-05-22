function repeatStringNumTimes(str, num) {
  if (num < 0) return "";
  let answer = "";

  for (i = 0; i <= num - 1; i++) {
    answer = answer + str;
  }

  return answer;
}
module.exports = repeatStringNumTimes;
