let string = '12 34 56 78';
let res = string.replace(/(\d)(\d)/g, "$2$1");
document.write(res);
