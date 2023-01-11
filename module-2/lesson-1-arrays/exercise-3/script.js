// Задача 1
// // Сидять мушкетери в таверні. Підходе людина та зипутиє у вишибали кого він шукає.
// // Відповідно працівник таверни іде в зал перебирати всіх хто є в пошуках потрібної людини.

// const users = ["Атос", "Портос", "Арамис", "Дартаньян"];
// const user = prompt("Кого ви шукаєте?");
// let result = false;

// for (const value of users) {
//   if (value === user) {
//     result = true;
//     break;
//   }
// }
// if (result) {
//   console.log(`Зараз ${user} вийде до вас`);
// } else {
//   console.log(`${user} не найден`);
// }

// // Задача 2

// const presidents = ["Клинтон", "Буш", "Обама", "Трамп", "Байден"];

// for (const president of presidents) {
//   if (president === "Трамп") {
//     continue;
//   }
//   console.log(president);
// }

// Задача 3
// const planets = [
//   "Меркурий",
//   "Венера",
//   "Земля",
//   "Марс",
//   "Юпитер",
//   "Сатурн",
//   "Уран",
//   "Нептун",
// ];
// const planetsStr = planets.join(" ");
// console.table(planetsStr);
// console.log(`Планеты Солнечной системы: ${planetsStr}`);

//
// Задача 4
// const holidays = ["Новий рік", "8 березня", "23 лютого", "31 грудня"];

// // нам треба замінити 23 лютого на 14 жовтня

// const index = holidays.indexOf("23 лютого");
// console.log(index);
// console.log(holidays);
// holidays[index] = "14 жовтня";
// console.log(holidays);
// console.log(holidays.indexOf("Різдво"));

// function testFunction() {
//   const x = 5;
//   const y = 10;
//   console.log(x + y);
// }
// testFunction();

// function returnResult(a, b, c) {
//   const result = a + b * c;
//   return result;
// }
// const result = returnResult(5, 10, 2);
// console.log(result);

// function min(a, b) {
//   return a < b ? a : b;
// }
// console.log(min(2, 5));
// console.log(min(7, 5));
// console.log(min(1, 1));

// const sum = function testFunction() {
//   const x = 5;
//   const y = 10;
// };
// console.log(sum);

// const maxNumber = getMaxValue(3, 7, 6);
// console.log(maxNumber);
// const keivSquare = calcCircleArea(20);
// console.log(keivSquare);
// const calcCircleArea = function (radius) {
//   const circleArea = 3.1516926 * radius ** 2;
//   return circleArea;
// };
// const keivSquare = calcCircleArea(20);
// function getMaxValue(value1, value2, value3) {
//   if (value1 > value2 && value1 > value3) {
//     return value1;
//   } else if (value2 > value1 && value2 > value3) {
//     return value2;
//   } else {
//     return value3;
//   }
// }

// const a = 42;
// // console.log(a);
// // 42
// function wrap(a) {
//   const b = a;
//   console.log(b); // Без проблем, переменная a доступна в этой функции.
// }
// wrap(a);

// Пользователь вводит возраст. Напишите функцию,
//   которая проверяет, является ли введеное число
//   возврастом,и возвращает true,
//   если это правда, и false - если нет.
//   Критерии возраста:
//    - не пустая строка, пробел или null;
//    - целое число;
//    - больше 0
//   -->

// function isAge(age) {
//   if (typeof age !== "Number") {
//     return false;
//   }
//   if (age % 1 !== 0) {
//     return false;
//   }

//   if (age < 0) {
//     return false;
//   }
//   return true;
//   //   return Number.isInteger(age) && age >= 0;
// }
// console.log(isAge(""));
// console.log(isAge(-1));
// console.log(isAge(3.5));
// console.log(isAge(21));
// console.log(isAge(35));



// <!--    Индекс массы тела.
// Напишите функцию, которая получает в качестве аргументов
// рост в см и вес в кг, и возвращает медицинское заключение
// на основе высчитаного индекса массы тела.
// Индекс массы тела = вес в кг / рост в метрах в квадрате.
// Медицинское заключение на основе индекса массы тела:
// - от 10 до 15 - анорексия;
// - от 15 до 25 - норма;
// - от 25 до 30 - лишний вес;
// - от 30 до 35 - I степень ожирения;
// - от 35 до 40 - II степень ожирения;
// - от 40 и выще - III степень ожирения;
// Помните - функция должна выполнять одно осмысленное действие! -->


// const calcWeightIndex = (h, w) => Math.round((w / ((h/100) ** 2)));

function calcWeightIndex(h, w){
   return Math.round(w / (h/100) ** 2);
}
function getWeightIndexDiagnosis(height, weight) {
    const weightIndex = calcWeightIndex(height, weight)};

    if(weightIndex >= 10 && weightIndex < 15){
        return "Анокерсия";
    }  
    if(weightIndex >= 15 && weightIndex < 25){
        return 'норма';
    }
    if(weightIndex >= 25 && weightIndex < 30){
        return 'лишний вес;';
    }
    if(weightIndex >= 30 && weightIndex < 35){
        return 'I степень ожирения;
    }
    if(weightIndex >= 40){
        return 'III степень ожирения';
    }
    console.log(etWeightIndexDiagnosis(190, 90));
    console.log(etWeightIndexDiagnosis(120, 60));
    console.log(etWeightIndexDiagnosis(130, 140));
    console.log(etWeightIndexDiagnosis(140, 40));
    console.log(etWeightIndexDiagnosis(190, 90));
    console.log(etWeightIndexDiagnosis(200, 60));
