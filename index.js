// Code your solution in this file!
function distanceFromHqInBlocks(pickUpStreet){
  return Math.abs(42 - pickUpStreet);
}

function distanceFromHqInFeet(pickUpStreet) {
  return distanceFromHqInBlocks(pickUpStreet) * 264;
}

function distanceTravelledInFeet(startPoint, destination){
  const blocks = Math.abs(startPoint - destination);
  return blocks * 264;
}

function calculatesFarePrice(startPoint, destination) {
  const distance = distanceTravelledInFeet(startPoint, destination);
  if (distance < 400) {
      return 0;
  } else if (distance > 400 && distance <= 2000){
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return `cannot travel that far`
  }
}
