// let titleProject = 'Оценка стоимости'
// let screensValue = 'шаблонные, с уникальным дизайном, с анимациями'
let screenPrice = 10000
// let percentage = 90
// let fullPrice = 5000
// let responsive = true

// console.log(titleProject)

// let x = 11;
// if (x > 10) {
//     console.log('Условие верно');
// } else {
//     console.log('Условие не верно');
// }

// let a = 5;
// let b = '10'
// let res = a + + b

// console.log(a.toString())
// console.log(res);
// console.log(a + b);

// alert('Привет')

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

let servicePrice1 = prompt('Сколько это будет стоить?')
console.log(servicePrice1)

let service2 = prompt('Какой еще сервис тебе нужен?')
console.log(service2)

let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2)

let fullPrice = screenPrice + + servicePrice1 + + servicePrice2;
console.log("Итоговая сумма:", fullPrice);

let servicePercentPrice = fullPrice - (fullPrice * 0.1);
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

