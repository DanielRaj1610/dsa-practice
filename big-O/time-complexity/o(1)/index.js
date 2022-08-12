const boxes = ["box1", "box2", "box3", "box4", "box5"];

const compressFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
};

compressFirstTwoBoxes(boxes); //O(2) -> Constant Time

