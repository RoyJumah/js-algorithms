const groupAnagrams = (strs) => {
  const anagramMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    const string = strs[i];
    const sortedString = string.split('').sort().join('');

    if (anagramMap.has(sortedString)) {
      anagramMap.get(sortedString).push(string);
    } else {
      anagramMap.set(sortedString, [string]);
    }
  }
  const result = Array.from(anagramMap.values());
  return result;
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));
