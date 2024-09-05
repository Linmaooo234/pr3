"use strict";

// задание 1
let stoimosttovara = Number(prompt("Введите стоимость товара"));
let kolvomoney = Number(prompt("Введите количество денег клиента"));

if (stoimosttovara < 0 || kolvomoney < 0){
    alert ("Неверный формат данных");
}
else if(stoimosttovara == kolvomoney){
    alert ("Покупка совершена");
}else if(stoimosttovara > kolvomoney){
    let nehvataet = stoimosttovara - kolvomoney;
    alert (`Вам не хватает ${nehvataet}`);
}else{
    let sdacha = kolvomoney - stoimosttovara;
    alert (`Ваша сдача ${sdacha}`);
}

// задание 2
let chislo = Number(prompt("Введите число"));

if(chislo>0){
    alert ("1");
}else if(chislo<0){
    alert ("-1");
}else if(chislo == 0){
    alert ("0");
}

// задание 3

let a = Number(prompt("Введите число номер 1"));
let b = Number(prompt("Введите число номер 2"));
let result = (a + b < 4) ? 'Мало' :
'Много';
alert (result);

// задание 4

let login = prompt("Введите вашу роль");

let message = (login == "Сотрудник") ? "Привет" :
(login == "Директор") ? "Здравствуйте" : 
(login == "") ? "Нет логина" : " "
alert (message);

// задание 5
let logink = prompt("Напишите свой логин");

if (logink == "Админ"){
    let password = prompt("Напишите свой пароль");
    if(password == ""){
        alert ("Отменено!");
    }else if (password == "Я главный"){
        alert ("Здравствуйте");
    }else{
        alert ("Неверный пароль");
    }
}else{
    alert ("Я не знаю кто вы")
}
