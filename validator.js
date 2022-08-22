//статическая
class ValidatorStatic {   
    static isEmail(str) {
        let reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        return reg.test(str);               
    }

    static isDomain(str){
        let reg = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,6}$/;
        return reg.test(str);
    }

    static isDate(str){
        let reg = /([0-2][0-9]|[3][0|1])[.]([0][1-9]|[1][1|2])[.]([0-9]{4})/gm;
        return reg.test(str);
    }

    static isPhone(str){
        let reg = /^(\+7|8)+([0-9]){10}$/;
        return reg.test(str);
    }
}

let inputs = document.querySelectorAll('input');
let form = document.querySelector('form');
let email = document.getElementById('email');
let domain = document.getElementById('domain');
let date = document.getElementById('date');
let phone = document.getElementById('phone');

document.addEventListener('submit', function (e){
    e.preventDefault();
    if (ValidatorStatic.isEmail(email.value)){
        inputs[0].style.borderColor = 'green';
    }else {
        inputs[0].style.borderColor = 'red';
    }
    if (ValidatorStatic.isDomain(domain.value)){
        inputs[1].style.borderColor = 'green';
    }else {
        inputs[1].style.borderColor = 'red';
    }
    if (ValidatorStatic.isDate(date.value)){
        inputs[2].style.borderColor = 'green';
    }else {
        inputs[2].style.borderColor = 'red';
    }
    if (ValidatorStatic.isPhone(phone.value)){
        inputs[3].style.borderColor = 'green';
    }else {
        inputs[3].style.borderColor = 'red';
    }    
})

// вывод статической
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+79101234567'));

//стандартная
class Validator {   
    isEmail(str) {
    let reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    return reg.test(str);               
    }

    isDomain(str){
        let reg = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,6}$/;
        return reg.test(str);
    }

    isDate(str){
        let reg = /([0-2][0-9]|[3][0|1])[.]([0][1-9]|[1][1|2])[.]([0-9]{4})/gm;
        return reg.test(str);
    }

    isPhone(str){
        let reg = /^(\+7|8)+([0-9]){10}$/;
        return reg.test(str);
    }
}

var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+79101234567')); 