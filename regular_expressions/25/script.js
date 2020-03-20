let str = '<a href="" class="eee" id="zzz">';
let res = str.match(/\w+?(?==)/g);
document.write(res);
