//sum1
function sum1() {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

// console.log(sum1(1, 2, 3, 4));

//sum2
function sum2(...args) {
    let result = 0;

    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

// console.log(sum2(1, 2, 3, 4, 5));

//myBind1
Function.prototype.myBind1 = function (context) {
    let that = this;
    let arr = Array.from(arguments).slice(1);

    return function () {
        let arr2 = Array.from(arguments);
        return that.apply(context, arr.concat(arr2));
    }
}



//myBind2
Function.prototype.myBind2 = function (context, ...args1) {
    let that = this;

    return function (...args2) {
    
        return that.apply(context, args1.concat(args2));
    }
}

// // with fat arrow: doesn't launch into its own scope, so you won't need to change the context
// // of this

// Function.prototype.myBind2 = function (context, ...args2) {
//     return (...args2) => (this.apply(context, args1.concat(args2)));
// };


//curriedSum
function curriedSum(numArgs) {
    let numbers = [];
    function _curriedSum(num) {
        numbers.push(num);
        let sum = 0;

        if (numbers.length === numArgs) {
            numbers.forEach((number) => { sum += number });
            return sum;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}


// let total = curriedSum(4);

// console.log(total = total(5)); total = _curriedSum(5)
// console.log(total = total(30));
// console.log(total = total(20));
// console.log(total = total(1));


// curry1
    // Function.prototype.curry1 = function(numArgs) {
    //     let that = this;
    //     let args = [];

    //     function _curry(arg) {
    //         args.push(arg);
    //         if (args.length === numArgs) {
    //             return that(...args);
    //         } else {
    //             return _curry;
    //         }
    //     }
    //     return _curry;
    // }

    
    function addNums(...args) {
        let arr = [];
        for (let i = 0; i < args.length; i++) {
            arr.push(args[i]);
        }
        return arr;
    }

    //Function.prototype.apply 
    Function.prototype.curry2 = function(numArgs) {
        let that = this;
        let args = [];

        function _curry(arg) {
            args.push(arg);
            if (args.length === numArgs) {
                return that.call(this, args);
            } else {
                return _curry;
            }
        }
        return _curry;
    }

    let test = addNums.curry2(4);
    console.log(test = test(['hi', 'uh']));
    console.log(test = test('hello'));
    console.log(test = test("yo"));
    console.log(test = test('bye'));

//...spread


