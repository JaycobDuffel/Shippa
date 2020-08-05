
export default function calculatePrice(distance) {
  // console.log('distance is here  >>>> ', distance);
  const base = 100; //100 km * 1000 = 100,000m, $1/km up to first 100km
  const aboveBase = (distance/1000 - base) / 2 ; //difference between base and actual distance, at $0.50/km
  let totalCost;
  const value = [];

  if (distance/1000 <= base) {
    totalCost = base;
    totalCost = totalCost.toFixed(2);
    value.push(Number(distance/1000));
    value.push(Number(totalCost));
    // console.log("value is here 14 >>> ", value)
    return value
  } else {
    totalCost = (base + aboveBase);
    totalCost = totalCost.toFixed(2);
    value.push(Number(distance/1000));
    value.push(Number(totalCost));
    // console.log("value is here 21 >>> ", value)
    return value;
  }

}


// console.log("For 200 km, the array is: [distance/1000, totalCost]", calculatePrice(200*1000));




