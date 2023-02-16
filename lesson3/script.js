// 1 // З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести на екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
// 
// const nameChildOne = prompt('Введіть ім`я першої дитини') 
// let   numberCandiesChildOne = parseInt(prompt('Введіть кількість цукерок першої дитини') )
// const nameChildTwo = prompt('Введіть ім`я другої дитини') 
// let   numberCandiesChildTwo = parseInt(prompt('Введіть кількість цукерок другої дитини') )
// 
// if(numberCandiesChildOne > numberCandiesChildTwo) 
//     document.write(nameChildOne)
// if(numberCandiesChildTwo > numberCandiesChildOne && numberCandiesChildTwo!= numberCandiesChildOne) document.write(nameChildTwo)
// if(numberCandiesChildOne === numberCandiesChildTwo) document.write(Кількість цукерок однакова)

// 2 // З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

// let productPrice = parseFloat(prompt(`Введіть ціну товару`))
//         let moneyAmount = parseFloat(prompt(`Введіть кількість грошей`))
//         const lotteryPrice = 4
// 
// if (productPrice > moneyAmount) document.write(`У покупці відмовлено`)
// else if (moneyAmount - productPrice >= lotteryPrice) document.write(`Купіть ще лотерейку за 4 гривні`)
// else document.write(`Покупка дозволена`)

// 3 // Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

// let min = 1, max = 5
// let randomNumber = min + Math.floor(Math.random() * (max - min + 1))
// console.log(randomNumber)
// 
// let attemptOne = parseInt(prompt(`Перша спроба`))
// let attemptTwo = parseInt(prompt(`Друга спроба`))
// if(randomNumber === attemptOne || randomNumber === attemptTwo) document.write('Ви вгадали')
// 
// else document.write(`Ви не вгадали`)
// 
// 

// 4 // З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

// let userAge = parseInt(prompt(`Введіть Ваш вік`))
// const ageStartKinderGarten = 2
// const ageStartSchool = 7
// const ageStartUniversity = 18
// const ageStartWork = 22
// const ageStartPension = 65
// 
// if(userAge >= ageStartKinderGarten && userAge < ageStartSchool) document.write(`Ви дитина у садочку`)
//     
//     else if (userAge >= ageStartSchool && userAge < ageStartUniversity) document.write(`Ви школяр`)
//    
//     else if(userAge >= ageStartUniversity && userAge <= ageStartWork) document.write(`Ви студент`)
//    
//     else if(userAge >= ageStartWork && userAge < ageStartPension) document.write(`Ви працівник`)
//     else if (userAge >= ageStartPension) document.write(`Ви пенсіонер`)



// 5 // З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

// let driveCategory = prompt(`Введіть вашу водійську категорію`)
// const motorcycle = 'A'
// const car = 'B'
// const truck = 'C'
// 
// if(driveCategory == motorcycle) document.write('Мотоцикл')
//     else if (driveCategory == car) document.write('Легковий автомобіль')
//     else if (driveCategory == truck) document.write('Вантажний автомобіль')
// 


// 6 // З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

// let weekDayNumber = parseInt(prompt(`Введіть номер дня тижня`))
// 
// const monday = `Понеділок`
// const tuesday = `Вівторок`
// const wednesday = `Середа`
// const thursday = `Четвер`
// const friday = `П'ятниця`
// const saturday = `Субота`
// const sunday = `Неділя`
// 
// if(weekDayNumber == 1) document.write(monday)
// else if(weekDayNumber == 2) document.write(tuesday)
// else if(weekDayNumber == 3) document.write(wednesday)
// else if(weekDayNumber == 4) document.write(thursday)
// else if(weekDayNumber == 5) document.write(friday)
// else if(weekDayNumber == 6) document.write(saturday)
// else if(weekDayNumber == 7) document.write(sunday)


// 7 // З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

// let monthNumber = parseInt(prompt(`Введіть номер місяця`))
// 
// if(monthNumber == 1 || monthNumber == 2 || monthNumber == 12) document.write(`Зима`)
//  else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) document.write(`Весна`)
//  else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) document.write(`Літо`)
//  else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) document.write(`Осінь`)