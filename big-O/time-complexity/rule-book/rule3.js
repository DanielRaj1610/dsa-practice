//DIFERENT TERMS FORMS INPUT
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((box) => {
    console.log(box);
  });
  boxes2.forEach((box) => {
    console.log(box);
  });
}
/**
 * O(a + b)
 * Same indentation add
 */

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((box) => {
    console.log(box);
    boxes2.forEach((box) => {
      console.log(box);
    });
  });
}
/**
 * O(a * b)
 * nested code multiply
 */
