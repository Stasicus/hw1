'use strict'
let screenPrice = 10000
let percentage = 10
let allServicePrices;
let titleProject2;
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
// alert(titleProject2)


// ---- 1 ЕСЛИ ЧТО ОТКЛЮЧИТЬ
const getServicePercentPrices = function (price, percentage) {
    return price - (price * percentage / 100);
};


let servicePercentPrice2 = getServicePercentPrices(fullPrice, percentage);
console.log('Возврат итоговой стоимости с учетом процента подрядчику', servicePercentPrice2);

servicePercentPrice = getServicePercentPrices(fullPrice, percentage);
getRollbackMessage(servicePercentPrice, percentage);



//// СООБЩЕНИЕ О СКИДКЕ
function getRollbackMessage(price, percentage) {
    let servicePercentPriceValue = getServicePercentPrices(price, percentage);

    if (servicePercentPriceValue > 50000) {
        return "Сделаем скидку 10%";
    } else if (servicePercentPriceValue > 40000 && servicePercentPriceValue <= 50000) {
        return "Сделаем скидку 8%";
    } else if (servicePercentPriceValue > 20000 && servicePercentPriceValue <= 40000) {
        return "Сделаем скидку 5%";
    } else if (servicePercentPriceValue > 0 && servicePercentPriceValue <= 20000) {
        return "Скидка не предусмотрена";
    } else if (servicePercentPriceValue === 0 || servicePercentPriceValue === 20000 || servicePercentPriceValue === 40000 || servicePercentPriceValue === 50000) {
        return "Абракадабра";
    } else {
        return "Что-то пошло не так";
    }
}

console.log('Сообщение о скидке :', getRollbackMessage(getServicePercentPrices));


asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
alert(fullPrice);

servicePercentPrice = getServicePercentPrices(fullPrice, percentage);
getRollbackMessage(fullPrice, percentage);


console.log(titleProject);
console.log(screensValue);
console.log(responsive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);