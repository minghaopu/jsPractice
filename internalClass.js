(function() {
	Object.prototype.toString.call([]);					// "[object Array]"
	Object.prototype.toString.call([1, 2, 3]);			// "[object Array]"

	Object.prototype.toString.call({});					// "[object Object]"
	Object.prototype.toString.call({					// "[object Object]"
		a: 1
	});

	Object.prototype.toString.call(/regex-literal/i);	// "[object RegExp]"

	Object.prototype.toString.call(null);				// "[object Null]"

	Object.prototype.toString.call(undefined);			// "[object Undefined]"

	Object.prototype.toString.call("");					// "[object String]"
	Object.prototype.toString.call("avd");				// "[object String]"

	Object.prototype.toString.call(12);					// "[object Number]"
	Object.prototype.toString.call(NaN);				// "[object Number]"

	Object.prototype.toString.call(true);				// "[object Boolean]"



	var a = new String("abc");
	var b = a + "";
	typeof a; // "object"
	typeof b; // "string"
})();