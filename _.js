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
    }
  };




module.exports = _;