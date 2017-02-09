(function () {
	var a = null;
	var b = Object(a);
	a == b;				// false;

	var a = undefined;
	var b = Object(a);
	a == b;				// false;

	var a == NaN;
	var b = Object(a);
	var c = new Number(a);
	a == b;				// fasle;
	a == c;				// fasle;
	b == c;				// false;
	b === c;			// false;

	// var i = 2;
	// Number.prototype.valueOf = function(){
	// 	return i++;
	// };
	// var a = new Number(43);
	// if (a == 2 && a == 3) {
	// 	console.log('this happen');
	// }
	// if (a === 2 && a === 3) {
	// 	console.log('this not happen');
	// }
})()