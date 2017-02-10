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

	"0" == null;				// false;
	"0" == undefined;			// false;
	"0" == false;				// true;
	"0" == NaN;					// false;
	"0" == 0;					// true;
	"0" == "";					// false;
	"0" == [];					// false;
	"0" == {};					// false;

	false == null;				// false;
	false == undefined;			// false;
	false == NaN;				// false;
	false == 0;					// true;
	false == "";				// true;
	false == [];				// true;
	false == {};				// false;

	"" == null;					// false;
	"" == undefined;			// fasle;
	"" == NaN;					// fasle;
	"" == 0;					// true;
	"" == [];					// true;
	"" == {};					// false;

	0 == null;					// fasle;
	0 == undefined;				// false;
	0 == NaN;					// fasle;
	0 == [];					// true;
	0 == {};					// fasle;

	[] == ![];					// true;
	2 == [2];					// true;
	"" == [null];				// true;

	0 == "\n";					// true;
	0 == "\t";					// true;

	var a = [42];
	var b = ["43"];
	a < b;						// true;
	var c = ["044"];
	b < c;						// false;


	var a = {b : 42};
	var b = {b : 43};
	a < b;						// fasle
	a > b;						// false
	a == b;						// false
	a >= b;						// true;
	a <= b;						// true;

})()