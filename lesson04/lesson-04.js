'use strict'

let screenPrice = 10000
let percentage = 10

let titleProject = prompt('Название проекта')
console.log(titleProject)

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями?')
console.log(screensValue)

let responsive = prompt('нужен ли респонсивный сайт??', '')
if (responsive == 'да') {
    alert("Отличный выбор");
} else {
    alert('Ну чтож, ничего страшного, будем делать как в 2007');
}

let service1 = prompt('Какой сервис нужен?')
console.log(service1)

let servicePrice1 = +prompt('Сколько это будет стоить?')
console.log(servicePrice1)

let service2 = prompt('Какой еще сервис тебе нужен?')
console.log(service2)

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2)

let fullPrice = screenPrice + + servicePrice1 + + servicePrice2;
console.log("Итоговая сумма:", fullPrice);


let persentResult = +(fullPrice * (percentage / 100))
console.log("Процент партнеру: ", persentResult);


let servicePercentPrice = fullPrice - persentResult;
let roundedServicePercentPrice = Math.round(servicePercentPrice);
console.log("Итоговая сумма за вычитом комиссии партнеру:", servicePercentPrice);



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



// // FUNCTION EXPRESSION

let getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2;
};

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
alert(allServicePrices);


// // FUNCTION DIRECTION
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}

let fullPrice2 = getFullPrice(screenPrice, allServicePrices);
alert(fullPrice2);


/// FUNCTION С МОДИФИКАЦИЕЙ

function getTitle(titleProject) {
    if (titleProject && typeof titleProject === 'string') {
        return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
    } else {
        return '';
    }
}
let titleProject2 = getTitle(titleProject);
alert(titleProject2)


/// FUNCTION ВОЗВРАТА ServicePercentPrices
function getServicePercentPrices() {
    return servicePercentPrice;
}
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





///////////////////



// let screenPrice = 10000
// let percentage = 10

// let titleProject = prompt('Название проекта');
// // console.log(titleProject);

// let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями?');
// // console.log(screensValue);

// let responsive = prompt('нужен ли респонсивный сайт??', '');
// if (responsive == 'да') {
//     alert("Отличный выбор");
// } else {
//     alert('Ну чтож, ничего страшного, будем делать как в 2007');
// }

// let service1 = prompt('Какой сервис нужен?');
// // console.log(service1);

// let servicePrice1 = +prompt('Сколько это будет стоить?');
// // console.log(servicePrice1);

// let service2 = prompt('Какой еще сервис тебе нужен?');
// // console.log(service2);

// let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');
// // console.log(servicePrice2);

// let fullPrice = screenPrice + + servicePrice1 + + servicePrice2;
// console.log("Итоговая сумма:", fullPrice);

// let persentResult = +(fullPrice * (percentage / 100));
// console.log("Процент партнеру: ", persentResult);

// let servicePercentPrice = fullPrice - persentResult;
// let roundedServicePercentPrice = Math.round(servicePercentPrice);
// console.log("Итоговая сумма за вычитом комиссии партнеру:", servicePercentPrice);

// if (fullPrice > 50000) {
//     console.log("Сделаем скидку 10%");
// } else if (fullPrice > 20000 && fullPrice <= 40000) {
//     console.log("Сделаем скидку 5%");
// } else if (fullPrice > 0 && fullPrice <= 20000) {
//     console.log("Скидка не предусмотрена");
// } else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
//     console.log("Абракадабра");
// } else {
//     console.log("Что-то пошло не так");
// }

// let getAllServicePrices = function (servicePrice1, servicePrice2) {
//     return servicePrice1 + servicePrice2;
// };

// let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
// // alert(allServicePrices);

// function getFullPrice(screenPrice, allServicePrices) {
//     return screenPrice + allServicePrices;
// }

// let fullPrice2 = getFullPrice(screenPrice, allServicePrices);
// // alert(fullPrice2);

// function getTitle(titleProject) {
//     if (titleProject && typeof titleProject === 'string') {
//         return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
//     } else {
//         return '';
//     }
// }

// let titleProject2 = getTitle(titleProject);
// // alert(titleProject2);

// function getServicePercentPrices() {
//     return servicePercentPrice;
// }

// let servicePercentPrice2 = getServicePercentPrices(servicePercentPrice);
// console.log('Возврат итоговой стоимости с учетом процента подрядчику', servicePercentPrice);
// // alert(servicePercentPrice);

// function showTypeOf(screensValue) {
//     return screensValue;
// }

// let screensValue2 = showTypeOf(screensValue);
// console.log('Cтроки с типами экранов для разработки', screensValue);

// function getRollbackMessage(getServicePercentPrices) {
//     let servicePercentPriceValue = getServicePercentPrices();

//     if (servicePercentPriceValue > 50000) {
//         return "Сделаем скидку 10%";
//     } else if (servicePercentPriceValue > 20000 && servicePercentPriceValue <= 40000) {
//         return "Сделаем скидку 5%";
//     } else if (servicePercentPriceValue > 0 && servicePercentPriceValue <= 20000) {
//         return "Скидка не предусмотрена";
//     } else if (servicePercentPriceValue === 0 || servicePercentPriceValue === 20000 || servicePercentPriceValue === 50000) {
//         return "Абракадабра";
//     } else {
//         return "Что-то пошло не так";
//     }
// }

// console.log('Сообщение о скидке :', getRollbackMessage(getServicePercentPrices));
// alert(getRollbackMessage(getServicePercentPrices));






//////////////////////////////////////////////////////////







// THIRD EXS// 

// let name = 'Stas'
// function foo() {
//     name = "Arsen"
//     console.log('Hi ', name);
// }

// console.log("Hello", name);
// foo()



// SECOND EXS// 
// let name = 'Stas'

// function foo() {
//     let age = 31
//     console.log('Привет', name);
//     console.log('Мне', age);
// }

// foo()

// age = 32
// console.log(age);



//FIRST EXAMPLE//
// foo()
// function foo() {
//     console.log('Hello world');
// }

// const foo2 = function () {
//     console.log('Hello World 2');
// }

// foo2()


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }


//   function checkAge(age) {
//     return age > 18 || confirm ('Родители разрешили?')
//   }