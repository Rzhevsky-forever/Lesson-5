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


// for(let i = 0; i == summ.length; i++) {
    //     console.log(summ.length);
    //     summ.push(function(costOfProd) {
    //         costOfProd = costOfProd * TAX_RATE;
    //         return costOfProd; 
    //     });
    // }


// Задание 3 Хорошо работает
let chargeBatteryData = [7, 2, 1, 4, 8];
let batteryCharge = 7;

function getBatteryCharge (i) {
    chargeBatteryData[i] = function() {
        batteryCharge--;
        console.log(batteryCharge > 0 ? batteryCharge : 'now charge');
    }
    chargeBatteryData[i]();
}

getBatteryCharge(0);
getBatteryCharge(0);
getBatteryCharge(0);
getBatteryCharge(0);
getBatteryCharge(0);
getBatteryCharge(0);
getBatteryCharge(0);
getBatteryCharge(0);
getBatteryCharge(0);
getBatteryCharge(0);
getBatteryCharge(0);
getBatteryCharge(0);
getBatteryCharge(0);