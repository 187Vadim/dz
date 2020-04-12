let arr = [1, 2, 3, 4, 5];
let sym = Symbol('');
arr[sym] = function () {
    let sum = 0;
    for (let key in this) { 
        sum = sum + this[key];
    }
    document.write('Сумма = ' + sum);
    console.log(sum);
}
arr[sym]();