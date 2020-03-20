let string = 'sss site.ru zzz site.com kkk';
let result = string.replace(/[a-z]+?\.[a-z]+?\s/g, "<a href='http://site.ru'>site.ru</a> ");
document.write(result);
