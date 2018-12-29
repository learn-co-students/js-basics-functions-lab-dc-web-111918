// Code your solution in this file!
function distanceFromHqInBlocks(street){
  let blocks;
  blocks = Math.abs(street - 42);
  return blocks;
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start,end){
  return (Math.abs(start - end)) * 264;
}


function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start,destination);
  if (distance <= 400) {
   return 0;
  }else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
