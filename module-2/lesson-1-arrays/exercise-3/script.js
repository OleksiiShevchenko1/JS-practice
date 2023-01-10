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
