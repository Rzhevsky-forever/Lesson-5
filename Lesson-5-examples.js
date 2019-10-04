"use strict";

// let TAX_RATE = 0.73;
// let t = 1;
// let u = 3;

// function myFunction () {
//     var a = 'a';
//     let b = 'b';
// }
// console.log(a);
// console.log(b);

// if (true)
// {
// var name = 'Мария';
// let age = 99;
// console.log(name, age); // Мария 99
// }
// console.log(name); // Мария
// console.log(age);  // let переменная не отрабатывает вне блока кода где объявлена (не видна)

// function createCounter(counter = 0) {
    // return function () {
    // console.log(counter++);
    // }
// }

// createCounter(1);
// createCounter(1);
// createCounter(1);
// createCounter(1);


function createCounter(counter) {
    return function () {
    console.log(counter++);
    };
}

var counters = [];
for (var i = 0; i <= 5; ++i) {
    counters[i] = createCounter(i);
}

counters[0]();
counters[0]();
counters[0]();
counters[0]();