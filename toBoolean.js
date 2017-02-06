(function() {
	Boolean(-0);	// false
	Boolean(0);		// false
	Boolean(undefined);	// false;
	Boolean(null);	// false;
	Boolean(NaN);	// fasle;
	Boolean("");	// false;

	Boolean("a")	// true
	Boolean(1);		// true
	Boolean(-1);	// true
	Boolean(-Infinity);		// true
	Boolean(Infinity);		// true

	Boolean([]);		// true
	Boolean({});		// true
	Boolean(function(){});	// true



	var a = new Boolean(false);
	var b = new Number(0);
	var c = new String("");
	var d = Boolean(a && b && c);	// true;  All of them are object

	Boolean("fasle" && "0" && "''");	// true;



	var d = a && b && c;	// String {length: 0, [[PrimitiveValue]]: ""}
	var d = c && b && a;	// Boolean {[[PrimitiveValue]]: false}
	var d = a && c && b;	// Number {[[PrimitiveValue]]: 0}

	// Falsy Object
	Boolean(document.all);	// false!!!


	Boolean(document);	// true
	var a = document.getElementsByTagName("div");
	Boolean(a);			// true
	Boolean(window);	// true
})()