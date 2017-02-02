(function() {
	var mysym = Symbol("my own symbol");		// string, number, boolean
	mysym; 					// Symbol(my own symbol)
	mysym.toString(); 		// "Symbol(my own symbol)"
	String(mysym) 			// "Symbol(my own symbol)"
	typeof mysym; 			// "symbol"


	var s4 = Symbol(Symbol());			// Uncaught TypeError: Cannot convert a Symbol value to a string

	const obj = {
		toString() {
			return 'abc';
		}
	};
	const sym = Symbol(obj);
	sym; 					// Symbol(abc)



	var s1 = Symbol();
	var s2 = Symbol();
	s1 == s2;				// false
	s1 === s2; 				// false

	var s1 = Symbol('abc');
	var s2 = Symbol('abc');
	s1 == s2;				// false
	s1 === s2; 				// false



	var sym = Symbol('My symbol');
	"your symbol is " + sym;		// Uncaught TypeError: Cannot convert a Symbol value to a string
	sym & 1;						// Uncaught TypeError: Cannot convert a Symbol value to a string
	sym + 1;						// Uncaught TypeError: Cannot convert a Symbol value to a string
	sym && 1;						// 1;
	sym && true;					// true;
	!sym;							// false;

	var a = {};
	a[mysym] = "foobar";

	for (var i = 0; i < 10; i++) {
		a[Symbol.iterator] = i;
	}

	for (var prop in a) {
		console.log(prop + ":" + a[prop]);
	}
})()