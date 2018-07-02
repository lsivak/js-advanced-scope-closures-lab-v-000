function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {

  let range = parseInt(endBlock) - parseInt(startBlock)
  let actual = blockRange - range
  if (actual > 0) {
  return `within range by ${actual}`
} else {
  return `${Math.abs(actual)} blocks out of range`
}
}
}
function produceTipCalculator(percentTip) {
  return function(fare) {

    return parseInt(fare) * percentTip
    
    return 
  }
}