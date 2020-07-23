//uniq

Array.prototype.uniq = function () {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (!newArr.includes(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;

}


//twosum

Array.prototype.twosum = function () {
    let pairs = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if(this[i] + this[j] === 0 && j > i) {
                pairs.push([i, j]);
            }
        }
    }
    return pairs;
}

//transpose

Array.prototype.transpose = function () {
  let transposed = [];

  for (let i = 0; i < this[0].length; i++) {
    let subArr = [];
    for (let j = 0; j < this.length; j++) {
      subArr.push(this[j][i]);
    }
    transposed.push(subArr);
  }
  return transposed;
}

