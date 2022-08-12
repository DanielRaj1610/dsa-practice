//Log all pairs of array

const letters = ["a", "b", "c", "d", "e"];

const loadAllPairsForArray = (letters) => {
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      console.log(letters[i], letters[j]);
    }
  }
};
loadAllPairsForArray(boxes);

/**
 * O(n * n)
 * O(n^2) ---> Quadratic Time
 */
