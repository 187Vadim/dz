let obj = {
	a: 1,
	b: 2,
	c: 3
}
let sym = Symbol('');
obj[sym]='test';
for (let key in obj){
console.log(obj[key]);
document.write(obj[key]);}
