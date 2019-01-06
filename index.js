function distanceFromHqInBlocks(streetNumber) {
  return Math.abs(42 - streetNumber);
}

function distanceFromHqInFeet(streetNumber) {
  return distanceFromHqInBlocks(streetNumber) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance < 2500 && distance > 2000) {
    return 25;
  } else if (distance < 2000 && distance > 400) {
    return (distance - 400) * .02;
  } else {
    return 0;
  }
}
