const fish = ["dory", "bruce", "marlin", "nemo"];
const nemo = ["nemo"];
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
const large = new Array(10000).fill("nemo");

function findNemo(fish) {
  //* used to measure time in milliseconds
  let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo(large); //O(n) --> Linear Time


