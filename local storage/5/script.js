let textarea = document.querySelector('textarea');
let button = document.getElementById('button');
let left = document.getElementById('left');
let right = document.getElementById('right');
let number = document.getElementById('number');
if (localStorage["pages"] === undefined) {
    localStorage["pages"] = '{"page": ["' + textarea.value + '"] }';
}
let pages = JSON.parse(localStorage["pages"]);
let current = pages['page'].length - 1;
textarea.value = pages['page'][current];
number.value = current + 1;
button.addEventListener('click', function () {
    if (button.innerHTML == "Сохранить") {
        if (textarea.value != '' && pages['page'][current + 1] === undefined) {
            pages['page'][current + 1] = '';
            right.disabled = false;
        }
        pages['page'][current] = textarea.value;
    }
});
left.addEventListener('click', function () {
    if (current > 0) {
        nav_button('-', right);
    }
});
right.addEventListener('click', function () {
    if (current < pages['page'].length) {
        nav_button('+', left);
        if (textarea.value == "undefined") textarea.value = '';
    }
});

function nav_button(sign, button) {
    pages['page'][current] = textarea.value;
    sign == '-' ? current-- : current++;
    textarea.value = pages['page'][current];
    number.value = current + 1;
    number.style.border = '';
}
window.addEventListener('beforeunload', function () {
    localStorage["pages"] = JSON.stringify(pages);
});