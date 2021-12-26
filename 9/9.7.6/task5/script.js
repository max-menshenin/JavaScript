const input = document.querySelector('#text');
const btn = document.querySelector('#btn');
const duplicateField = document.querySelector('#duplicateField');

btn.addEventListener('click', (event) => {
    console.log(text.value);
    duplicateField.textContent = text.value;
    event.preventDefault();
    input.value = '';
});