(function() {
	Number(undefined);	// NaN
	Number(true);		// 1
	Number(false);		// 0
	Number(null);		// 0
	Number(NaN);		// NaN;


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

	Number("-1e10.0");	// NaN
	Number("fdas");		// NaN
	Number("");			// 0

	Number(Symbol("123"));	//Uncaught TypeError: Cannot convert a Symbol value to a number

	Number([]);			// 0
	Number([1]);		// 1
	Number([1,2]);		// NaN

	Number({});			// NaN
	Number({"a":"1"});	// NaN


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
})()