// Code your solution in this file!
function distanceFromHqInBlocks(feet) {
  if (feet > 42){
    return feet - 42
  }
  else {
    return 8
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}


function distanceTravelledInFeet(beginning, end){
  if (beginning > end){
    return (end - beginning) * 264 * -1;
  }
  else {
    return (beginning - end) * 264 * -1;
  }
}

function calculatesFarePrice(start, destination){
  const difference = distanceTravelledInFeet(start, destination)
  if (difference <= 400){
  return 0}
  else if (difference > 400 && difference <= 2000){
    return (difference - 400) * 0.02
  }
  else if (difference > 2000 && difference <= 2500){
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
