function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {

  let start = parseInt(startBlock)
  let end = parseInt(endBlock)
  let range = Math.abs(end - start)
  let blockRange = 10
  let actual = Math.abs(blockRange - range)
  if (actual > 0) {
  return `within range by ${actual}`
} else {
  return `${actual} blocks out of range`
}
}
}
