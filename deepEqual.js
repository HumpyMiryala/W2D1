var deepEqual = function (x, y) {
  if (x === y) {
    return true;
  }
  else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var proper in x) {
      if (y.hasOwnProperty(proper))
      {  
        if (! deepEqual(x[proper], y[proper]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else 
    return false;
}

var obj = {here: {is: "an", other: "3"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an", other: "3"}, object: 2}));
// → true