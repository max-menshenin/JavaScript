/* Задание 9.
Ранее в юните «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
Удачи!*/

function getElementsArray(array) {
    let countEven = 0; 
    let countOdd = 0;
    let countOther = 0;
    
    for (let i = 0; i < array.length; i++) {
      if ((array[i] === 0) || (typeof (array[i]) != 'number')) {
        countOther++;
      } else {
        if (array[i] % 2 === 0) {
          countEven++;
        } else {
          countOdd++;
        }
      }
    }
    console.log('Четных = ', countEven, 'нечетных = ', countOdd, 'остальные = ', countOther);
}


let arr = [2, 4, 6, 'test', null];
getElementsArray(arr);
