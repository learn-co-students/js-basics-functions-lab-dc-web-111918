// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  // my version:
  // const headquarters = 42;
  // if (destination > headquarters) {
  //   return destination - headquarters;
  // } else if (destination < headquarters) {
  //   return headquarters - destination;
  // }

  // better version:
  let hq = 42;
  return Math.abs(hq - destination);
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end) {
  let price;
  let distance = distanceTravelledInFeet(start, end);
  if (distance < 400) {
    price = 0;
  } else if (distance > 400 && distance < 2000) {
    price = 0.02 * (distance - 400);
  } else if (distance >= 2000 && distance <= 2500) {
    price = 25;
  } else if (distance > 2500) {
    price = "cannot travel that far";
  }
  return price;
}
