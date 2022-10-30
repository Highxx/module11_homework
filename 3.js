function getSum(x) {
    return function(y) {
        return x + y;
    };
}

let f = getSum(5);
console.log( getSum(1)(123) );