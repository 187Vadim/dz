let sym = Symbol.for('sym');
//создание 2 массивов
function CreateArray() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array[i] = Math.floor(Math.random() * 10 + 1);
    }
    sum(array);
    return array;
}
let massiv1 = CreateArray();
console.log(massiv1)
let massiv2 = CreateArray();
console.log(massiv2)
document.write('Первый массив: ' + massiv1);
document.write(' Второй массив: ' + massiv2 + '<br>');
//отбор одинаковых элементов
function obshieelementi(massiv1, massiv2) {
    let elementi = [];
    for (let i = 0; i < massiv1.length; i++) {
        for (let j = 0; j < massiv2.length; j++) {
            if (massiv1[i] == massiv2[j] && elementi.includes(massiv1[i]) !== true) elementi.push(massiv1[i]);
        }
    }
    sum(elementi);
    return elementi;
}
let result = obshieelementi(massiv1, massiv2);
document.write('Общие элементы: ' + result + '<br>');
//функция подсчета суммы
function sum(arr) {
    arr[sym] = function () {
        let sum = 0;
        for (let elem of this) {
            sum += elem;
        }
        return sum;
    }
}
document.write('Сумма элементов первого массива: ' + massiv1[sym]() + '<br>');
document.write('Сумма элементов второго массива: ' + massiv2[sym]() + '<br>');
document.write('Сумма элементов которые есть в обоих массивах: ' + result[sym]());