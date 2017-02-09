(function() {
	Number(undefined);	// NaN
	Number(true);		// 1
	Number(false);		// 0
	Number(null);		// 0
	Number(NaN);		// NaN;


	Number("-0");		// -0
	Number("1");		// 1
	Number("01");		// 1
	Number("-1");		// -1

	Number("0x10")		// 16
	Number("0o10")		// 8
	Number("0b10")		// 2


	Number("-1e10");	// -10000000000
	Number("-1e100");	// -1e+100
	Number("-1e1000");	// -Infinity
	Number("-1e10000");	// -Infinity
	Number("1e10000");	// Infinity

	Number("-1e10.0");	// NaN
	Number("fdas");		// NaN
	Number("");			// 0

	Number(Symbol("123"));	//Uncaught TypeError: Cannot convert a Symbol value to a number

	Number([]);			// 0
	Number([1]);		// 1
	Number([1,2]);		// NaN

	Number({});			// NaN
	Number({"a":"1"});	// NaN
	Number(function(){}); // NaN



	// if valueOf exist use valueOf, else use toString, else NaN
	var a = {
		toString: function() {
			return "43"
		},
		valueOf: function() {
			return "42"
		}
	}
	Number(a);			// 42;

	var b = {
		toString: function() {
			return "43"
		}
	}
	Number(b);			// 43;

	var c = [1];
	c.valueOf = function() {
		return "2"
	}
	c.toString = function() {
		return "3";
	}
	Number(c);			// 2;

	var d = [1,2,3];
	d.toString = function() {
		return this.join("");
	}
	Number(d);			// 123


	Number(document);	// NaN
	Number(document.all);	// NaN
	var a = document.getElementsByTagName("div");
	Number(a);			// NaN
	Number(window);		// NaN

	Date.now() === +new Date();  // true;


	0 | -0;			// 0;
	0 | NaN;		// 0;
	0 | Infinity;	// 0;
	0 | -Infinity;	// 0;
	0 | undefined;	// 0;
	0 | null;		// 0;


	// ~~~ can be used to repalce Math.floor if val > 0;
	~~(44/7);		// 6
	~~(-49.6);		// -49
	Math.floor(-49.6);		// -50


	// Do not use non-string value for parseInt;
	// parseInt will call toString first

	parseInt(Infinity, 19);					// 18
	parseInt(function(){}, 19);				// 15
	for (var i = 0; i < 100; i++) {
		// console.log(parseInt(Infinity, i));			// may not be NaN
		// console.log(parseInt(function(){}, i));		// may not be NaN
		// console.log(parseInt({}, i)); 				// NaN;
		// console.log(parseInt([2], i));				// 2 or NaN
		// console.log(parseInt([], i));				// NaN;
		// console.log(parseInt(Symbol("123"), i));		// Uncaught TypeError: Cannot convert a Symbol value to a string
	}
})()