window.addEventListener('beforeunload', function () {
    let save = [];
    for (let i = 0; i < form.length; i++) {
        if (form[i].type == "text") {
            save[i] = form[i].value;
        }
        if (form[i].type == "radio") {
            save[i] = form[i].checked;
        }
        if (form[i].type == "select-one") {
            save[i] = form[i].selectedIndex;
        }
        if (form[i].type == "textarea") {
            save[i] = form[i].value;
        }
        localStorage["formsave"] = JSON.stringify(save);
    }
});
let form = document.querySelector('form');
if (localStorage["formsave"] !== undefined) {
    window.addEventListener('load', function () {
        let to_load = JSON.parse(localStorage["formsave"]);
        for (let i = 0; i < form.length; i++) {
            if (form[i].type == "text") {
                form[i].value = to_load[i];
            }
            if (form[i].type == "radio") {
                form[i].checked = to_load[i];
            }
            if (form[i].type == "select-one") {
                form[i].selectedIndex = to_load[i];
            }
            if (form[i].type == "textarea") {
                form[i].value = to_load[i];
            }
        }
    });
}