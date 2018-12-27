// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  let hq = 42;
  return Math.abs(hq - destination);
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  let fare;
  if (distance <= 400) {
    fare = 0
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * .02;
  } else if (distance >= 2000 && distance <= 2500) {
    fare = 25
  } else if (distance > 2500) {fare = 'cannot travel that far'
    }
  return fare
}
