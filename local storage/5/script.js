let wrapper = document.querySelector('#wrapper');
let nav = wrapper.querySelector('#nav');
let text = wrapper.querySelector('#text')
let dateDay = wrapper.querySelector('#date');
let month = wrapper.querySelector('#month');
let year = wrapper.querySelector('#year');
let event = wrapper.querySelector('#event');
let date = new Date();
window.addEventListener('DOMContentLoaded', () => {
    dateDay.value = date.getDate();
    month.value = getArryaMonth()[date.getMonth()];
    year.value = date.getFullYear();
    showValue(dateDay, month, year, text);
});
nav.addEventListener('click', (event) => {
    let target = event.target;
    if (target.id == 'left') {
        let counterDate = new Value(dateDay.value, month.value, year.value);
        let {
            yearObj, monthObj, num
        } = counterDate.diff();
        dateDay.value = num;
        month.value = monthObj;
        year.value = yearObj;
        showValue(dateDay, month, year, text);
    }
    else if (target.id == 'right') {
        let counterDate = new Value(dateDay.value, month.value, year.value);
        let {
            yearObj, monthObj, num
        } = counterDate.sum();
        dateDay.value = num;
        month.value = monthObj;
        year.value = yearObj;
        showValue(dateDay, month, year, text);
    }
});
event.addEventListener('click', (event) => {
    let target = event.target;
    if (target.id == 'save') {
        saveValue(dateDay, month, year, text);
    }
    else if (target.id == 'show') {
        showValue(dateDay, month, year, text);
    }
});

function Value(valueDate, valueMonth, valueYear) {
    let num = +valueDate;
    let monthObj = valueMonth;
    let yearObj = +valueYear;
    this.diff = () => {
        num--;
        if (num == 0) {
            let date = new Date(yearObj, getNumMonth(monthObj, getArryaMonth()), num);
            let [monthArr, yearArr] = getMonthAndYear(num, getArryaMonth(), getNumMonth(monthObj, getArryaMonth()), yearObj);
            monthObj = monthArr;
            yearObj = yearArr;
            num = date.getDate();
        }
        return {
            yearObj, monthObj, num
        };
    };
    this.sum = () => {
        num++;
        let date = new Date(yearObj, getNumMonth(monthObj, getArryaMonth()) + 1, 0);
        let day = date.getDate() + 1;
        if (num == day) {
            num = 1;
            let [monthArr, yearArr] = getMonthAndYear(num, getArryaMonth(), getNumMonth(monthObj, getArryaMonth()), yearObj);
            monthObj = monthArr;
            yearObj = yearArr;
        }
        return {
            yearObj, monthObj, num
        };
    };
}

function getMonthAndYear(num, arrMonth, nowMonthIndex, yearObj, day) {
    if (num == 0) {
        nowMonthIndex--;
        if (nowMonthIndex == -1) {
            nowMonthIndex = arrMonth.length - 1;
            yearObj--;
        }
        return [arrMonth[nowMonthIndex], yearObj];
    }
    else if (num == 1) {
        nowMonthIndex++;
        if (nowMonthIndex == 12) {
            nowMonthIndex = 0;
            yearObj++;
        }
        return [arrMonth[nowMonthIndex], yearObj];
    }
    else {
        return [arrMonth[nowMonthIndex], yearObj];
    }
}

function getNumMonth(month, arrMonth) {
    for (let i = 0; i < arrMonth.length; i++) {
        if (month == arrMonth[i]) {
            return i;
        }
    }
}

function saveValue(dateDay, month, year, text) {
    let key = dateDay.value + month.value + year.value;
    localStorage.setItem(key, text.value);
}

function showValue(dateDay, month, year, text) {
    let key = dateDay.value + month.value + year.value;
    if (localStorage.getItem(key) == null) {
        //text.value = 'введите текст';
    }
    else {
        text.value = localStorage.getItem(key);
    }
}

function getArryaMonth() {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
}