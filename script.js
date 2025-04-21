document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('productForm');

    // Изменение цвета заголовка при наведении на Форма заказа обратного звонка

    const formTitle = document.getElementById('formTitle');
    if (formTitle) {
        formTitle.addEventListener('mouseover', function () {
            formTitle.style.color = '#4682B4';
        });
    }

    // Цвет текста в Форма заказа обратного звонка при вводе меняется
    const callbackForm = document.querySelector('.callback-form form');
    if (callbackForm) {
        const inputs = callbackForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.style.color = '#4B0082';
            });
        });
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fields = ['firstName', 'lastName', 'phone', 'date', 'time'];
        const errorMessages = [];
        const errorContainer = document.getElementById('errorMessages');
        const resultContainer = document.getElementById('formResult');

        fields.forEach(id => {
            document.getElementById(id).classList.remove('input-error');
        });
        resultContainer.style.display = 'none';
        resultContainer.innerHTML = '';

        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const phone = document.getElementById('phone');
        const date = document.getElementById('date');
        const time = document.getElementById('time');

        if (!firstName.value.trim()) {
            errorMessages.push('Введите имя');
            firstName.classList.add('input-error');
        }

        if (!lastName.value.trim()) {
            errorMessages.push('Введите фамилию');
            lastName.classList.add('input-error');
        }

        const phonePattern = /^[\d\s\-\+\(\)]+$/;
        if (!phone.value.trim() || !phonePattern.test(phone.value.trim())) {
            errorMessages.push('Введите корректный номер телефона');
            phone.classList.add('input-error');
        }

        if (!date.value) {
            errorMessages.push('Выберите дату');
            date.classList.add('input-error');
        }

        if (!time.value) {
            errorMessages.push('Выберите время');
            time.classList.add('input-error');
        }

        if (errorMessages.length > 0) {
            errorContainer.innerHTML = errorMessages.join('<br>');
        } else {
            errorContainer.innerHTML = '';

            const resultHTML = `
                <h3>Вы ввели:</h3>
                <p><strong>Имя:</strong> ${firstName.value}</p>
                <p><strong>Фамилия:</strong> ${lastName.value}</p>
                <p><strong>Номер телефона:</strong> ${phone.value}</p>
                <p><strong>Дата:</strong> ${date.value}</p>
                <p><strong>Время:</strong> ${time.value}</p>
            `;

            resultContainer.innerHTML = resultHTML;
            resultContainer.style.display = 'block';
        }
    });
});
