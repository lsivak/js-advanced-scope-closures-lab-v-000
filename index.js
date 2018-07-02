function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {

  let start = parseInt(startBlock)
  let end = parseInt(endBlock)
  let range = Math.abs(end - start)
  let actual = blockRange - range
  if (actual > 0) {
  return `within range by ${actual}`
} elsif (actual < 0) {
  return `${actual} blocks out of range`
}
}
}
