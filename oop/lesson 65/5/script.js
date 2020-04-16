class Validator {
isEmail(str){
return /^[a-zA-Z0-9._\-]+@[a-z]+\.[a-z]{2,3}$/.test(str);
}
isDomain(str){
return /^[a-zA-Z0-9._\-]+\.[a-z]{3}$/.test(str);
}
isDate(str){
return /^\d\d\.\d\d\.\d\d\d\d$/.test(str);
}
isPhone(str){
return /^\+\d\s\(\d\d\d\)\s\d\d\d-\d\d-\d\d$/.test(str);
}
}
let validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны