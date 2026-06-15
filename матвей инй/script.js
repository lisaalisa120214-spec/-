const messages = [
    "Матюш, иди нахуй",
    "Я скучаю",
    "Заебал шутить про корейцев",
    "Пойдём уже пить пиво",
    "Longus penis basis vita",
    "Кстати нашему огоньку пизда)",
    "Ну я хз уже, что писать"
];

let lastIndex = -1; // Храним индекс предыдущей надписи, чтобы не повторять её сразу
let isAnimating = false; // Флаг для защиты от слишком быстрых нажатий

const button = document.getElementById('magicButton');
const messageDisplay = document.getElementById('messageDisplay');
const transitionDuration = 400; // 400 мс = 0.4s (должно совпадать с transition в CSS)

button.addEventListener('click', () => {
    // Если анимация уже идет, игнорируем нажатие
    if (isAnimating) return;
    isAnimating = true;

    // 1. Запускаем анимацию исчезновения
    messageDisplay.classList.remove('visible');
    
    // 2. Ждем, пока текст полностью исчезнет (400 мс)
    setTimeout(() => {
        // 3. Выбираем случайный индекс
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * messages.length);
        } while (randomIndex === lastIndex); // Гарантируем, что новая надпись отличается от предыдущей
        
        lastIndex = randomIndex; // Запоминаем текущий индекс

        // 4. Меняем текст на новый случайный
        messageDisplay.textContent = messages[randomIndex];
        
        // 5. Запускаем анимацию появления
        messageDisplay.classList.add('visible');
        
        // 6. Разрешаем новые нажатия после завершения анимации появления
        setTimeout(() => {
            isAnimating = false;
        }, transitionDuration);
        
    }, transitionDuration);
});