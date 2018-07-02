function produceDrivingRange(blockRange) {

return function(startBlock, endBlock) {
  let start = parseInt(startBlock)
  let end = parseInt(endBlock)
  let range = Math.abs(start - end)
  return false if range > 10
  else
  return true
}
}
