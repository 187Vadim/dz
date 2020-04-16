class MyString {
    reverse(str) {
        return str.split("").reverse().join("");
    }
    ucFirst(str) {
        return str[0].toUpperCase() + str.substring(1, str.length);
    }
    ucWords(str) {
        return str.split(' ').map(function (zaglavnie) {
            return zaglavnie[0].toUpperCase() + zaglavnie.substring(1, zaglavnie.length);
        }).join(' ');
    }
}
let str = new MyString();
console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'