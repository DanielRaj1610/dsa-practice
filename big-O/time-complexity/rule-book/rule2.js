//REMOVE CONSTANTS
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); //O(1)

  var middleIndex = Math.floor(items.length / 2); //O(1)
  var index = 0; //O(1)

  //O(n/2)
  while (index < middleIndex) {
    console.log(items[index]); //O(1)
    index++; //O(1)
  }

  //O(100)
  for (var i = 0; i < 100; i++) {
    console.log("hi"); //O(1)
  }
}
/**
 * -> 1 + 1 + 1 + n/2 + 1 + 1 + 100 + 1 => 105 + n/2
 * -> 105 + n/2 => 1 + n
 * -> O(n)
 */
