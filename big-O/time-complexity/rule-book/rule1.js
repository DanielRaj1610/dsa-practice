//WORST CASE

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
  "nemo",
];
function findNemo(fish) {
  //* used to measure time in milliseconds
  let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === "nemo") {
      console.log("Found NEMO!");
      break; //----> breaks the loops once condition is met
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo(everyone); //O(n) --> Linear Time
