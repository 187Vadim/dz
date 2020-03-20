document.write("Задача 2: ")
let string2 = 'https://www.google.ru/';
document.write(/^http|https\/\//.test(string2));
document.write("<br>Задача 4: ");
let string4 = 'prikol.jpeg';
document.write(/\.jpg|jpeg/.test(string4));
document.write("<br>Задача 6: ");
let string6 = '187';
document.write(/^\d{1,12}$/.test(string6));
document.write("<br>Задача 8: ");
let string8 = '18.07.1871';
document.write(/(\d{2}\.){2}\d{4}/.test(string8));
document.write("<br>Задача 10: ");
let string10 = 'katsepugav@gmailcom'
document.write(/^[\w.\-\_]+?@[a-z]+?\.[a-z]+/.test(string10));
