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

// Помнит и печатает суммы
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
let powerBalance = [7, 2, 1, 4, 8];
let batteryPowerCounters = [];

for(let i = 0; i < 5; i++) { // Перебираем телепорты
    function getBatteryPower () {
        switch (powerBalance[i]) {
            case 0:
                console.log(`Телепорт ${i + 1} недоступен, перезаряжается`);
                break;
            case 1:
                powerBalance[i]--;
                console.log(`Телепорт ${i + 1} использован, заряд — ${powerBalance[i]} единиц, требуется перезарядка!`);
                break;
            default:
                powerBalance[i]--;
                console.log(`Телепорт ${i + 1} использован, заряд — ${powerBalance[i]} единиц`);
                break;
        }
    }
    batteryPowerCounters.push(getBatteryPower);
}

batteryPowerCounters[0]();
batteryPowerCounters[1]();
batteryPowerCounters[1]();
batteryPowerCounters[1]();
batteryPowerCounters[1]();
batteryPowerCounters[2]();
batteryPowerCounters[2]();
batteryPowerCounters[3]();
