/*Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

let str = "Hello";

function reverse(str){
    return str.split("").reverse().join("");
}
console.log(reverse(str));