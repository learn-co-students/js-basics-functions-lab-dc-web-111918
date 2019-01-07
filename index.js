// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}


function distanceFromHqInFeet(blockNumber){
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(starting, ending) {
if (ending < starting){
    return (starting - ending) * 264;
    } else {
      return (ending - starting) * 264;
  }
}

function calculatesFarePrice(starting, ending) {
  const distance = distanceTravelledInFeet(starting, ending)
  if (distance <= 400) {
      return 0;
  } else if (distance > 400 && distance <=2000) {
      return (distance - 400) * 0.02
  } else if (distance > 2000 && distance <2500) {
      return 25
  } else {
    return 'cannot travel that far'
  }
}
