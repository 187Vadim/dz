let string = '31.12.2025';
let pockets = string.match(/(\d{2})\.(\d{2})\.(\d{4})/);
let pockets_names = ["Дата: ", "День : ", "Месяц : ", "Год : "];
for (let i = 0; i < pockets.length; i++) {
    document.write(pockets_names[i] + pockets[i] + "<br>");
}
