const consoleLog = document.querySelector('#consoleLog');
const showAlert = document.querySelector('#alert');
const showPrompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода в информации в консоль');
    console.log('Текст, выведенный в консоль');
});

showAlert.addEventListener('click', () => {
    alert('Пример использования команды alert');
});

showPrompt.addEventListener('click', () => {
    prompt('Пример использования команды prompt');
});