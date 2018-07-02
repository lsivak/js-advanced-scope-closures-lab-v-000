function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {

  let start = parseInt(startBlock)
  let end = parseInt(endBlock)
  let blockRange = Math.abs(end - start)
  if blockRange < 10
  return `within range by ${blockRange}`
  else
  return `${blockRange} blocks out of range`
}
}
