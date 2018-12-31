// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if (block > 42){
    return block - 42;
  } else {
    return 42 - block;
  }
};

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264
  // one block is 264 ft
}

function distanceTravelledInFeet(startBlock, endBlock){
  if (startBlock < endBlock) {
    return (endBlock - startBlock) * 264;
  } else {
    return (startBlock - endBlock) * 264;
  }
}

function calculatesFarePrice(startBlock, endBlock){
  const dist = distanceTravelledInFeet(startBlock, endBlock);
  if (dist <= 400){
    return 0;
  } else if (400 <= dist && dist <= 2000){
    return (dist - 400) * .02;
  }else if (2000 < dist && dist <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
};

// up to 400 is free
// 400-2000 is 2 cents per foot
// 2001-2500 is 25 buck total
// no rides greater than 2500
