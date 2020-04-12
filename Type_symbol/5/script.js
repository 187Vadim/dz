let arr = [1, 2, 3, 4, 5];
let sym = Symbol.for('sym');
arr[sym] = function () {
    let sum = 0;
    for (let key of this) { 
        sum = sum + key;
    }
    document.write('Сумма = ' + sum);
    console.log(sum);
}
arr[sym]();