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
    },
    has(obj, key){
      const hasValue = obj[key];
      if(hasValue != undefined){
        return true;
      }return false;
    },
    invert(object){
      let invertedObject = {};
      for( let key in object){
        const originalValue = object[key];
        invertedObject = {originalValue : key};
      }
      return invertedObject;
    },
    findKey(object, predicate){
      for (let key in object){
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if(predicateReturnValue){
          return key;
        };
      };
      undefined
      return undefined;
    },
    drop(array, n){
      if(n === undefined){
        n = 1;
      }
      let droppedArray = array.slice(n, array.length);
      return droppedArray;
    },
    dropWhile(array, predicate){
      const cb = (element, index) =>{
        return !predicate(element, index, array);
      }
      let dropNumber = array.findIndex(cb);
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
  };




module.exports = _;