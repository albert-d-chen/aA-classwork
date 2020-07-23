//myeach 

Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

// Array.prototype.myMap = function(cb) {
//   let newArr = [];
//   this.myEach((arg) => newArr.push(cb(arg)));
//   return newArr;
// }

Array.prototype.myMap = function(cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));  
  }
  return newArr;
}

//myReduce

Array.prototype.myReduce = function(cb, initialValue) {
    let start;
    let array;
    if (initialValue) {
        start = initialValue;
        array = this; 
    } else {
        start = this[0];
        array = this.slice(1, this.length);
    }

   
    array.myEach((arg) => start = cb(start, arg));

    return start;
}

