/* Задание 7.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
Удачи!*/

let arr = [2, 4, 6, 'test', null];
let countEven = 0; 
let countOdd = 0;
let countOther = 0;

for (let i = 0; i < arr.length; i++) {
  if ((arr[i] === 0) || (typeof (arr[i]) != 'number')) {
    countOther++;
  } else {
    if (arr[i] % 2 === 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }
}
console.log('Четных = ', countEven, 'нечетных = ', countOdd, 'остальные = ', countOther);