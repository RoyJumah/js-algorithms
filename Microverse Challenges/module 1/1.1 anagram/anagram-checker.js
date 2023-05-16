module.exports = function (str, str2) {
  let string1 = str.replace(/\W|_/g, "");
  let string2 = str2.replace(/\W|_/g, "");

  let l1 = string1.length;
  let l2 = string2.length;

  let v = string1.toLowerCase();
  let x = string2.toLowerCase();

  let y = v.split("").sort().join("");
  let z = x.split("").sort().join("");

  if (l1 !== l2) {
    return false;
  }

  if (y === z) {
    return true;
  } else return false;
};

module.exports("card", "dark");
