// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const headquarters = 42; // HQ location
  
    // Calculate the distance in blocks from headquarters
    const distance = Math.abs(street - headquarters);
  
    return distance;
  }

  function distanceFromHqInFeet(street) {
    const headquarters = 42;
    const distance = Math.abs((street - headquarters)*264);

    return distance;
  }
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264; 
    const distanceInBlocks = Math.abs(endBlock - startBlock); 
    const distanceInFeet = distanceInBlocks * blockLength; 
  
    return distanceInFeet;
  }
  function calculatesFarePrice(start, destination) {
  const distanceInFeet = Math.abs(destination - start);
  let fare = 0;

  if (distanceInFeet <= 400) {
    fare = 0; 
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    
    const fare = (distanceInFeet - 400) * 0.02;
    return fare;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    fare = 25; 
    return fare;
  } else {
    fare = 'cannot travel that far'; 
  }

  return fare;
}