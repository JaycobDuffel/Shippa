// import React from 'react'

export default function calculatePrice(distance) {
  const base = 100; //100 km * 1000 = 100,000m, $1/km up to first 100km
  const aboveBase = (distance/1000 - base) / 2 ; //difference between base and actual distance, at $0.50/km

  const totalCost = base + aboveBase;

  const value = "Your total cost comes to: $" + totalCost;

  return totalCost;
  // return (
  //   <div>
  //     Your price is {totalCost}
  //   </div>
  // )
}







