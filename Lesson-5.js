"use strict";

// Задание 1
const TAX_RATE = 0.73;
let summ = [];
let i = 0;

function getSumTax(costOfProd) {    
    costOfProd = costOfProd * TAX_RATE;
    
    summ[i] = costOfProd; 

    console.log('Налог с продаж (73 %), к оплате: ' + summ[i] + ' Q');

    i++
}

// Поминт и печатает суммы
// не уяснил для чего конструкция вида 
// arr.push(function(data) { ...; }
// прошу пояснить
getSumTax(100);
getSumTax(2000);
getSumTax(50000);
console.log(summ);

// Задание 2
let balancePaper = 30;

function packUpBox (boxX, boxY, boxZ) {
    let boxArea = ( (boxX*boxY) + (boxY*boxZ) + (boxZ*boxX) ) * 2;
    balancePaper -= boxArea;
    
    balancePaper > 0 ? console.log('Заказ ( ' + boxX + ' / ' + boxY + ' / ' + boxZ + ' м) упакован, осталось упаковочной бумаги '  + balancePaper + ' м2') 
                     : console.log('Бумаги не хватит');
}

packUpBox(1,0.2,0.7);
packUpBox(1,0.2,0.7);
packUpBox(1,0.2,0.7);
packUpBox(1,0.2,0.7);
packUpBox(1,0.2,0.7);
packUpBox(1,0.2,0.7);
packUpBox(1,2,7);

// Задание 3