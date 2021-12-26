const linkText = document.querySelector('#linkText');
linkText.addEventListener('click', (event) => {
    linkText.textContent = prompt();
});
const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', (event) => {
    linkText.textContent = 'Измените текст ссылки';
});
linkText.addEventListener('click', (event) => {
    event.preventDefault;
});