const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let arr = new Array()
  arr = arrayOfString
  let max = new Array()
  if (arrayOfString === null || arrayOfString === undefined) {
    return undefined
  }
    for (let j = 0; j < arr.length; j++) {
      let word = [...arr[j]]
      if (word.length > max.length) {
        max = arr[j]
      }
      else if (word.length < max.length) {
        max = max
      }
      else if (word.length === max.length){
        return [max, arr[j]]
        }
      }
    return [max]
  }
module.exports = getMaxLengthString