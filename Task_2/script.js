/*Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/
function hasFunc(str, obj) {
    if (obj.hasOwnProperty(str)) return true;
    else false;
}
const obj = {
    a: 'hello',
};
//console.log(hasFunc('a', obj));

console.log(obj.hasOwnProperty('a'));
