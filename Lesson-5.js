"use strict";

let TAX_RATE = 0.73;
let summ = [];

for (let count = 0; count < 10; count ++) {
    summ.push(function(costOfProd){
        costOfProd * TAX_RATE; 
    });
}
// function getTaxRate(costOfProd) {
    // summ.push(function(costOfProd) {
    //     return (costOfProd * TAX_RATE);
    // }); 
    // summ.push(); 
    // return summ;
    // * TAX_RATE 
    // costOfProd * TAX_RATE;
// }

console.log(summ[0](100));