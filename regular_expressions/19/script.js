let string = "a1b c34d x567z";
let res = string.match(/\d/g);
let sum = 0;
for (digit of res) {
    sum += Number(digit);
}
document.write(sum);
