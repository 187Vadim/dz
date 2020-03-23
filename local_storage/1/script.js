let qqq = document.getElementById('qqq');
qqq.addEventListener('blur', function () {
    localStorage['value'] = qqq.value;
});
qqq.value = localStorage['value'];
