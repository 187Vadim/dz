let obj = {
    aaaa: 1, 
    bbbb: 2,
    cccc: 3
}
let sym = Symbol('');
obj[sym] = function () {
    let sum = 0;
    for (let key in this) {
        sum = sum + this[key];
    }
    document.write('Сумма = ' + sum);
    console.log(sum);
}
obj[sym]();