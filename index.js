function produceDrivingRange(blockRange) {

return function(startBlock, endBlock) {
  let start = parseInt(startBlock)
  let end = parseInt(endBlock)
  let range = Math.abs(start - end)
  if range < 10
  return `within range by ${range}`
  else
  return `${range} blocks out of range`
}
}
