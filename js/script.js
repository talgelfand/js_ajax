'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); // настройка запроса
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) { // условия при которых опреация завершена успешно
            console.log(request.response);
            const data = JSON.parse(request.response); // получаем обычный JavaScript объект, который можно использовать
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // у полученного объекта используем свойство current и его свойство usd
        } else { // если сервер сломался или что-то пошло не так
            inputUsd.value = 'Что-то пошло не так';
        }
    });


    // status
    // statusText
    // response
    // readyState


});