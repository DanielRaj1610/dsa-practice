//#5 Space complexity O(1)
function loops(n) {
  for (let i = 0; i < n; i++) {
    console.log("loops", i);
  }
}
loops(5); //O(1)

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiNTimes(6); //O(n)
