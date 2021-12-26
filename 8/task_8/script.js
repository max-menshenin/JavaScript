/* Задание 8.
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
Удачи!*/


let bicycles = new Map([
  ["kama", "green"],
  ["stels", "white"],
  ["erva", "black"]
]);

bicycles.forEach((value, key) => {
  console.log('Ключ — ${key}, значение - ${value}');
});

