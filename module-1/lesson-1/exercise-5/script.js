const userHeihtFoot = Number(prompt("сколько в его росте футов?"));
const userHeihtInch = Number(prompt("сколько в его росте дюймов?"));
const userHeight = (userHeihtFoot * 12 + userHeihtInch) * 2.54;
console.log(userHeight);
