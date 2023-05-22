module.exports = function (str) {
  // write your code here

  let string = str.replace(/[^a-z0-9]/gi, "");
  let string1 = string.toLowerCase();
  let string2 = string1.split("").reverse().join("");

  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
};
module.exports("eat");
