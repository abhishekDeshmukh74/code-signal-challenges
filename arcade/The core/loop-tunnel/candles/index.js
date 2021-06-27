function candles(candlesNumber, makeNew) {
  let burnedCandles = 0;
  let leftovers = 0;
  let leftoverAfterRenewed = 0;
  while (candlesNumber) {
    burnedCandles += candlesNumber;
    leftovers = candlesNumber + leftoverAfterRenewed;
    leftoverAfterRenewed = leftovers % makeNew;
    // renewed candles
    candlesNumber = Math.floor(leftovers / makeNew);
  }
  return burnedCandles;
}

// best solution
function candles(candles, makeNew) {
  return candles + Math.floor((candles - 1) / (makeNew - 1));
}

console.log('candles:', candles(5, 2));
