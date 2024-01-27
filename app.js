'use strict'
let screenPrice = 10000
let percentage = 10
let allServicePrices;
let titleProject2;
let fullPrice2;
// let persentResult;
let titleProject;
let screensValue;
let responsive;
let service1;
let servicePrice1;
let service2;
let servicePrice2;
let fullPrice;
let servicePercentPrice;
let roundedServicePercentPrice;



const asking = function () {
    titleProject = prompt('Название проекта')
    screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями?')
    responsive = prompt('нужен ли респонсивный сайт??', '')

}

service1 = prompt('Какой сервис нужен?')
servicePrice1 = +prompt('Сколько это будет стоить?')
service2 = prompt('Какой еще сервис тебе нужен?')
servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')



// ---- 2 ЕСЛИ ЧТО ВКЛЮЧИТЬ
// fullPrice = screenPrice + + servicePrice1 + + servicePrice2;
// console.log("Итоговая сумма:", fullPrice);



// ---- 1ЕСЛИ ЧТО ВКЛЮЧИТЬ
// persentResult = +(fullPrice * (percentage / 100))
// console.log("Процент партнеру: ", persentResult);

// servicePercentPrice = fullPrice - persentResult;
// roundedServicePercentPrice = Math.round(servicePercentPrice);
// console.log("Итоговая сумма за вычитом комиссии партнеру:", servicePercentPrice);



if (fullPrice > 50000) {
    console.log("Сделаем скидку 10%");
} else if (fullPrice > 20000 && fullPrice <= 40000) {
    console.log("Сделаем скидку 5%");
} else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log("Абракадабра");
} else {
    console.log("Что-то пошло не так");
}




//  ПРОВЕРКА НА ЧИСЛО
const checkIsNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}


const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный сервис нужен?', 'Услуга 1')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 2')
        }

        let textFromPromt = '';
        while (!checkIsNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
            textFromPromt = prompt('Сколько это будет стоить?')
        }
        sum = sum + Number(textFromPromt)
    }
    return sum
}


getAllServicePrices(servicePrice1, servicePrice2);
alert(allServicePrices);

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}



/// FUNCTION С МОДИФИКАЦИЕЙ
function getTitle(titleProject) {
    if (titleProject && typeof titleProject === 'string') {
        return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
    } else {
        return '';
    }
}
titleProject2 = getTitle(titleProject);
alert(titleProject2)


// ---- 1 ЕСЛИ ЧТО ОТКЛЮЧИТЬ
const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * percentage / 100)
}


// ---- 1 ЕСЛИ ЧТО ВКЛЮСИТЬ
// function getServicePercentPrices() {
//     return servicePercentPrice;
// }



let servicePercentPrice2 = getServicePercentPrices(servicePercentPrice);
console.log('Возврат итоговой стоимости с учетом процента подрядчику', servicePercentPrice);
// alert(servicePercentPrice);


/// FUNCTION showTypeOf
function showTypeOf(screensValue) {
    return screensValue;
}
let screensValue2 = showTypeOf(screensValue);
console.log('Cтроки с типами экранов для разработки', screensValue);


//// СООБЩЕНИЕ О СКИДКЕ
function getRollbackMessage(getServicePercentPrices) {
    let servicePercentPriceValue = getServicePercentPrices();

    if (servicePercentPriceValue > 50000) {
        return "Сделаем скидку 10%";
    } else if (servicePercentPriceValue > 20000 && servicePercentPriceValue <= 40000) {
        return "Сделаем скидку 5%";
    } else if (servicePercentPriceValue > 0 && servicePercentPriceValue <= 20000) {
        return "Скидка не предусмотрена";
    } else if (servicePercentPriceValue === 0 || servicePercentPriceValue === 20000 || servicePercentPriceValue === 50000) {
        return "Абракадабра";
    } else {
        return "Что-то пошло не так";
    }
}

console.log('Сообщение о скидке :', getRollbackMessage(getServicePercentPrices));
alert(getRollbackMessage(getServicePercentPrices));


asking()
allServicePrices = getAllServicePrices()
fullPrice2 = getFullPrice(screenPrice, allServicePrices);
alert(fullPrice2);


console.log(titleProject);
console.log(screensValue);
console.log(responsive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
// console.log(Math.ceil(servicePercentPrice));
