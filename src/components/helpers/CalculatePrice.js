
// export default 
function calculatePrice(distance) {
  const base = 100; //100 km * 1000 = 100,000m, $1/km up to first 100km
  const aboveBase = (distance/1000 - base) / 2 ; //difference between base and actual distance, at $0.50/km
  let totalCost;
  const value = [];

  if (aboveBase < base) {
    totalCost = base;
    totalCost = totalCost.toFixed(2);
    value.push(distance/1000);
    value.push(totalCost);

    return value
  } else {
    totalCost = (base + aboveBase);
    totalCost = totalCost.toFixed(2);
    value.push(distance/1000);
    value.push(totalCost);
  
    return value;
  }

}

console.log(calculatePrice(3));





