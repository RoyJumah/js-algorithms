function groupAnagrams(strs) {
  const anagramGroups = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (anagramGroups[sortedStr]) {
      anagramGroups[sortedStr].push(str);
    } else {
      anagramGroups[sortedStr] = [str];
    }
  }
  const results = Object.values(anagramGroups);
  return results;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
