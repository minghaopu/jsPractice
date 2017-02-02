(function(){
	typeof NaN === "number"
	1 / 0; // Infinity;
	-1 / 0; // -Infinity;
	Infinity === Number.POSITIVE_INFINITY;
	-Infinity === Number.NEGATIVE_INFINITY;

	let a = Number.MAX_VALUE; //1.7976931348623157e+308
	a + a; // Infinity
	a + Math.pow(2, 970); // Infinity;
	a + Math.pow(2, 969); // 1.7976931348623157e+308

	Infinity / Infinity; // NaN;

	1 / Infinity; // 0;
	-1 / Infinity; // -0;

	0 * -3; // -0;
	0 / -3; // -0;

	var b = -0;
	b.toString(); 	// "0";
	b + ""; 		// "0"
	String(b);		// "0";
	JSON.stringify(b) //"0"

	+"-0";			// -0;
	Number("-0");	// -0;
	JSON.parse("-0"); // -0;

	0 === -0;

	function isNegZeor(val) {
		val = Number(val);
		return (val === 0) && (1 / n === -Infinity);
	}


	NaN instanceof Number; // false
})()