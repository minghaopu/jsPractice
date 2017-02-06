(function() {
	var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 10000 * 1000 * 1000;
	a.toString(); // "1.07e+22"

	Symbol("abc").toString(); //"Symbol(abc)"
	true.toString(); // "true"
	"abc".toString(); // "abc"
	undefined.toString(); //Uncaught TypeError: Cannot read property 'toString' of undefined
	null.toString(); //Uncaught TypeError: Cannot read property 'toString' of undefined

	var c = function(a, b) {
		a + b
	};
	c.toString(); // "function (a, b) {a + b}"

	var a = {
		b: 1
	};
	a.toString(); // "[object Object]"

	var b = [1, undefined, 3, null, function() {}, {}];
	b.toString(); // "1,,3,,function (){},[object Object]"


	// JSON.stringify();

	JSON.stringify(42); //"42"
	JSON.stringify("42"); // ""42""
	JSON.stringify(null); // "null"
	JSOn.stringify(true); // "true"

	JSON.stringify(undefined) === undefined; // true
	JSON.stringify(function() {}) === undefined; // true;

	JSON.stringify([1, undefined, 3, null, function() {}, {
		a: {
			b: 1,
			c: function() {}
		}
	}, Symbol("123")]);
	//"[1,null,3,null,null,{"a":{"b":1}},null]"

	// If there is a toJSON method in object, JSON.stringify will call toJSON first
	// to get a value for serialization;
	var a = {
		val: [1, 2, 3],
		toJSON: function() {
			return this.val.slice(1);
		}
	};
	JSON.stringify(a);		// "[2,3]";

	var b = {
		val: [1,2,3],
		toJSON: function() {
			return this.val.length;
		}
	}
	JSON.stringify(b);		// "3" ;


	// JSON.stringify(val, replacer, space);
	// if replacer is array, then each item should be string which is the property name of object
	var a = {
		b: 42,
		c: "42",
		d: {
			e: [1,2,3],
			f: undefined,
			g: null,
			h: function(){}
		}
	}
	JSON.stringify(a, ["b", "c", "g"]);		// "{"b":42,"c":"42"}"
	JSON.stringify(a, ["b", "c", "d"]);		// "{"b":42,"c":"42","d":{}}"
	JSON.stringify(a, ["b", "c", "d", "g"]);// "{"b":42,"c":"42","d":{"g":null}}"

	// if replace is function, it will be called once for object
	// for each property, the function will also be called once;
	// for object itself, k is undefined, for others, k is the properpty name;
	JSON.stringify(a, function(k, v){		//"{"b":42,"d":{"e":[1,2,3],"g":null}}"
		if (k !== "c") return v;
	});
	JSON.stringify(a, function(k, v) {		// ""-{\"b\":42,\"c\":\"42\",\"d\":{\"e\":[1,2,3],\"g\":null}}""
		return k + "-" + JSON.stringify(v);	
	});

	// space is for indentation, positive integer;
	JSON.stringify(a, null, 3);	
	/*
	"{
	   "b": 42,
	   "c": "42",
	   "d": {
	      "e": [
	         1,
	         2,
	         3
	      ],
	      "g": null
	   }
	}"
	*/

	JSON.stringify(a, null, 10);
	/*
	"{
	          "b": 42,
	          "c": "42",
	          "d": {
	                    "e": [
	                              1,
	                              2,
	                              3
	                    ],
	                    "g": null
	          }
	}"
	*/


	// space also could be string, but only first 10 characters of the string will be used for indention
	JSON.stringify(a, null, "------------------------");
	/*
	"{
	----------"b": 42,
	----------"c": "42",
	----------"d": {
	--------------------"e": [
	------------------------------1,
	------------------------------2,
	------------------------------3
	--------------------],
	--------------------"g": null
	----------}
	}"
	*/


	String(document);	// "[object HTMLDocument]"
	String(document.all);	// "[object HTMLAllCollection]"
	var a = document.getElementsByTagName("div");
	String(a);			// "[object HTMLCollection]"
	String(window);		// "[object Window]"











})();