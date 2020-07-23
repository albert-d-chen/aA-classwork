function range(start, end) {
  if (start === end) {
    return [start];
  }
//   console.log(end)
  let array = range(start, end - 1);
  array.push(end);
  return array;
}

// console.log(range(1,10));

function sumRec(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let array = arr.slice(0,arr.length - 1);
    let subSum = sumRec(array); 
    return subSum + arr[arr.length - 1];

}

// console.log(sumRec([1,2,3,4]));

// exponent

function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * exponent1(base, exp - 1);
}

// console.log(exponent1(3, 4));

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return exponent2(base, exp / 2) ** 2;
  } else {
    return base * (exponent2(base, (exp - 1) / 2) ** 2);
  }
}

// console.log(exponent2(3,4))
// console.log(exponent2(3,5))

function fibonacci(n) {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [1];
    }

    if (n === 2) {
        return [1,1];
    }
    
    let lastfib = fibonacci(n - 1);
    lastfib.push(lastfib[lastfib.length - 1] + lastfib[lastfib.length - 2]);
    return lastfib; 
}

// console.log(fibonacci(15));

function deepDup(arr) {
  if (!Array.isArray(arr)) {
    return arr
  }

  let duped = [];
  for (let i = 0; i < arr.length; i++) {
    duped.push(deepDup(arr[i]));
  }
  return duped;
}

let bigArr = [[1,2,3,4],[1,2,[2,3],7],[1],6];
let duplicate = deepDup(bigArr);
duplicate[1][2][0] = 7;
console.log(duplicate);
console.log(bigArr); 