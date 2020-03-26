let textarea = document.getElementById("textarea");
textarea.addEventListener('blur', function () {
    localStorage['value'] = textarea.value;
});
window.addEventListener('load', function () {
    if (localStorage['value'] !== undefined) textarea.value = localStorage['value'];
});