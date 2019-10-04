"use strict";

const TAX_RATE = 0.73;
let summ = [];

summ.push(function(costOfProd) {
    costOfProd = costOfProd * TAX_RATE;
    return costOfProd; 
});

console.log(summ[0](100));
console.log(summ[0](1000));
console.log(summ[0](10000));
