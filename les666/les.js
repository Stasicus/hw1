"use strict"
// 29.10.2024 //

let unknownNum = 3
let txtNum = ''
let tries = 3


const gameBotFunction = function () {
    function randomGenerate(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        return Math.round(rand)
    }


    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    }

    return function getResult() {
        txtNum = prompt('Нужно угадать число от 1 до 100')
        if (txtNum === null) {
            alert('Игра завершена')
            return
        }
        while (!isNumber(txtNum) || txtNum.trim() === '') {
            alert('Вы ввели текст а не число, пожалуйста введите число')
            txtNum = prompt('Нужно угадать число от 1 до 100')
        }

        txtNum = Number(txtNum)
        if (unknownNum > txtNum) {
            alert('Загаданное число должно быть больше; ' + 'Осталось попыток: ' + tries)
        } else if (unknownNum < txtNum) {
            alert('Загаданное число должно быть меньше: ' + 'Осталось попыток: ' + tries)
        } else if (unknownNum === txtNum) {
            const isUserWantNewGame = confirm('Поздравляю вы угадали!!! Хотели бы сыграть еще?')
            if (isUserWantNewGame) {
                tries = 4
                unknownNum = randomGenerate(1, 100)
            } else {
                tries = 0
            }
        }


        if (tries > 0) {
            tries--
            getResult();
            return
        } else {
            const maybeAgain = confirm('Игра окончена, попыток больше нет. Хотите начать заново?')
            if (maybeAgain == true) {
                tries = 2
                getResult();
            } else {
                alert('Вы завершили игру')
                return
            }
        }
    }

}

let launchGameBot = gameBotFunction();
launchGameBot();