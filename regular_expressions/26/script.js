let str = 'aaa [2] bbb [3] ccc [12] ddd';
let result = str.replace (/\[(\d+)\]/g, function(match, value){
    return "[" + (value * 2) + "]";
});
document.write(result);
