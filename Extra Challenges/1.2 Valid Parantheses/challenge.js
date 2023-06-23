const isValid = function (s) {
  var stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      var topChar = stack.pop();
      if (
        (s[i] === ")" && topChar !== "(") ||
        (s[i] === "}" && topChar !== "{") ||
        (s[i] === "]" && topChar !== "[")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
