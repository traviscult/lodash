const _ = {
    clamp(number, lower, upper){
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue
    },
    inRange(number, start, end){
      if (end === undefined){
        end = start 
        start = 0
      }if (start > end){
        let temp = end
        end = start 
        start = temp
      }
      let isInrange = start <= number && number < end
      return isInrange;
    },
    words(str){
      const words = str.split(' ');
      return words;
    },
    pad(str, length){
      if (str.length >= length){
        return str
      };
      const startPaddingLength = Math.floor((length - str.length)/2);
      const endPaddingLength = length - str.length - startPaddingLength;
      const paddedString = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
      return paddedString;
    }
  };




module.exports = _;