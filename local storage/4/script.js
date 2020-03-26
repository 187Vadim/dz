let phonebook = {
    counter: 0
    , arrInputId: ['inputName', 'inputTel', 'inputEmail', 'buttonAdd']
    , arrInputId2: [document.getElementById('inputName'), document.getElementById('inputTel'), document.getElementById('inputEmail'), document.getElementById('buttonAdd')]
    , arrRegExpName: [/^[a-z][a-z0-9]*?([-_][a-z0-9]+){0,2}$/i
      , /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      , /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(|com||[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/im
    ]
    , addContact() {
        for (let i = 1; i < phonebook.arrInputId2.length; i++) {
            phonebook.arrInputId2[i].disabled = true;
        }
        var arrInputValue = []
            , newTr = document.createElement('tr')
            , newTd;
        tbody.appendChild(newTr);
        newTr.id = 'row__' + phonebook.counter;
        for (let i = 0; i < phonebook.arrInputId2.length - 1; i++) {
            newTd = document.createElement('td');
            newTr.appendChild(newTd);
            newTd.innerHTML = phonebook.arrInputId2[i].value;
            phonebook.arrInputId2[i].value = '';
            phonebook.arrInputId2[i].style.borderColor = 'transparent';
        }
        newTd = document.createElement('td');
        newTr.appendChild(newTd);
        newTd.innerHTML = '<input type="button" id="remove__' + phonebook.counter++ + '" onclick="phonebook.removeContact()" value="Remove" class="btn btn-danger" style="margin: .500em;">';
        var rowNumber = 'row__' + (phonebook.counter - 1);
        var newTrLS = newTr.outerHTML;
        console.log(newTrLS);
        localStorage.setItem(rowNumber, newTrLS);
    }
    , removeContact() {
        document.getElementById('tbody').onclick = function fn(e = e || event) {
            let target = e.target || e.srcElement;
            tbody.removeChild(document.getElementById('row__' + +target.id.slice(8)));
            localStorage.removeItem('row__' + +target.id.slice(8));
        }
    }
    , EventListener() {
        for (let i = 0; i < phonebook.arrInputId.length; i++) {
            document.getElementById(phonebook.arrInputId[i]).addEventListener('keypress', () => {
                if (phonebook.arrRegExpName[i].test(document.getElementById(phonebook.arrInputId[i]).value)) {
                    document.getElementById(phonebook.arrInputId[i]).style.borderColor = 'Green';
                    document.getElementById(phonebook.arrInputId[i + 1]).disabled = false;
                }
                else document.getElementById(phonebook.arrInputId[i]).style.borderColor = 'Maroon';
            })
        }
    }
    , initializer() {
        var iterator = localStorage.length - 1;
        if (localStorage.length) {
            for (iterator; iterator >= 0; iterator--) {
                var _newTr = document.createElement('tr');
                tbody.appendChild(_newTr);
                _newTr.id = 'row__' + iterator;
                _newTr.innerHTML = localStorage.getItem('row__' + iterator);
                phonebook.counter++;
            }
        }
    }
    , start() {
        this.initializer();
        this.EventListener();
        this.listenerTargetAdder();
    }
}
phonebook.start();